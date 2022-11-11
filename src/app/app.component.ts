// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'firstAngularApp';
//   firstName="Aman";
//   lastName="Khan";
//   email="aman@aman.com"
//   phone="99999999999";
//   age="20";
//   hobbies=['Reading', 'Playing Cricket', 'Playing Badminton'];
//   address={
//     street: 'St. Peter street',
//     city: 'Lucknow',
//     State: 'Uttar Pradesh'
//   }

//   n1=0;
//   n2=0;

//   Employee = [ 
//     {"id":"1","employee_name":"WdqBvFe","employee_salary":"797","employee_age":"36","profile_image":""}, 
//     {"id":"1925","employee_name":"Menaka6","employee_salary":"24501","employee_age":"24501","profile_image":""}, 
//     {"id":"1969","employee_name":"2381","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"1970","employee_name":"6132","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"1972","employee_name":"2022","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"1973","employee_name":"4604","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"1976","employee_name":"Shylu","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"1977","employee_name":"8221","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"1981","employee_name":"111test","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"1996","employee_name":"test-709","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"1997","employee_name":"test-654","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"1999","employee_name":"test-127","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"2001","employee_name":"test-301","employee_salary":"123","employee_age":"23","profile_image":""}, 
//     {"id":"2003","employee_name":"1769","employee_salary":"123","employee_age":"23","profile_image":""} 
//     ]
// }








// import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//      templateUrl: './app.component.html',
//      styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'aman';
//   todayDate: any ;
//   componentpropertty: any;
//   emailid: any;
//   formdata: any
//   ngOnInit(){
//     this.formdata=new FormGroup({
//       emailid: new FormControl("", Validators.compose([
//         Validators.required,
//         Validators.pattern("[^ @] *[^ @]*")
//       ])),
//       passwd: new FormControl("")
//     });
//   }

//   onClickSubmit(data: any){
//     alert("Entered email id : "+data.emailid);
//   }
// }



// import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { NewserviceService } from './newservice.service';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'abhi';
//   todaydate: any;
//   componentproperty: any;
//   emailid: any;
//   formdata: any;
//   ngOnInit() {
// this.formdata = new FormGroup({
//       emailid: new FormControl("", Validators.compose([
//         Validators.required,
//         Validators.pattern("[^ @]*@[^ @]*")
//       ])),
//       passwd: new FormControl("")
//     });
//   }
//   onClickSubmit(data: any) {
//     alert("Entered Email id : " + data.emailid);
//     this.emailid=data.emailid;
//   }

//   creating new service injection
//   title='Angular Solutions';
//   text:string="";
//   emp: any[]=[];
//   constructor(private _newservice: NewserviceService){  }
//   ngOnInit(){
//     this.emp=this._newservice.employees;
//     this.text=this._newservice.display();
//   }
// }



import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title='myAngularApp';
  currentdate=new Date();
  js={name: 'Aman', age: '20', address: {a1: 'Lucknow', a2: 'India'}};
  courses=['HTML', 'CSS', 'JS', 'PHP', 'SQL'];
}

