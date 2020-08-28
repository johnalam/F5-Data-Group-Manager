import { Component, ViewEncapsulation, OnInit , Input, Inject } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of , throwError} from 'rxjs';
import { map, catchError, tap, timeout } from 'rxjs/operators';

import { DataService } from "../data.service";
import { environment } from '../../environments/environment';

export interface GroupData {
  id: string;
  name: string;
  data: string;


}
export interface DialogData {
  name: string;
  data: string;
  op: string
}

export interface DGPushStatus {
    dest: string;
    label: string;
    status: string;
    group: string;
    operation: string;
}

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./records.component.css']
})


export class RecordsComponent implements OnInit {

  @Input() recordData:any = { index: 0, name: '', data: '' };
  @ViewChild('Table') Table: MatTable<any>;

  admin:boolean=environment.admin;
  group:any=[];
  save_results:string="Not Saved";  

  displayedColumns: string[] = [ 'name', 'data', 'actions'];
  dataSource: MatTableDataSource<GroupData>;

  statusDisplayedColumns = [ 'dest', 'status'];
  dgPushStatus :DGPushStatus[] = [] ;
  pushStatusDataSource: DGPushStatus[] ;
  pIndex:any = 0;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor(public dialog: MatDialog , private http: HttpClient , public rest:RestService, private route: ActivatedRoute, private router: Router, private data: DataService) { }

  results:any = {};
  deviceList:any = {};
  grpSrc:string = "";
  deviceSlct:boolean = false;
  destAddress:string = '';
  relatedDevices:any = [];
  masterAddress:string = '';
  selectionMade:boolean = false;
  deviceSelect:any = [];
  selected:any = [];
  deviceMap:any = {};
  recOperation:string = "";
  recordKey:string = "";
  recordValue:string = "";
  // device_hostnames is all the devices.
  device_hostnames:any=[];
  currentDevice:any={};
  s1:any='';
  public openRecDialog:boolean=false;
  referrer_page:string = "";
  


  ngOnInit() {

    //load the list of devices to manage, this can be per data-group or all bigips.
    // If per group, then it is set by "devices" component from data-group record on file.
    // If all bigips then it is from devices file on record.
    this.data.currentDevice.subscribe(currentDevice => this.currentDevice = currentDevice);
    this.relatedDevices = this.currentDevice.devices;
    this.deviceList = this.currentDevice.devices;
    this.data.allDeviceHostnames.subscribe(device_hostnames => this.device_hostnames = device_hostnames);

    //this.downloadAuth("dgapp1.json");    
    this.data.curDevAuth.subscribe(s1 => this.s1 = s1);

    //load the group records to display on page
    this.data.grp_results.subscribe(results => {this.results = results;})

    // load the source of the group data URL/BigIP/File etc..
    this.data.grp_source.subscribe(grpSrc => this.grpSrc = grpSrc );


    // load IP address of BigIP currently getting records from, 
    // if we start with the data-group panel, this is the "Primary"
    // if we start with the devices panel, this is the chosen device before choosing a data-group.
    this.masterAddress = this.currentDevice.master;

    //this.data.devAddress.subscribe(destAddress => this.destAddress = destAddress );

    if (Object.getOwnPropertyNames(this.results).length === 0 ) {
          //|| this.grpSrc == 'BigIP'
      var recs = { "records": [] } ;
    	this.getRecords();
      this.grpSrc = 'BigIP';
      this.data.setGrpSource(this.grpSrc);
      this.referrer_page = 'dev';

    } else {
      this.data.setGrpSource(this.grpSrc);

      this.group = this.results;
      //this.group.devices=this.relatedDevices;
      this.data.setGrpData(this.results);
      this.dataSource = new MatTableDataSource(this.results.records);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.referrer_page = 'dg';
    }

    this.data.currentMessage.subscribe(save_results => this.save_results = save_results)

  }

  downloadAuth(url) {
 
    this.rest.getgrpFromURL('/'+url, url)
        .subscribe(res => {
          this.s1=res[0].text;
        }, (err) => {
          console.log('Unable to get auth information. ',err);
          this.s1='';
        }
      );        
  }


  getRecords() {
    console.log(this.route.snapshot.params['id'], this.masterAddress, '-',this.s1);
    this.rest.getGrpFromDevice(this.route.snapshot.params['id'], this.device_hostnames[this.masterAddress], this.s1).subscribe((data: any) => {
      //recs=data;
      console.log('Get Records: ' );
      this.group = data;
      //this.group.source = 'BigIP';
      //this.group.devices= this.relatedDevices;
  	  this.dataSource = new MatTableDataSource(data.records);
   	  this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //this.dataSource.paginator.firstPage();

      //console.log('***',this.group);
    }, (err) => {
      if (err.error!==undefined) {
          this.save_results=err.error.message;
          console.log('Get Records: ', err.error.message);
      } else {
          this.save_results=err;
          console.log('Get Records: ', err);
      }
      }
    );
  }


