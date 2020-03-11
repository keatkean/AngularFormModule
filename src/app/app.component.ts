import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // contactForm = new FormGroup({
  //   firstname: new FormControl('KK'),
  //   lastname: new FormControl({value: 'Lee', disabled: true}),
  //   email: new FormControl('', [Validators.required, Validators.minLength(10)]),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     street: new FormControl(),
  //     pincode: new FormControl()
  //   })
  // });
  contactForm;

  countryList: Country[] = [
    {countryId: 1, name: 'Malaysia'},
    {countryId: 2, name: 'Singapore'}
  ];
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      })
    });
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city() {
    return this.contactForm.get('address').get('city');
  }

  get street() {
    return this.contactForm.get('address').get('street');
  }

  get pincode() {
    return this.contactForm.get('address').get('pincode');
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}

export class Country {
  // countryId: number;
  // name: string;

  constructor(public countryId: number, public name: string) {
  }
}
