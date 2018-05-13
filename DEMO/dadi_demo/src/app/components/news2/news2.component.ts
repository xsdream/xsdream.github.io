import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-news2',
  templateUrl: './news2.component.html',
  styleUrls: ['./news2.component.css']
})
export class News2Component implements OnInit {

  public lists;

  constructor(private http:Http,private Jsonp:Jsonp) {
 
   }

  ngOnInit() {

  }

  requestJson(e){
    alert(e);
    var _this=this;
    var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    this.http.get(url).map(res=>res.json()).subscribe(function(data){
      _this.lists=data.result;
      console.log(this.lists)
    },function(err){
      console.log('请求失败'+err);
    })
  }

}
