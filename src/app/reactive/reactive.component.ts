import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  title = 'Reactive Form';
  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'England')
  ];


  reactiveForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  });

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  ngOnInit() {
    this.setDefault();
  }

  setDefault() {

    const contact = {
      firstname: 'Sachin',
      lastname: 'Tendulkar',
      email: 'sachin@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: {
        city: 'Mumbai',
        street: 'Perry Cross Rd',
        pincode: '400050'
      }
    };

    this.reactiveForm.setValue(contact);
  }

  setValue() {

    const contact = {
      firstname: 'Rahul',
      lastname: 'Dravid',
      email: 'rahul@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '1',
      address: {
        city: 'Bangalore',
        street: 'Brigade Road',
        pincode: '600070'
      }
    };

    this.reactiveForm.setValue(contact);
  }

  setAddress() {

    const address = {
      city: 'Bangalore',
      street: 'Brigade Road',
      pincode: '600070',
    };

    this.reactiveForm.get('address').setValue(address);

  }

  setCountry() {

    this.reactiveForm.get('country').setValue('1');

  }


  patchAddress() {

    const address = {
      city: 'Bangalore',
      street: 'Brigade Road',
      // pincode: "600070",
      // firstname:'saurv'
    };

    this.reactiveForm.get('address').patchValue(address);

  }

  patchName() {
    const contact = {
      firstname: 'Rahul',
      lastname: 'Dravid',
    };

    this.reactiveForm.patchValue(contact);

  }

  reset() {
    this.reactiveForm.reset();
  }

}
export class Country {
  // id: string;
  // name: string;

  constructor(public id: string, public name: string) {
    this.id = id;
    this.name = name;
  }
}
