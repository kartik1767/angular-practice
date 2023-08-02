import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
// import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';


  // today = Date();



  // counter = 0 
  
  // count(val:string){
  //     val === "add" ? this.counter ++ : this.counter--
  // }

  // disable = false
  // name = "kartik"

  // toggle(){
  //   this.disable = !this.disable
  // }

  // show = !true

  // color = "yellow"
  // users = ["one", "two", "three", "four", "five"]

  // users=[
    
  //   { name: "kartik", lastName: "mne", number: "17",age:"12", social:["FB","INSTA","SNAP"]},
  //   { name: "kartk", lastName: "mkne", number: "72",age:"22",social:["FB1","INSTA2","SNAP1"]},
  //   { name: "karik", lastName: "ane", number: "73",age:"32",social:["FB23","INSTA4","SNAP3"]},
  //   { name: "katik", lastName: "man", number: "74",age:"432",social:["FB2","INSTA3","SNAP4"]},
  // ]


  // ******************* STYLE BINDING **************************
  // color = "red"
  // bgColor = "blue"

  // toggle(){
  //   this.color = "white"
  //   this.bgColor = "black"
  // }


  // **************************** USER DATA ******************************* //

//   userData:any = {}

//   getData(form:NgForm){
//     console.warn(form)

//     this.userData = form
//   }
// }

// TOGGLE

// disable = true

// toggle(){
//   this.disable = !this.disable
// }


// ********************* TO DO LIST **************************
// list :any[] = []

// addTask(item:string){
  

//   this.list.push(
//     {
//       id:this.list.length, 
//       name:item
//     })

//     console.warn(this.list)
// }


// removeTask(id:number){
//   console.warn(id+1)
//   this.list = this.list.filter(item => item.id!==id)
// }


// Parent to Child
// data = 10;


// update(){
//   this.data = Math.floor(Math.random()*100)
// }

// userDetails = [
//   {name: "Anil Sidhu", email: "anil@test.com"},
//   {name: "Bhasker Verma", email: "bhasker@test.com"},
//   {name: "Sam", email: "sam@test.com"},
//   {name: "Peter", email: "peter@test.com"}
// ]

// ***********************************************************
// ************** PARENT TO CHILD ******************

// data = "C"
// updateData(item:string){
//   console.warn(item)
//   this.data = item
// }

// item:any;


// *************** PIPES **********************
// user = {
//   name: "Kartik",
//   age: 22
// }

// num : number = 10000000000.12000000000000

// *************************************** TEMPLATE DRIVEN FORMS ***************************************
// userLogin(item:any){
//   console.warn(item)
// }


// **************************************** REACTIVE  FROMS  **********************************************
// loginForm = new FormGroup({
//   name: new FormControl('', [Validators.required, Validators.email]),
//   password: new FormControl('', [Validators.required, Validators.minLength(5)])
// })

// login(){
//   console.warn(this.loginForm.value)
// }

// get name (){
//   return this.loginForm.get('name')
// }

// get password (){
//   return this.loginForm.get('password')
// }
users:any;
constructor(private userData: UserDataService){
  console.warn("userdata", userData.users())
  this.users = userData.users()
}

}