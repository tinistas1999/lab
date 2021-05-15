import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name: string;
  nip: string;
  email: string;
  adress: Adres;
  tasks: string[];
  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log('nginit');
    this.name = 'Hebe'
    this.nip = '352 435 123';
    this.adress = {
      street: 'Ułanów',
      hauseNo: '9',
      flatNo: '',
      postalCode: '20-554',
      city: 'Lublin'
    };
    this.email = 'hebe@wp.pl';
    this.tasks = ['Biedronka', 'Kaufland'];
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

interface Adres {
  street: string;
  hauseNo: string;
  flatNo: string;
  postalCode: string;
  city: string;
}
