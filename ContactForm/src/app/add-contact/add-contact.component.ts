import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DetailsService } from '../details.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  user = {
    fName: "",
    lName: "",
    email: "",
    contact: "",
    status: ""
  };
  errorMsg = {
    fName: "First Name is Required",
    lName: "Last Name is Required",
    email: "Invalid Email",
    contact: "Invalid Contact Number"
  };
  update:boolean=false;
  isValid:boolean=false;
  isValidEmail:boolean=false;
  isValidPhone:boolean=false;
  isValidFName:boolean=false;
  isValidLName:boolean=false;

  constructor(private _route: ActivatedRoute,private router: Router, private dataService: DetailsService){}

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get("id");
    if(id){
      let data = this.dataService.getContact(id);
      this.user = data;
      this.update = true;
      this.isValidFName = true;
      this.isValidLName = true;
      this.isValidEmail = true;
      this.isValidPhone = true;
      this.isValid = true;
    }
  }

  addNew(data): void{
    data.id = Math.floor(Math.random() * 100);
    console.log("my data -", data);
    let res = this.dataService.addContact(data);
    if(res && res == "OK"){
      alert("New Contact Added Successfully.");
    }
  };

  updateContact(data): void{
    let res =  this.dataService.updateContact(data);
    if(res && res == "OK"){
      alert("Contact Updated Successfully.");
    }
  }

  validateName(event){
    if(event.currentTarget.name == "fName"){
      if(this.user.fName == undefined || this.user.fName == ""){
        this.isValid = false;
        this.isValidFName = false;
      }else{
        this.isValid = true;
        this.isValidFName = true;
      }
    }else{
      if(this.user.lName == undefined || this.user.lName == ""){
        this.isValid = false;
        this.isValidLName = false;
      }else{
        this.isValid = true;
        this.isValidLName = true;
      }
    }
  }

  validateEmail(event){
    if(this.user.email == undefined || this.user.email == ""){
      this.isValid = false;
      this.isValidEmail = false;
    }else{
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(this.user.email)){
        this.isValid = true;
        this.isValidEmail = true;
      }else{
        this.isValid = false;
        this.isValidEmail = false;
      }
    }
  }

  validatePhone(event){
    if(this.user.contact == undefined || this.user.contact == ""){
      this.isValid = false;
      this.isValidPhone = false;
    }else{
      let re = /^\d{10}$/;
      if(this.user.contact.match(re)){
        this.isValid = true;
        this.isValidPhone = true;
      }else{
        this.isValid = false;
        this.isValidPhone = false;
      }
    }
  }
}

