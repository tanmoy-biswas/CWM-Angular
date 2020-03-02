import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpListService {

  constructor() { }
  getEmpList(){
    return ["emp1","emp2","emp3"];
  }
}
