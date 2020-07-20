import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Big-IP Data-Group management';
  public constructor(private titleService: Title ) { }

  ngOnInit() {
  	console.log('Admin:', environment.admin);
  	this.setTitle("F5 DG Manager");
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
