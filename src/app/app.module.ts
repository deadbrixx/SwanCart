import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SwanfooterComponent } from './swanfooter/swanfooter.component';
import { SwannavbarComponent } from './swannavbar/swannavbar.component';
import { SwannewproductComponent } from './swannewproduct/swannewproduct.component';
import { SwanregularproductComponent } from './swanregularproduct/swanregularproduct.component';
import { SwanupcomingproductComponent } from './swanupcomingproduct/swanupcomingproduct.component';
import { SwanshowproductsComponent } from './swanshowproducts/swanshowproducts.component';
import { BlankrouteComponent } from './blankroute/blankroute.component';

const userroute = [{path: '', component: BlankrouteComponent},
                    {},
                     {},
                      {}];


@NgModule({
  declarations: [
    AppComponent,
    SwanfooterComponent,
    SwannavbarComponent,
    SwannewproductComponent,
    SwanregularproductComponent,
    SwanupcomingproductComponent,
    SwanshowproductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
