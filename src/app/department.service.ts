import { Injectable } from '@angular/core';
import { Department } from './models/departament.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private departments: Department[] = [
    {
      id: 1,
      name: 'Clothing',
    },
    {
      id: 2,
      name: 'Books',
    },
    {
      id: 3,
      name: 'Eletronics',
    },
    {
      id: 4,
      name: 'Computers',
    },
  ];

  private nextID: number = this.departments.length + 1;

  constructor() {}

  getDepartments(): Department[] {
    return this.departments;
  }

  addDepartment(department: Department) {
    this.departments.push({ id: this.nextID++, ...department });
  }

  getDepartmentById(id: number): Department | undefined {
    return this.departments.find((department) => department.id === id);
  }
}
