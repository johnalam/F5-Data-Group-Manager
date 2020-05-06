import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private messageSource = new BehaviorSubject('No Changes');
  currentMessage = this.messageSource.asObservable();

  private saveState = new BehaviorSubject('Not Saved');
  save_results  = this.messageSource.asObservable();

  /* Current data group edited */
  private groupData = new BehaviorSubject({});
  private grpSource = new BehaviorSubject('BigIP');
  
  /* List of devices for presenting choices*/
  devList = new BehaviorSubject({});
  currentDeviceList = this.devList.asObservable();

  /* map of all device name to hostname */
  devHostnames = new BehaviorSubject({});
  allDeviceHostnames = this.devHostnames.asObservable();

  /* Results of the records save operation */
  grp_results = this.groupData.asObservable();
  grp_source = this.grpSource.asObservable();

  devAuth= new BehaviorSubject({});
  curDevAuth = this.devAuth.asObservable();

  /* address of BigIP currently getting records from */
  private destAddress = new BehaviorSubject('');
  devAddress =this.destAddress.asObservable();


  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  setSaveResults(message: string) {
  	this.saveState.next(message)
  }

  setGrpData(grp: any) {
  	this.groupData.next(grp)
  }

  /* address of BigIP currently getting records from */
  setDestAddress(dest) {
  	this.destAddress.next(dest)
  }
   setGrpSource(src: string) {
 	 this.grpSource.next(src)
   }

  /* List of devices for presenting choice, can be variabl*/
   deviceList(dev) {
   	  this.devList.next(dev)
   }

   /* hostnameList is the map of hostname to device name */
   setHostnameList(list) {
   		this.devHostnames.next(list);
   }

   setAuth(s1) {
   		this.devAuth.next(s1);
   }

}

