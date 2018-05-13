import { Component, OnInit } from '@angular/core';
// 引入服务
import { StorageService } from '../../services/storage.service'; 

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public thingName:string;

  public thingList=[];


  constructor(private Storage:StorageService) {
  
   }

  ngOnInit() {
    //每次刷新获取storage里面的todolist的值
    var thingList=this.Storage.getItem('thingList');
    if(thingList)
     this.thingList=thingList;
  }

  addThing(e){
    
    if(e.keyCode==13){
      //1.从storage获取thingList的数据
      var oldlist=this.Storage.getItem('thingList');
      var obj:object;
      obj={'thingName':this.thingName,'status':1}
        //如果已经有数据，追加数据
      if(oldlist){
        oldlist.push(obj)
        this.Storage.setItem('thingList',oldlist);
      }else{
        //如果原本没有有数据，直接放
        var array=[];
        array.push(obj);
        this.Storage.setItem('thingList',array);
      }
    }
    this.ngOnInit();
  }

  deleteThing(i){
    this.Storage.removeItem(i);
  }

  endThing(i){
    console.log(1);
    var thingList=this.Storage.getItem('thingList');
    thingList[i].status=0;
    this.Storage.setItem('thingList',thingList);
    this.ngOnInit();
  } 

}
