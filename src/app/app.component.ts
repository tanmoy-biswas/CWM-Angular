import { Component } from '@angular/core';
import {EmpListService} from './emp-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'code-with-mosh-Angular';
  public imgUrl:string="https://picsum.photos/200/300";
  public colSpan:number= 2
  EmpList;
  isActive = true;

  constructor(fetchEmpList:EmpListService){
    this.EmpList = fetchEmpList.getEmpList();
  }

  consoleMsg($event){
    $event.stopPropagation();
    console.log("button was clicked", $event);
  }
  onclickDiv(){
    console.log("div was clicked");
  }
}
