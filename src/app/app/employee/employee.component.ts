import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name: string;
  surname: string;
  age: number;
  email: string;
  adress: Address;
  tasks: string[];
  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log('nginit');
    this.name = 'Sherlock';
    this.surname = 'Holmes';
    this.age = 35;
    this.adress = {
      street: 'Konstantynow',
      hauseNo: '1H',
      flatNo: '',
      postalCode: '20-708',
      city: 'Lublin'
    };
    this.email = 'niemamaila@wp.pl';
    this.tasks = ['Code', 'MoreCode'];
  }

  addTask(task): void {
    this.tasks.push(task);
  }

  deleteTask(task): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }
}

interface Address {
  street: string;
  hauseNo: string;
  flatNo: string;
  postalCode: string;
  city: string;
}
