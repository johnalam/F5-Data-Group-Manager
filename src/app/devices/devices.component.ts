import { Component, OnInit , Input} from '@angular/core';
//import devices from '../../assets/devices.json';
//import groups from '../../datagroups.json';
import script from '../../assets/dg_script_ready_for_POST.json';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";
import  MD5 from 'crypto-js/md5';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';
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


  constructor(private route: ActivatedRoute, private router: Router, private data: DataService, public rest:RestService, private location: Location ) { }


  private subscription: Subscription;


  openDevPanel:boolean = false;
  openDGPanel:boolean = true;
  openExportPanel:boolean = false;
  openiRulesPanel:boolean = false;
  openCertificatesPanel:boolean = false;

  export_Device:string='';
  export_Address:string='';
  declar:string = '';

  certsButtonDisabled:boolean = false;

  //admin:boolean = environment.admin;
  admin:boolean = false;
  // admin1 keeps value of admin var for "Toggle Admin View" button in html.
  admin1:boolean = false;
  loggedInUser: string ='unspecified';
  i:any=0;
  spin:boolean = false;

  results:any = {};
  // device_list is for selection choices of devices.  It can be only the related devices or all the devices, depending on operation.
  device_list: any = [];
  // device_hostnames is all the devices.
  device_hostnames:any=[];
  dataGroups:any = [];
  groups:any = [];
  iRules:any = [];
  certs:any = [];
  fileContent: string = '';
  groupname: string = '';
  addGroup:boolean = false;
  group_missing_on_master:any = [];
  group_fetch_response:any = [];
  relatedDevices:any = [];

  // The following three varialbles are used for MD5 hash matchin of subs and Primary copies.
  not_inSync_with_master:any = [];
  match_with_master:any = [];
  noHostnameSub:any = [];
  noResponse:any = [];

  groupMaster:string ='';
  s1:any=[];
  tmshFormatRecs:string ='';
  masterHash:string = '';

  title = 'Device List from local JSON file';
  gptitle = 'Data Group List'
  importFromFile:boolean = false;


  ngOnInit() {
  	  this.downloadDGList("datagroups.json");
	  this.downloadDevicesList("devices.json");
	  this.data.setHostnameList(this.device_hostnames);
	  //this.downloadAuth("dgapp1.json");
   	  this.data.setAuth(this.s1);

	  
  	  this.data.grp_results.subscribe(results => {
      	this.results = results;

      })
      if (typeof this.results.name != 'undefined') {
	      this.groupname=this.results.name;
       }
       console.log('Admin2: ', environment.admin , this.openDevPanel);
       this.openDevPanel = false;
       if (this.route.snapshot.params['id']==='dev') {
       		this.openDevPanel = true;
       	}
  }

  get_dgs(device_name, addr) {
  	this.data.setDestAddress(device_name);
  	// /data-groups maps top the product component.  Until i rename the component.
   	this.router.navigate(['/dataGroups/', device_name, addr]);
  }

  get_virtuals(device_name, addr) {
  	this.data.setDestAddress(device_name);
  	// /data-groups maps top the product component.  Until i rename the component.
   	this.router.navigate(['/Applications/', device_name, addr]);
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
 	this.openDGPanel=!this.openDevPanel;
  	//this.downloadDevicesList('devices.json');
  }

  exportPanel(devname, devaddr) {
    var keyword='';
    this.openDevPanel=false;
    this.openExportPanel=true;
    this.export_Device=devname;
    this.export_Address=devaddr;
  }

  exportAppToAS3(keyword) {
      this.rest.exportToAS3(keyword, this.export_Address).subscribe((result) => {
        this.declar=result.commandResult;
      }, (err) => { 
        this.declar=err;
      });
  }

  records(i) {
	if (this.device_hostnames[this.dataGroups[i].master]==undefined) {
		this.group_fetch_response[i]='Check device to hostname mapping in devices file.';
		return
	}
    this.rest.getGrpFromDevice(this.dataGroups[i].on_box_name, this.device_hostnames[this.dataGroups[i].master], this.s1).subscribe((group: any) => {
    	// group:  datagroup records from BigIP.
    	// dataGroups[i] is datagroup metadata from datagroups.JSON file.
   	  this.data.setGrpData(group);
   	  this.data.setGrpSource('BigIP');
   	  // Not sure why i did not name tht currentGroup, instead of currentDevice
 	  this.data.setCurrentGroup(this.dataGroups[i]);
      this.group_missing_on_master[i]=true;
      this.dataGroups[i].exists = 'yes';
	  this.router.navigate(['/records/'+ this.dataGroups[i].on_box_name]);

      //console.log('***',this.group);
    }, (err) => {
	    	if (err=='TimeoutError: Timeout has occurred') {
	    	  	this.group_fetch_response[i]='No response from Primary, possible network issues.';
	    	} else if ( err=="TypeError: Cannot read property 'length' of undefined") {
				this.group_fetch_response[i]='Check device to hostname mapping in devices file.';
	    	} else {
	          	this.group_missing_on_master[i]=true;
	    	}
    	    //console.log('Open panel Get Records: ', err );
	   }
    );
  }


 /* records(i) {
  	this.data.setDestAddress(this.dataGroups[i].master);
  	this.groupMaster = this.dataGroups[i].master;
  	//this.relatedDevices = this.dataGroups[i].devices;
  	//this.data.deviceList(this.dataGroups[i].devices);
    //this.data.setGrpSource('BigIP');
    this.openRecordsPanel(i ,this.dataGroups[i].name, this.dataGroups[i].master);
  }
*/


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

  logout() {
  	window.open('/logout', '_self');
  }

  openBigIPUI(dest) {
	window.open('https://'+dest, '_blnak');
  	//window.open('https://'+this.device_hostnames[dest], '_blnak');
  }

  downloadDGList(url) {
 
    this.rest.getGrpListFromURL('/'+url, url)
      .subscribe(res => {
      		this.groups=res.body;
  	  		this.dataGroups=this.groups;
  	        console.log('dldDG: ' , res.headers.get('X-SIQ-Admin') , res.headers.get('X-Auth-User') );
  	        if ( res.headers.get('X-SIQ-Admin').toLowerCase() === 'true' ) { this.admin = true };
            this.s1.loggedInUser = res.headers.get('X-Auth-User');
            this.loggedInUser = this.s1.loggedInUser;
            this.data.setAuth(this.s1);

        }, (err) => {
          console.log(err);
          this.groups=[];
        }
      );

  }

  downloadDevicesList(url) {
  // this procedure loads the devices list from devices.JSON
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
      		// Below saves list of devices in the DataServuce,  Get the same list using: allDeviceInfoList
      		this.data.allDeviceList(l);
        }, (err) => {
          console.log(err);
        }
      );

  }

  getiRulesFromDevice(grp, dest) {
    var elmnt = 'ltm/rule';
    this.iRules = [];
    this.rest.getItemsFromDevice(elmnt, dest, this.s1).subscribe((data: any) => {

      for (var x in data.items) {
      	if (!data.items[x].name.startsWith('_sys_') && data.items[x].apiAnonymous.includes(grp)) {
      		this.iRules.push({"device": dest, "name": data.items[x].name, "partition": data.items[x].partition, "code": data.items[x].apiAnonymous, "openCode": false, 
      			"datagroup": grp});
      		var l=this.iRules.length -1;
      		//console.log('iRules: ', this.iRules[l]);
      	}
      }

      //console.log('iRules: ', this.iRules);
    }, (err) => {
          console.error('Could not get iRules on: ',dest, err);
    });
  }

  /*syncToPrimary(i) {
  	let dest=this.device_hostnames[this.dataGroups[i].master];
  	if (dest!=undefined) {
 	  	this.subscription = this.rest.getGrpFromDevice(this.dataGroups[i].on_box_name, dest, this.s1).pipe(switchMap((group :any) => {
 	  		this.tmshFormatRecs = "\{";
 	  		var x:any = {};
 	  		//console.log(group.records);
  			for ( x in group.records) {
  				let y=group.records[x];
  				this.tmshFormatRecs = this.tmshFormatRecs + " "+y.name + " \{ data '"+ y.data +"'\}";

  			}
  			this.masterHash = MD5(group.records.toString()).toString();
  			return this.tmshFormatRecs = this.tmshFormatRecs+" \}";

  		})).subscribe(
  		() =>{
    		//console.log('tmshFmt: ', this.tmshFormatRecs, this.masterHash );
    		this.primaryMD5Hash(i,true);
    		this.subscription.unsubscribe();
  		}

  		);

  	}

  }*/
  getCertsFromDevice(dest) {
    var elmnt = 'sys/file/ssl-cert';
    this.certs = [];
    this.rest.getItemsFromDevice(elmnt, this.device_hostnames[dest], this.s1).subscribe((data: any) => {
		data.items.device = dest;
    	console.log('certs:', data.items[1]);
    	for  ( var x in data.items) {
	    	let subj = data.items[x].subject.replace(/\,/g,'\n');
	      	this.certs.push({"device": dest, "name" : data.items[x].name, "partition": data.items[x].partition, "issuer": data.items[x].issuer.replace(/\,/g,"\n"), 
	      		"subject" : subj , "expiration": data.items[x].expirationString});
      	}
    });
  }

  findiRulesForGroup(i, grp) {
  	this.spin=true;
  	let dest=this.device_hostnames[this.dataGroups[i].master];
	this.noHostnameSub[i] = [];
	this.noResponse[i] = [];
  	if (dest!=undefined) {
	  	this.getiRulesFromDevice(this.dataGroups[i].on_box_name, dest);
	    for (var x in this.dataGroups[i].devices) {
	      	dest=this.device_hostnames[this.dataGroups[i].devices[x]];
	        if (dest != undefined) {
	        	this.getiRulesFromDevice(this.dataGroups[i].on_box_name, dest);
	        }
	    }
	}
    this.spin=false;
    this.openDevPanel = false;
  	this.openDGPanel = false;
  	this.openExportPanel = false;
  	this.openiRulesPanel = true;
  }

  saveiRuleToBigIP(irule, ndx) {
    var code=irule.code.replace(/\"/g ,'\\"').replace(/(\r\n|\n|\r)/mg,'\\n');

    //let dest=this.device_hostnames[irule.device];
    let dest=irule.device;
    let payload= '{"apiAnonymous":"'+code+'" }';
    console.log( dest, payload);

    this.rest.patch('ltm/rule/'+irule.name, payload, dest, '').subscribe((result) => {
                 console.log ('Irule saved to:', dest);
                 this.iRules[ndx].saveResult="Saved";
                 this.iRules[ndx].modified=false;
          }
          ,(err) => {
                  //console.log ('iRule save error:', dest, payload);
                  console.log (err.error.message);
                  console.log (err);
                  this.iRules[ndx].saveResult='Error: '+err.error.message;
          });
  }


  getAllCertificates() {
  	this.openCertificatesPanel = true;
    this.openDevPanel = false;
    this.openDGPanel = false;
    this.certsButtonDisabled = true;

    for (var name in this.device_hostnames) {
    	console.log('cert device name:', this.device_hostnames[name]);
    	this.getCertsFromDevice(name);
    }

	this.certsButtonDisabled = false;


  }


  primaryMD5Hash(i, sync) {
  	this.spin=true;
  	let dest=this.device_hostnames[this.dataGroups[i].master];
	this.noHostnameSub[i] = [];
	this.noResponse[i] = [];
  	if (dest!=undefined) {
	  	this.rest.getGrpFromDevice(this.dataGroups[i].on_box_name, dest, this.s1).subscribe((group :any) => {
			this.not_inSync_with_master[i] = [];
			this.match_with_master[i] = [];

			var masterRecords=group.records;

		  	let hash = MD5(group.records.toString()).toString();
		  	let masterHash = hash;
		  	console.log ('Primary records MD5:', masterHash, this.dataGroups[i].master )

	          for (var x in this.dataGroups[i].devices) {
	                dest=this.device_hostnames[this.dataGroups[i].devices[x]];
	                if (dest != undefined) {
	                		let y=x;
	                		let dest1=dest;
	                		this.spin=true;
			                this.rest.getGrpFromDevice(this.dataGroups[i].on_box_name, dest1, this.s1).subscribe((group :any) => {
							  	hash = MD5(group.records.toString()).toString();
							  	let match='';
							  	if (hash===masterHash) {
							  		match = 'Match with Primary' ;
							  		this.match_with_master[i].push(this.dataGroups[i].on_box_name);
							  	} else {
							  		match = 'Does **NOT** match Primary';
							  		if (sync) {
							  			// Sending formatted records to the device out of sycn
							  			this.rest.patchDG(this.dataGroups[i].on_box_name, masterRecords, dest1, "").subscribe((result) => {
						                      console.log ('Device synched:', dest1);
						                      this.match_with_master[i].push(this.dataGroups[i].on_box_name);
							  			}
							  			,(err) => {
							  				this.not_inSync_with_master[i].push(this.dataGroups[i].on_box_name);
							  			});
							  		} else {
							  			this.not_inSync_with_master[i].push(this.dataGroups[i].on_box_name);
							  		}
							  	}
							  	console.info ('Records MD5:', hash, this.dataGroups[i].devices[y] ,dest1, match, this.noHostnameSub[i].length, this.not_inSync_with_master[i].length, this.match_with_master[i].length, this.dataGroups[i].devices.length);
	        					if (this.noHostnameSub[i].length + this.not_inSync_with_master[i].length + this.match_with_master[i].length == this.dataGroups[i].devices.length) {
	          						this.spin=false;
	        					}							  	
			                }, (err) => {
								this.noHostnameSub[i].push(this.dataGroups[i].on_box_name);
			                  	this.spin=false;
			                  	console.log('Error while retrieving Subordinate group records:', this.dataGroups[i].on_box_name, dest1, err);
			                  	console.info ('Spinner status:', this.noHostnameSub[i].length, this.not_inSync_with_master[i].length, this.match_with_master[i].length, this.dataGroups[i].devices.length);
			                });
			        } else {
			        	console.error('Hostname not found for:' , this.dataGroups[i].devices[x]);
						this.noHostnameSub[i].push(this.dataGroups[i].on_box_name);
			        }
	            }
			  console.info ('Spinner status:', this.noHostnameSub[i].length, this.not_inSync_with_master[i].length, this.match_with_master[i].length, this.dataGroups[i].devices.length);

	          if (this.noHostnameSub[i].length + this.not_inSync_with_master[i].length + this.match_with_master[i].length == this.dataGroups[i].devices.length) {
	          	this.spin=false;
	          }

	  	}, (err) => {
	  		console.log(err);
	      	console.log('Error Getting Primary Rrecods for MD5:',dest, '-',this.dataGroups[i].on_box_name);
	      	this.noResponse[i].push(dest)
	      	this.spin=false;
	    }
  		);
	} else {
		console.error('Hostname not found for:' , this.dataGroups[i].master);
		this.spin=false;
	} 
  }

}
