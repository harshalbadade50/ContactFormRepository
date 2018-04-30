import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DetailsService } from './details.service';

const routes: Routes = [
  { path: 'allcontactdetails', component: ContactDetailsComponent },
  { path: 'addcontact', component: AddContactComponent },
  { path: 'addcontact/:id', component: AddContactComponent },
] 

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
