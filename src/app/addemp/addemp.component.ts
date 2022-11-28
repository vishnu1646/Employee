import { Component } from '@angular/core';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  name=""
  designation=""
  emailID=""
  employeeCode=""
  phno=""
  yoe=""
  sal=""
  cmpny=""

  readValues =()=>
  {
    let data:any ={"Name":this.name,"Designation":this.designation,"ID":this.emailID,"code":this.employeeCode,"Num":this.phno,"exp":this.yoe,"sal":this.sal,"cmpny":this.cmpny}
    console.log(data)
  }
  

}
