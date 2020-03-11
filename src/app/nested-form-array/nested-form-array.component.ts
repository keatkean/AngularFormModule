import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nested-form-array',
  templateUrl: './nested-form-array.component.html',
  styleUrls: ['./nested-form-array.component.css']
})
export class NestedFormArrayComponent implements OnInit {

  empForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      employees: this.fb.array([]) ,
    });
  }

  ngOnInit(): void {
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.employees().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }
  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  onSubmit() {

  }
}
