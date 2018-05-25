import { Component,OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver, ComponentRef} from '@angular/core';
import { flyIn } from './animations/fly-in';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[flyIn]
})
export class AppComponent {
  

}
