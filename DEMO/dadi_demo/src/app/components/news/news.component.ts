import { Component, OnInit } from '@angular/core';
import {Http,Jsonp, Headers } from '@angular/http';
import * as $ from 
'jquery';
import {Observable} from 'rxjs'
import 'rxjs/Rx'

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public msg:string='是爸爸给你的哟！'

  public newsContent:string='我是新闻的主题哟！'

  value:number=999

  html:string='<h1>我是一个html h3标签数据</h1>'

  public obj={
    name:'张三'
  }

  item=[
    {
      name:'许胜',
      age:23,
      center:[
        {
          heightw:'170cm'
        },{
          weight:'70kg'
        },{
          good:true
        }
      ]
    },
    {
      name:'王红平',
      age:49,
      center:[
        {
          heightw:'120cm'
        },{
          weight:'70kg'
        },{
          good:true
        }
      ]
    },
    {
      name:'许公伟',
      age:50,
      center:[
        {
          heightw:'170cm'
        },{
          weight:'70kg'
        },{
          good:true
        }
      ]
    }
  ]

  public Message=[];

  public dataa = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park',
    }, {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ];


  private headers=new Headers({'content-Type':'application/json'})


  constructor(private Http:Http,Jsonp:Jsonp,private route:ActivatedRoute) { 

    console.log(typeof this.dataa)

  }

  ngOnInit() {
    // 获取动态路由
    this.route.params
    //this.route.queryParams /**获取get传值 */

    console.log(this.route.queryParams);
    this.route.queryParams.subscribe(function(data){
      console.log(data);
      
    })
  }

  requerMsg(){

    var _this=this;
    var url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

    //使用Rxjs中的map方法
    this.Http.get(url).map(res=>res.json())/**返回的数据转换成json */
    .subscribe(
      function(data){

        console.log('原始数据:');
        console.log(data);

        // let jsonData=JSON.parse(data['_body']);

        // //obj
        _this.Message=data.result;
        // //数据转换


        console.log(_this.Message);
    
      },function(err){
        console.log(err);
      }
    );
  }


  requerPostMsg(){
    this.Http.post('url',JSON.stringify({}),{headers:this.headers}).subscribe(
      function(data){

    },function(err){

    })

  }

  sayHello(){
    alert('这是news中的hello');
  }

}
