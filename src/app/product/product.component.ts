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
  name:any = "";
  address:any = "";
  s1:any= "";

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['id1'];
    this.address = this.route.snapshot.params['id2'];
    this.data.setDestAddress(this.address);
    this.data.curDevAuth.subscribe(s1 => this.s1 = s1);
    this.getProducts();
  }

  getProducts() {
    this.groups = [];
    const elmnt = 'ltm/data-group/internal';
    //this.products = [];
    this.rest.getProducts(elmnt, this.address, this.s1).subscribe((data: any) => {
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
    this.router.navigate(['/product-add/'+this.address]);
  }

   records(groupname) {
    this.data.setGrpSource('BigIP');
    this.data.setGrpData({});
    this.router.navigate(['/records/' + groupname]);
  }

  delete(name) {
    this.rest.deleteDataGroup(name, this.address, this.s1)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
