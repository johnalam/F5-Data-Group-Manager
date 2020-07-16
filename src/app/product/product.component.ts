import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any = [];
  groups:any = [];
  device_hostnames:any =[];
  name:any = "";
  address:any = "";
  device_name:any ="";
  s1:any= "";

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['id1'];
    this.address = this.route.snapshot.params['id2'];
    this.data.devAddress.subscribe(device_name=> this.device_name = device_name);
    this.data.curDevAuth.subscribe(s1 => this.s1 = s1);
    this.data.allDeviceHostnames.subscribe(device_hostnames => this.device_hostnames = device_hostnames);
    this.getGroupsFromDevice();
  }

  getGroupsFromDevice() {
    this.groups = [];
    const elmnt = 'ltm/data-group/internal';
    //this.products = [];
    this.rest.getGroupsFromDevice(elmnt, this.device_hostnames[this.device_name], this.s1).subscribe((data: any) => {
      //console.log(data.items);

      // todo:  data.service should be imported and grpSrc should be set to 'BigIP' here.

      this.products = data;
      this.groups = data.items;
    });
  }

  getGrpfromGithug() {
    this.router.navigate(['/getgrpfromGithub']);
  }

  add() {
    this.router.navigate(['/product-add/'+this.device_name]);
  }

   records(groupname) {
    this.data.setGrpSource('BigIP');
    
    let grp={
      "name": groupname,
      "on_box_name": groupname,
      "master": this.device_name,
      "devices": [],
    };
    this.data.setGrpData({});

    this.data.setCurrentGroup(grp);

    this.router.navigate(['/records/' + groupname]);
  }

  delete(name) {
    this.rest.deleteDataGroup(name, this.device_hostnames[this.device_name], this.s1)
      .subscribe(res => {
          this.getGroupsFromDevice();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
