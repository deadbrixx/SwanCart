import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-swanregularproduct',
  templateUrl: './swanregularproduct.component.html',
  styleUrls: ['./swanregularproduct.component.css']
})
export class SwanregularproductComponent implements OnInit {
    alldiddata;

  constructor(public userhttp: Http, public aroute: ActivatedRoute) { }

  ngOnInit() {
      var allvar;
    this.aroute.params.subscribe(rup => {
      if (rup['brandid']) {
        allvar = parseInt(rup['brandid']);
        const bobj = {brid: allvar};
        this.userhttp.post('regularapi/getselectediddata', bobj).subscribe(bd => {
          alert(bd['_body']);
          this.alldiddata = JSON.parse(bd['_body']);
        });
      }
    });

  }

}
