import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    details: new FormControl(''),
  })
 
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.warn(this.contactForm.value)
  }

}
