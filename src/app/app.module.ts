import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/Router';

import { AppComponent } from './app.component';
import { ThreeJSComponent } from './three-js/three-js.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//** is wild card
// '' path redirects to any page you want
// 'customPageName' you can assign to a component
// data allows you to pass data to that component once routed
//order matters
const appRoutes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component, data:{title:'Cool Title'}},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ThreeJSComponent,
    NavBarComponent,
    Page1Component,
    Page2Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
