import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
s1:any='';
  @Input() groupData = { name:'', type: '', desc: '', partition: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.curDevAuth.subscribe(s1 => this.s1 = s1);
  }

  addGroup() {
    this.rest.addDataGroup(this.groupData, this.route.snapshot.params['id'],this.s1).subscribe((result) => {
      this.router.navigate(['/products']);
    }, (err) => {
      console.log(err);
    });
  }

}
