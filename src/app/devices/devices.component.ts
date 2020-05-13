import { Component, OnInit , Input} from '@angular/core';
//import devices from '../../assets/devices.json';
//import groups from '../../datagroups.json';
import script from '../../assets/dg_script_ready_for_POST.json';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";
import  MD5 from 'crypto-js/md5';
//import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  @Input() grpData = { filename:'' };
  @Input() groupData = { 
  						name:'', 
  						type: '', 
  						source: 'Direct Input', 
  						partition: 'Common' ,
  						desc: 'User direct input' ,
  						records: []
  					};


  constructor(private route: ActivatedRoute, private router: Router, private data: DataService, public rest:RestService) { }

  openDevPanel:boolean = false;
  results:any = {};
  // device_list is for presentiong choices.  It can be only the related devices or all the devices, depending on operation.
  device_list: any = [];
  // device_hostnames is all the devices.
  device_hostnames:any=[];
  dataGroups:any = [];
  groups:any = [];
  fileContent: string = '';
  groupname: string = '';
  addGroup:boolean = false;
  group_missing_on_master:any = [];
  group_fetch_response:any = [];
  relatedDevices:any = [];

  // The following three varialbles are used for MD5 hash matchin of subs and master copies.
  not_inSync_with_master:any = [];
  match_with_master:any = [];
  noHostnameSub:any = [];

  groupMaster:string ='';
  s1:string='';

  title = 'Device List from local JSON file';
  gptitle = 'Data Group List'
  importFromFile:boolean = false;

  ngOnInit() {
  	  this.downloadDGList("datagroups.json");
	  this.downloadDevicesList("devices.json");
	  this.data.setHostnameList(this.device_hostnames);
	  //this.downloadAuth("dgapp1.json");
   	  this.data.setAuth(this.s1);

	  
  	  //this.data.deviceList(devices);
  	  this.data.grp_results.subscribe(results => {
      	this.results = results;

      })
      if (typeof this.results.name != 'undefined') {
	      this.groupname=this.results.name;
       }
  }

  get_dgs(name, addr) {
  	this.data.setDestAddress(name);
   	this.router.navigate(['/dataGroups/', name, addr]);
  }

  get_pools() {
    console.log ('Get pools');
  }

  upload_scripts(i, dest) {
    console.log ('Upload scripts started');
    // Remove the script first to allow for updates.  
    // POST over existing script does not work.
    this.rest.deleteScript(dest, this.s1).subscribe((results:any) => {
	      	console.log('Script Deleted.');
			this.device_list[i].scriptUploadStatus="Script Delete Successful.";

	    this.rest.uploadScript(dest, this.s1, script).subscribe(results => {
	      	console.log('Script uploaded.');
			this.device_list[i].scriptUploadStatus="Script upload Successful.";
	      }, (err) => {
	      	this.device_list[i].scriptUploadStatus="Script upload failed.";
	      	console.log(err.message.message);
	    });

    }, 
    (err) => {
	      	this.device_list[i].scriptUploadStatus="Script delete failed.";
	      	console.log('Script delete fail:', err.message.message);

		    this.rest.uploadScript(dest, this.s1, script).subscribe(results => {
		      	console.log('Script uploaded.');
				this.device_list[i].scriptUploadStatus="Script upload Successful.";
		      }, (err) => {
		      	this.device_list[i].scriptUploadStatus="Script upload failed.";
		      	console.log(err.message.message);
		    });
	 }

    );

  }

  editCurrent() {
	  this.router.navigate(['/records/', this.groupname]);
  }

  addNewGroup() {
      	  this.data.setGrpData(this.groupData);
      	  this.data.setGrpSource('Direct Input');
      	  this.data.setSaveResults('Not Saved');
          this.router.navigate(['/records/'+this.groupData.name]);
  }

  openDevicesPanel() {
  	this.openDevPanel=!this.openDevPanel;
  	//this.downloadDevicesList('devices.json');
  }


  openRecordsPanel(i, grp, dest) {
	if (this.device_hostnames[dest]==undefined) {
		this.group_fetch_response[i]='Check device to hostname mapping in devices file.';
		return
	}
    this.rest.getProduct(grp, this.device_hostnames[dest], this.s1).subscribe((group: any) => {
      //recs=data; From master
      //console.log('Received data-group from master: ' , group);
      //group.master=this.groupMaster;
      //group.devices=this.relatedDevices;
      //group.source='BigIP';
   	  this.data.setGrpData(group);
   	  this.data.setGrpSource('BigIP');
 	  this.data.deviceList(this.dataGroups[i].devices);
      this.group_missing_on_master[i]=true;
      this.dataGroups[i].exists = 'yes';
	  this.router.navigate(['/records/'+ this.dataGroups[i].name]);

      //console.log('***',this.group);
    }, (err) => {
	    	if (err=='TimeoutError: Timeout has occurred') {
	    	  	this.group_fetch_response[i]='No response from Master, possible network issues.';
	    	} else if ( err=="TypeError: Cannot read property 'length' of undefined") {
				this.group_fetch_response[i]='Check device to hostname mapping in devices file.';
	    	} else {
	          this.group_missing_on_master[i]=true;
	    	}
    	    //console.log('Open panel Get Records: ', err );
	   }
    );
  }


  records(i) {
  	this.data.setDestAddress(this.dataGroups[i].master);
  	this.groupMaster = this.dataGroups[i].master;
  	this.relatedDevices = this.dataGroups[i].devices;
  	this.data.deviceList(this.dataGroups[i].devices);
    this.data.setGrpSource('BigIP');
    this.openRecordsPanel(i ,this.dataGroups[i].name, this.dataGroups[i].master);
  }



  addGrpToMaster(i) {
  	this.rest.addDataGroup(this.dataGroups[i], this.dataGroups[i].master, this.s1).subscribe((result) => {
      this.group_missing_on_master[i]=false;
    }, (err) => {
      console.log(err);
    });

  }


  onChange(fileList: FileList) {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = (x) => {
      self.fileContent = fileReader.result;
      let res = JSON.parse(self.fileContent);
          res.source=file.name;
      	  this.data.setGrpData(res);
      	  this.data.setGrpSource(file.name);
          this.router.navigate(['/records/'+res.name]);
    }
    fileReader.readAsText(file);
  }

  downloadAuth(url) {
 
    this.rest.getgrpFromURL('/'+url, url)
        .subscribe(res => {
          this.s1=res[0].text;
    	  this.data.setAuth(this.s1);
        }, (err) => {
          console.log('Unable to get auth information. ',err);
          this.s1='';
        }
      );        
  }


  downloadDGList(url) {
 
    this.rest.getgrpFromURL('/'+url, url)
      .subscribe(res => {
      		this.groups=res;
  	  		this.dataGroups=this.groups;
  	        //console.log('dldDG: ' , this.dataGroups);

        }, (err) => {
          console.log(err);
          this.groups=[];
        }
      );

  }

  downloadDevicesList(url) {
 
    this.rest.getgrpFromURL('/'+url, url)
      .subscribe(res => {
      		let l = this.device_list;
      		this.device_list=res;
      		for (var x in this.device_list) {
      			this.device_list[x].type='BigIP';
      			this.device_list[x].address=this.device_list[x].connections[0];
      			this.device_hostnames[this.device_list[x].name]=this.device_list[x].address ;
      			l[x]=this.device_list[x].name;
      			//console.log('dev array:', x, this.device_list[x].name ,this.device_hostnames[this.device_list[x].name]);
      		}
      		this.data.deviceList(l);

        }, (err) => {
          console.log(err);
        }
      );

  }

  masterMD5Hash(i) {

  	let dest=this.device_hostnames[this.dataGroups[i].master];
  	if (dest!=undefined) {
	  	this.rest.getProduct(this.dataGroups[i].name, dest, this.s1).subscribe((group :any) => {
			this.not_inSync_with_master[i] = [];
			this.match_with_master[i] = [];
			this.noHostnameSub[i] = [];

		  	let hash = MD5(group.records.toString()).toString();
		  	let masterHash = hash;
		  	console.log ('Master records MD5:', masterHash, this.dataGroups[i].master )

	          for (var x in this.dataGroups[i].devices) {
	                dest=this.device_hostnames[this.dataGroups[i].devices[x]];
	                if (dest != undefined) {
	                		let y=x;
	                		let dest1=dest;
			                this.rest.getProduct(this.dataGroups[i].name, dest1, this.s1).subscribe((group :any) => {
							  	hash = MD5(group.records.toString()).toString();
							  	let match='';
							  	if (hash===masterHash) {
							  		match = 'Match with Master' ;
							  		this.match_with_master[i].push(this.dataGroups[i].name);
							  	} else {
							  		match = 'Does **NOT** match Master';
							  		this.not_inSync_with_master[i].push(this.dataGroups[i].name);
							  	}
							  	console.info ('Records MD5:', hash, this.dataGroups[i].devices[y] ,dest1, match, this.noHostnameSub[i].length, this.not_inSync_with_master[i].length, this.match_with_master[i].length, this.dataGroups[i].devices.length);
			                }, (err) => {
			                  console.log('Error while retrieving Subordinate group records:', this.dataGroups[i].name, dest1, err);
			                  this.noHostnameSub[i].push(this.dataGroups[i].name);
			                });
			        } else {
			        	console.error('Hostname not found for:' , this.dataGroups[i].devices[x]);
						this.noHostnameSub[i].push(this.dataGroups[i].name);
			        }
	          }

	  	}, (err) => {
	      console.log('Error Getting Master Rrecods for MD5:',dest, '-',this.dataGroups[i].name, err.error.message);
	    }
  		);
	} else {
		console.error('Hostname not found for:' , this.dataGroups[i].master);
	} 
  }

}
