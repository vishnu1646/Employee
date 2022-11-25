import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  data:any= [
    {
      "name":"Vishnu",
  "designation":"Software Engineer",
  "company":"NeST Digital",
  "salary":"45000",
    },
    {
        "name":"Athul",
    "designation":"Software Engineer",
    "company":"EY",
    "salary":"35000",
    },
    {
      "name" :"Ajay",
  "designation":"Software Engineer",
  "company":"TCS",
  "salary":"40000",
    },
    {
      "name" :"Nerrin",
  "designation":"Software Engineer",
  "company":"UST",
  "salary":"45000",
    },
  {
    "name" :"Karthika",
"designation":"Software Engineer",
"company":"Google",
"salary":"75000",
  }
  ]

}
