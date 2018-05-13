import { Component, OnInit } from '@angular/core';

//动态路由取值
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    //console.log(this.route.params.value.id);//错误写法

    //因为是obsulube对象可观察

    this.route.params.subscribe(function(data){
      console.log('路由获取到的信息：')
      console.log(data);
    })

  }
  
}