  recOps(index ,groupname, key, value, op) {
    // Called from table record selection.
      this.recordData.name=key;
      this.recordData.data=value;
      this.recordData.index=index;
    // enables record edit panel
      this.recOperation = op;
  }


  inMemRecOps(index ,groupname, key, value, op) {
     console.log('>>> ', index, groupname, key, value, op, this.relatedDevices);

     if (this.grpSrc == 'BigIP' ) {
           
           //console.log('Primary hostname: ' , master, this.device_hostnames[this.masterAddress]);
           if (this.device_hostnames[this.masterAddress]==undefined) {
                this.dgPushStatus.push({ dest: this.masterAddress, label: this.masterAddress, group: "", status: "Could not find destination hostname", operation: op});
                this.data.changeMessage('No hostname for '+ this.masterAddress);
           } else {

               let dest=this.device_hostnames[this.masterAddress];
//               if (op != 'save') {
                  this.recordOps(op, groupname, this.recordData, dest).subscribe((result) => {
                      console.log ('Master Device updated:', this.masterAddress, dest , 'Other devices: ', this.relatedDevices);
                      if (op=='save') {
                          this.data.changeMessage("Saved to Permanent Config") ;
                      } else {
                          this.data.changeMessage("Updated Running config only");
                          //this.getRecords();
                          this.updateTable(key, value, index, op);
                      }

                      for (var x in this.relatedDevices) {
                            let dest=this.device_hostnames[this.relatedDevices[x]];
                            if (dest==undefined) {
                                this.dgPushStatus.push({ dest: this.relatedDevices[x], label: this.relatedDevices[x] , group: groupname, status: 'Device hostname not found. '+op+' operation aborted.', operation: op});
                                this.pushStatusDataSource = [...this.dgPushStatus];
                            } else {
                                this.recordOps(op, groupname, this.recordData, dest).subscribe((result) => {
                                  console.log ('Subordinate Device updated:', dest);
                                }, (err) => {
                                  console.error('Subordinate Device error: ', dest, err);
                                  this.dgPushStatus.push({ dest: dest, label: this.relatedDevices[x] , group: groupname, status: err, operation: op});
                                  this.data.changeMessage(err);
                                });
                            }
                      }

                      if (op=="REPEAT") {
                          this.recOperation='ADD';
                          this.recOps(0,this.group.name,'','','ADD');
                          this.openDialog();

                      } else {
                          this.recOperation="";
                      }

                      if (op=='ADD') {
                        this.pIndex= Math.ceil(this.paginator.length / this.paginator.pageSize) - 1  ;
                        //this.getRecords();
                        console.log(" Page: ", op, this.paginator.pageSize,this.paginator.length, this.pIndex, this.paginator, this.sort);
                      }
                  }, (err) => {
                      this.dgPushStatus.push({ dest: dest, label: this.masterAddress , group: groupname, status: op+' Failed on Primary, Aborting.', operation: op});
                      this.pushStatusDataSource = [...this.dgPushStatus];
                      this.data.changeMessage( (op === 'save') ? 'Not Saved': op+' Failed.');
                  });
/*              } else {
                  this.recordOps('save',groupname, this.recordData, dest).subscribe((result) => {
                      this.data.changeMessage("Saved to Permanent Config");
                      console.log ('Primay Device update:', this.masterAddress, dest);
                  }, (err) => {
                      console.log(err);
                      this.dgPushStatus.push({ dest: dest, label: this.masterAddress, group: "", status: err, operation: op});
                      this.data.changeMessage(err);
                  });
              }*/


          }

      } else {
          this.updateTable(key, value, index, op);

      }
      this.dataSource = new MatTableDataSource(this.group.records);
      this.dataSource.paginator = this.paginator;

      //console.log(RecordsComponent);
    /*if (this.dataSource._filterChange.getValue() === '') {
        this.dataSource.filter = ' ';
        this.dataSource.filter = '';
    } else { */
        // if there's something, we make a simple change and then put back old value
        //this.dataSource.filter = '';
        //this.dataSource.filter = this.filter.nativeElement.value;
    //} 
  }


updateTable(key, value, index, op) {

          if (op=='ADD' || op=='REPEAT') {
              this.group.records.push({"name":key, "data":value})
              console.log('Adding record:', key, value, this.group.records.indexOf(key));
              //this.dataSource.paginator.nextPage();

          } else if (op=='UPDATE') {
              this.group.records[index].data=value;
              console.log('Updated record:', this.group.records[index], key, value);
          } else if (op== 'DELETE') {
              console.log('Deleted Record:', this.group.records[index], key, value);
              this.group.records.splice(index, 1);
          }
          this.dataSource = new MatTableDataSource(this.group.records);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          //this.dataSource.paginator._changePageSize(this.paginator.pageSize); 
          //this.dataSource.renderRows();

          console.log('datasource1 :', this.group.records);
          console.log('Adding record after sort:', key, value, this.group.records.indexOf(key));

}




