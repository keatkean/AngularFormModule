import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-model',
  templateUrl: './template-model.component.html',
  styleUrls: ['./template-model.component.css']
})
export class TemplateModelComponent implements OnInit {
  title = 'Template driven forms';

  @ViewChild('templateForm', {static: true}) templateForm: NgForm;

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  contact: contact;

  onSubmit(tF) {
    console.log(this.templateForm.value);
  }

  ngOnInit() {

    setTimeout(() => {
      this.setDefault();
    });

  }

  setDefault() {

    // tslint:disable-next-line:no-shadowed-variable
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

    this.templateForm.control.setValue(contact);
  }


  setValue() {

    // tslint:disable-next-line:no-shadowed-variable
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

    this.templateForm.setValue(contact);
  }

  setAddress() {

    const address = {
      city: 'Bangalore',
      street: 'Brigade Road',
      pincode: '600070'
    };

    this.templateForm.control.get('address').setValue(address);

  }

  setCountry() {

    const address = {
      city: 'Bangalore',
      street: 'Brigade Road',
      pincode: '600070'
    };

    this.templateForm.control.get('country').setValue('1');

  }


  patchAddress() {

    const address = {
      city: 'Bangalore',
      street: 'Brigade Road',
      // pincode: "600070",
      // firstname:'saurv'
    };

    this.templateForm.control.get('address').patchValue(address);

  }

  patchName() {
    // tslint:disable-next-line:no-shadowed-variable
    const contact = {
      firstname: 'Rahul',
      lastname: 'Dravid',
    };

    this.templateForm.control.patchValue(contact);

  }

  reset() {
    this.templateForm.reset();
  }

}
// tslint:disable-next-line:class-name
export class contact {
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  };
}


// tslint:disable-next-line:class-name
export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
