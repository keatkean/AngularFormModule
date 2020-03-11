import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { timeout } from 'q';

@Component({
  selector: 'app-reactive-status',
  templateUrl: './reactive-status.component.html',
  styleUrls: ['./reactive-status.component.css']
})
export class ReactiveStatusComponent implements OnInit {

  title = 'Reactive Forms - Status Change';

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  });
  constructor() { }
  onSubmit() {
    // console.log(this.reactiveForm.value);
  }
  ngOnInit(): void {
    this.reactiveForm.get('firstname').statusChanges.subscribe(newStatus => {
      console.log('firstname status changed');
      console.log(newStatus);
      console.log(this.reactiveForm.get('firstname').status);
      console.log(this.reactiveForm.status);

      setTimeout(() => {
        console.log(this.reactiveForm.status);
      });

    });

    this.reactiveForm.get('address').statusChanges.subscribe(newStatus => {
      console.log('address status changed');
      console.log(newStatus);
    });

    this.reactiveForm.statusChanges.subscribe(newStatus => {
      console.log('form status changed');
      console.log(newStatus);
    });
  }

  setValue() {

    const contact = {
      firstname: 'Rahul',
      lastname: 'Dravid',
      address: {
        city: 'Bangalore',
        street: 'Brigade Road',
        pincode: '600070'
      }
    };

    this.reactiveForm.setValue(contact);
  }

  setAddress() {

    this.reactiveForm.get('address').setValue(
      {
        city: 'Bangalore',
        street: 'Brigade Road',
        pincode: '600070'
      }
    );
  }

  setFirstname() {
    this.reactiveForm.get('firstname').setValue('Saurav');
  }

  withoutOnlySelf() {
    this.reactiveForm.get('firstname').setValue('');
  }
  withOnlySelf() {
    this.reactiveForm.get('firstname').setValue('', { onlySelf: true });
  }

  withEmitEvent() {
    this.reactiveForm.get('firstname').setValue('Sachin');
  }
  withoutEmitEvent() {
    this.reactiveForm.get('firstname').setValue('', { emitEvent: false });
  }

  reset() {
    this.reactiveForm.reset();
  }
}
