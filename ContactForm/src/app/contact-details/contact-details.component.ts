import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DetailsService } from '../details.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactData:any[];
  constructor(private dataService: DetailsService, private router: Router) { }
  
  ngOnInit() {
    this.contactData = this.dataService.getDetails();
  }

  editContact(id):void{
    this.router.navigate(['/addcontact',id]);
  }

  deleteContact(id):void{
    if(confirm("Are you sure you want to delete the contact?")){
      let res = this.dataService.deleteContact(id);
      if(res && res == "OK"){
        alert("Contact Deleted Successfully.");
      }
    }
  }
}