  /* 
  recordUpdate(index ,groupname, key, value, op, dest ) {

    this.recordOps(op, groupname, this.recordData, this.masterAddress).subscribe((result) => {
      //this.op_result = this.operation + ' OK';
      this.data.changeMessage("Updated running config only.");
      this.getRecords();

      if (op=="REPEAT") {
        this.recordData.name =  "";
        this.recOperation='ADD';
        //this.router.navigate(['/record-details/', 'ADD', this.group , '', '']);
      } else {
        //this.router.navigate(['/records/'+this.group]);
        this.recOperation="";
      }

    }, (err) => {
      console.log(err);
      this.data.changeMessage(err);
    });

  }
  */


  recordOps (operation, groupname, record , dest ): Observable<any> {
    let oper='';
    if (operation=='add' || operation=='REPEAT') {
        oper='add';
    } else if ( operation=='UPDATE') {
        oper='edit';
    } else { 
        oper=operation.toLowerCase();
    }
    let waitTime=15000;
    let rec:any={};
    if (operation=='save' || operation=='SAVE') {
        rec = { "command":"run" , "name":"/Common/add-rec", "utilCmdArgs": "save" };
        waitTime=40000;
    } else {
        record.data=record.data.replace(/'/g,"`");
        //console.log('data:', record.data);
        let record_data = (oper == 'delete' || record.data=='') ? "\}\"" :  "{ data \'"+ record.data +"\'\}\}\""

        rec = { "command":"run" , "name":"/Common/add-rec", "utilCmdArgs": oper +"-record " + groupname + " \"\{ "+ record.name + record_data };
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
    //    'Authorization': 'Basic '+this.s1,
        'target': dest
      })
    };
    
    let endpoint="/mgmt/tm/cli/script";

