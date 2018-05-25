import { trigger, state, style, animate, transition ,keyframes } from '@angular/animations';

// https://angular.io/guide/animations  官方文档
// https://github.com/jiayihu/ng-animate 和ng结合的开源动画

export const flyIn=trigger('flyIn',[
    transition('void => *',[
      animate(3000,keyframes([
        style({opacity:0,transform:'translateX(-100%)',offset:0}),
        style({opacity:1,transform:'translateX(25px)',offset:0.3}),
        style({opacity:1,transform:'translateX(0)',offset:1.0})
      ]))
    ]),
    transition('* => void',[
      animate(3000,keyframes([
        style({opacity:1,transform:'translateX(0)',offset:0}),
        style({opacity:1,transform:'translateX(-25px)',offset:0.7}),
        style({opacity:0,transform:'translateX(100%)',offset:1.0})
      ]))
    ])
  ])
  