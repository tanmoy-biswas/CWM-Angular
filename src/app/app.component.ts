import { Component } from '@angular/core';
import { EmpListService } from './emp-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'code-with-mosh-Angular';
  public imgUrl: string = "https://picsum.photos/200/300";
  public colSpan: number = 2
  public EmpList;
  isActive = true;
  public TwoWayDataBinding: String = "using typical way";
  public TwoWayDataBindingngModel: string = "using ngmodel";

  public cource = {
    title: "The Complete Angular Cource",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor(fetchEmpList: EmpListService) {
    this.EmpList = fetchEmpList.getEmpList();
  }

  consoleMsg($event) {
    $event.stopPropagation();
    console.log("button was clicked", $event);
  }
  onclickDiv() {
    console.log("div was clicked");
  }
  onkeyUp($event) {
    console.log($event.target.value);
  }
  onkeyUp1(email) {
    console.log("using Template Veriable----------->>>>", email)
  }
  sampleMethod() {

    console.log(this.TwoWayDataBinding);
  }
  sampleMethod1() {
    console.log(this.TwoWayDataBindingngModel);
  }
}