    return this.http.post(endpoint , JSON.stringify(rec) , httpOptions).pipe(
      timeout(waitTime),
      tap(_ => {
        //console.log(operation+" record id=${record.name}");

      }),
    catchError(
        this.handleError<any>('Failed: ' + rec.utilCmdArgs, groupname, dest)
      )
    );
  }



  add(groupname) {
      //this.router.navigate(['/record-details/', 'add', groupname , '', '']);
      //this.Operation='add'
  }


  delete(group, name) {
    this.rest.deleteRecord(group, name, ' ', this.s1)
      .subscribe(res => {
          this.getRecords();
          this.save_results="Saved to running config only.";
        }, (err) => {
          console.log(err);
        }
      );
  }

  gotoDGList() {
    if (this.grpSrc == 'BigIP' && this.save_results != 'Saved to Permanent Config') {
      this.inMemRecOps(0 ,'','','','save');
    }
    this.router.navigate(['/devices/'+this.referrer_page]);
  }

 /* 
    pushToOtherBigIPs , prepares the selection list.
      - when editing an existing dat-grou, the selection list is only the subordinates.
      - when importing a new data-group, the selection list is all Big-IPs.
    getSelectedDevices, toggles GO button
    startPush, intiates the transfer.

  */
 
  pushToOtherBigIPs() {
    
      var dev:any = {};
      this.deviceSelect = [];
      this.deviceMap = {};
      


      //if (this.grpSrc == 'BigIP' && this.save_results != 'Saved to Permanent Config') {

        //this.deviceSelect = this.deviceList;
        //console.log('lists:', this.deviceList, Object.keys(this.deviceList));
      //} else {
        this.deviceList=this.device_hostnames;

          for (var x in Object.keys(this.deviceList)) {
            dev=Object.keys(this.deviceList)[x];
            //console.log('==', dev, x , Object.keys(this.deviceList)[x]);
            //if (dev.type=='bigip') {
               this.deviceSelect.push( dev );
               //this.deviceMap[dev.address] = dev.name;
            //}
          }
      //}
      this.deviceSlct=true;
  }

  getSelectedDevices(event: any) {
    this.selected = event.value;

    console.log('Selected value -> ', this.selected);

    if (event.value.length == 0 ) {
      this.selectionMade=false; 
     } else {
      this.selectionMade=true;
     }
  }

  startPush() {

    this.dgPushStatus = [];
    this.pushStatusDataSource = [...this.dgPushStatus];
    for (var dev in  this.selected) {
        //this.rest.addGroup(this.group);
        let dest=this.device_hostnames[this.selected[dev]];
        //console.log('Start Push', this.selected[dev], dest);
        if (dest!=undefined) {
            this.addGroup(this.group, dest).subscribe((result) => {
                  this.dgPushStatus.push({ dest: dest, label: this.selected[dev], group: '', status: this.group.name+'-Pushed Successfully', operation: 'add group'});
                  console.log('Data-Group added Successfully', this.dgPushStatus);
                }, (err) => {
                  this.dgPushStatus.push({ dest: this.selected[dev], label: this.selected[dev], group: '', status: err, operation: 'add group'});
                  console.log('->', err);
                });
                this.pushStatusDataSource = [...this.dgPushStatus];
        } else {
            this.dgPushStatus.push({ dest: this.selected[dev], label: this.selected[dev], group: '', status: 'Hostname not found', operation: 'add group'});
            this.pushStatusDataSource = [...this.dgPushStatus];
        }
      }

  }
  


  addGroup (group, dest): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'Basic '+this.s1,
        'target': dest
      })
    };
    let grp:any={};
    grp.name=group.name;
    grp.type=group.type;
    grp.partition=group.partition;
    //grp.description=group.description;
    grp.records=group.records;

    let datagroup = JSON.stringify(grp);
    //console.log('** Grp:', dest, datagroup);
    //datagroup = {"name": group.name, "partition": "Common", "type": group.type };

    return this.http.post<any>( '/mgmt/tm/ltm/data-group/internal/', datagroup, httpOptions).pipe(
      tap((group) => {
      
          this.dgPushStatus.push({ dest: dest, label: this.deviceMap[dest], group: group.name, status: group.name+' Push Successfull', operation: 'Push to Big-IPs'});
          this.pushStatusDataSource = [...this.dgPushStatus];

        console.log("Added OK:  group: ", group.name , 'to:', dest);
          //'Array length:', this.pushStatusDataSource.length, this.pushStatusDataSource[this.pushStatusDataSource.length - 1 ]) ;
      }),
      catchError(this.handleError<any>('Failed Push to Big-IPs', group.name, dest))
    );
  }


  handleError<T> (operation = 'operation', group, dest, result?: T) {
    return (error: any): Observable<T> => {


      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      
      // TODO: better job of transforming error for user consumption
      //console.log(dest, `${operation} failed: ${error.message}`);

      //console.log('Error Timeout ->', JSON.stringify(error).substr(9,12) );
      //console.log('Error Timeout1->', JSON.stringify(error).indexOf('TimeoutError') );

      if (JSON.stringify(error).indexOf('Timeout') !== -1) {
        this.dgPushStatus.push({ dest: dest, label: this.deviceMap[dest], group: group, status: 'No response from device, possible network issues.', operation: operation});
        this.pushStatusDataSource = [...this.dgPushStatus];
        return throwError(error);
      }

      if ( error.error.message !== undefined ) {
        console.error(error.error.message); 
        this.dgPushStatus.push({ dest: dest, label: this.deviceMap[dest], group: group, status: error.error.message, operation: operation});
      } else {
        this.dgPushStatus.push({ dest: dest, label: this.deviceMap[dest], group: group, status: operation, operation: operation});
      }

      this.pushStatusDataSource = [...this.dgPushStatus];

      // Let the app keep running by returning an empty result.
      //return of(result as T);
      return throwError(error.error.message);
    };
  }

  /*  */

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDialog(): void {

    //console.log('Dialog open status', this.openRecDialog);
    if (this.openRecDialog) {
      return;
    }
    const dialogRef = this.dialog.open(recordDataDialog, {
        width: '450px',
        data: {name: this.recordData.name, data: this.recordData.data, op: this.recOperation}
    });

    this.openRecDialog=true;

    dialogRef.afterClosed().subscribe(result => {

        //console.log('result data:', result.event,result.data, this.recOperation, this.group.name, this.recordData.index);

        this.recordData.name = result.data.name;
        this.recordData.data = result.data.data;
        this.openRecDialog=false;

        if ( result.event!='cancel' ) {
          this.inMemRecOps(this.recordData.index, this.group.name , this.recordData.name, this.recordData.data, result.data.op)
        }

    });

  }

}


@Component({
  selector: 'recordAddEditDataDialog',
  templateUrl: 'record-add-edit.dialog.html',
})
export class recordDataDialog {

  op:string = '';
  

  constructor(
    public dialogRef: MatDialogRef<recordDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      //console.log('dialog data:' , data);
      //this.local_data = {...data};
      //this.action = this.local_data.action;
    }

  onNoClick(): void {
    this.dialogRef.close({event: 'cancel', data: this.data});
  }

  sendOperation(op) {
    this.dialogRef.close({event: op, data: this.data})
  }

}



