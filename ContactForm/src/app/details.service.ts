import { Injectable } from '@angular/core';


const DETAILS: Details[] = [
  { id: 1, fName:'Mr. Rajesh', lName: 'Kumar', email: 'rajeshk@gmail.com', contact:'9855632478',status:true },
  { id: 2, fName:'Mr. Ashosk', lName: 'Rathod', email: 'ashokk@gmail.com', contact:'9963125478',status:false },
  { id: 3, fName:'Mr. Abhi', lName: 'Singh', email: 'abhis@gmail.com', contact:'9863589654',status:true },
  { id: 4, fName:'Mr. Sunny', lName: 'Kapoor', email: 'sunnyk@gmail.com', contact:'8756369742',status:false },
  { id: 5, fName:'Mr. Nikhil', lName: 'Pataudi', email: 'nikhilp@gmail.com', contact:'7856259458',status:true },
];

@Injectable()
export class DetailsService {

  constructor() { }
  getContact(id):any{
    let contactData  = {};
    for(let i = 0; i < DETAILS.length; i++){
      if(DETAILS[i].id == id){
        contactData = DETAILS[i];
        break;
      }
    }
    return contactData;
  }

  getDetails():Details[]{
    return DETAILS;
  }

  updateContact(data):String{
    let id = data.id;
    for(let i = 0; i < DETAILS.length; i++){
      if(DETAILS[i].id == id){
        DETAILS.splice(i,1);
        break;
      }
    }
    DETAILS.push(data);
    return "OK";
  }

  addContact(data):String{
    DETAILS.push(data);
    return "OK";
  }

  deleteContact(id):String{
    for(let i = 0; i < DETAILS.length; i++){
      if(DETAILS[i].id == id){
        DETAILS.splice(i,1);
        break;
      }
    }
    return "OK";
  }
}

export class Details{
  id: number;
  fName: string;
  lName: string;
  email: string;
  contact: string;
  status: boolean;
}
