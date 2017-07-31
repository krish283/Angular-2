import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StarComponent} from './shared/star.component';
import{HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import{ProductDetailComponent} from './products/product-detail.component';
import {ProductListComponent} from './products/product-list.component';
import{ ProductDetailGuard} from './products/product-guard.service';
import {FormsModule} from '@angular/forms';
import {ProductFilterPipe} from './products/product-filter.pipe';
import{RouterModule} from '@angular/router';
@NgModule({
  imports: [ BrowserModule ,
  FormsModule,HttpModule,
RouterModule.forRoot([
  {path: 'products',component: ProductListComponent},
  {path: 'number/:id',
  canActivate: [ProductDetailGuard],
    component: ProductDetailComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '',redirectTo: 'welcome',pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome',pathMatch: 'full'}

])
],
  declarations: [ AppComponent,
  ProductListComponent,
  WelcomeComponent,
  ProductDetailComponent,
  StarComponent,
ProductFilterPipe ],
  providers: [ProductDetailGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
