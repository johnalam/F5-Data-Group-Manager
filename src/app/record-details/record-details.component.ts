import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from "../data.service";

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})


export class RecordDetailsComponent implements OnInit {
  operation:any='';
  group:any='';
  save_results:string='';
  op_result:string='';
  s1:any='';

  @Input() recordData:any = { name: '', data: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router, private data: DataService ) { }

  ngOnInit() {
    this.operation = this.route.snapshot.params['id1'];
    this.group = this.route.snapshot.params['id2'];
  	this.recordData.name = this.route.snapshot.params['id3'];
  	this.recordData.data = this.route.snapshot.params['id4'];

    this.data.currentMessage.subscribe(save_results => this.save_results = save_results)
  }

  delete(group, name) {

    this.rest.deleteRecord(group, name, ' ' ,this.s1)
      .subscribe(res => {
          this.data.changeMessage("Updated running config only.");
          this.router.navigate(['/records/'+this.group]);
        }, (err) => {
          console.log(err);
          this.data.changeMessage(err);
        }
      );
  }

  cancel() {
    this.router.navigate(['/records/'+this.group]);
  }

  update(op) {
    this.rest.recordOps(this.operation, this.group, this.recordData).subscribe((result) => {
      this.op_result = this.operation + ' OK';
      this.data.changeMessage("Updated running config only.");
      if (op=="repeat") {
        this.recordData.name =  "";
        this.router.navigate(['/record-details/', 'ADD', this.group , '', '']);
      } else {
        this.router.navigate(['/records/'+this.group]);
      }
    }, (err) => {
      console.log(err);
      this.data.changeMessage(err);
    });
  }

}
