import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-swanshowproducts',
  templateUrl: './swanshowproducts.component.html',
  styleUrls: ['./swanshowproducts.component.css']
})
export class SwanshowproductsComponent implements OnInit {
  brandiddata;
  newprodiddata;

  constructor(public userhttp: Http, public readurlparam: ActivatedRoute) { }

  ngOnInit() {
    var newprodvar;
    this.readurlparam.params.subscribe(np => {
      if (np['newprodid']) {
        newprodvar = parseInt(np['newprodid']);
        const nobj = {_id: newprodvar};
        this.userhttp.post('newapi/getnewprodiddata', nobj).subscribe(nd => {
          this.newprodiddata = JSON.parse(nd['_body']);
        });
      }
    });
  }

}
