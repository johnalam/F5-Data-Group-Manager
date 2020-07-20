import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { RecordsComponent } from './records/records.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { MatFormFieldModule} from '@angular/material';
import {  MatTableModule, 
          MatProgressSpinnerModule
       } from '@angular/material' ;
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevicesComponent } from './devices/devices.component';
import { GetgrpbyURLComponent } from './getgrpby-url/getgrpby-url.component'; 
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


const appRoutes: Routes = [
  {
    path: 'dataGroups/:id1/:id2',
    component: ProductComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Group Details' }
  },
  {
    path: 'product-add/:id',
    component: ProductAddComponent,
    data: { title: 'Group Add' }
  },
  {
    path: 'records/:id',
    component: RecordsComponent,
    data: { title: 'Group Records' }
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Group Edit' }
  },
  {
    path: 'record-details/:id1/:id2/:id3/:id4',
    component: RecordDetailsComponent,
    data: { title: 'Record Add/Edit' }
  },
  {
    path: 'devices',
    component: DevicesComponent,
    data: { title: 'Device List' }
  },
  { 
    path: '',
    redirectTo: '/devices',
    pathMatch: 'full'
  },
  { 
    path: 'getgrpbyurl',
    component: GetgrpbyURLComponent,
    data: { title: 'Download Group Data by URL' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductAddComponent,
    RecordsComponent,
    RecordDetailsComponent,
    DevicesComponent,
    GetgrpbyURLComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
