import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swannewproduct',
  templateUrl: './swannewproduct.component.html',
  styleUrls: ['./swannewproduct.component.css']
})
export class SwannewproductComponent implements OnInit {
  allnewdata;

  constructor(public userhttp: Http, public rout: Router) {
    this.allnewprod();
   }

   allnewprod() {
    this.userhttp.get('newapi/newprod').subscribe(np => {
      this.allnewdata = JSON.parse(np._body);
      alert(this.allnewdata);
    });
   }

   getnewprodimages() {
    this.rout.navigateByUrl('/');
   }

  ngOnInit() {
  }

}
