import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allmenudata;
  submenudata;
  subsubmenudata;
  brandmenudata;
  // -------------------------------
  var_log_email;
  var_log_password;
  logdata;
  // -------------------------------
  var_reg_firstname;
  var_reg_lastname;
  var_reg_email;
  var_reg_mobile;
  var_reg_password;
  var_reg_confpassword;
  var_reg_billaddress;
  var_reg_ship_address;


  constructor (public userhttp: Http) {
    this.getallmenus();
  }

    // ---------------------------------------------------------------------
    getallmenus() {
      this.userhttp.get('userapi/getallmenu').subscribe(ga => {
        this.allmenudata = JSON.parse(ga._body);
      });
          this.userhttp.get('userapi/getallsubmenu').subscribe(su => {
            this.submenudata = JSON.parse(su._body);
          });
              this.userhttp.get('userapi/getallsubsubmenu').subscribe(ssu => {
                this.subsubmenudata = JSON.parse(ssu._body);
              });
                  this.userhttp.get('userapi/getallbrandmenu').subscribe(bu => {
                    this.brandmenudata = JSON.parse(bu._body);
                  });
    }

    userlogin() {
      const logobj = {uemail: this.var_log_email, upwd: this.var_log_password};
        this.userhttp.post('logapi/userlogin', logobj).subscribe(lo => {
          this.logdata = JSON.parse(lo._body);
      });
    }

     // ----------------------------------------------------------------------------------------------
  // FOr Registration
    registration() {
      const regobj = {
                    userdata: {
                    fname: this.var_reg_firstname,
                    lname: this.var_reg_lastname,
                    email: this.var_reg_email,
                    mobile: this.var_reg_mobile,
                    password: this.var_reg_password,
                    cpasword: this.var_reg_confpassword,
                    address: [{
                          billingaddress: [{fname: this.var_reg_firstname},
                                          {lname: this.var_reg_lastname},
                                          {email: this.var_reg_email},
                                          {mobile: this.var_reg_mobile},
                                          {billaddress: this.var_reg_billaddress}],
                          shippingaddress: [{fname: this.var_reg_firstname},
                                           {lname: this.var_reg_lastname},
                                            {mobile: this.var_reg_mobile},
                                            {shipaddress: this.var_reg_ship_address}]
                        }]
                  },


            };
    this.userhttp.post('regapi/userregister', regobj).subscribe(this.lcb);
     }
     lcb = (l) => {
       alert('Register succes');
  }


  ngOnInit() {

  }
}
