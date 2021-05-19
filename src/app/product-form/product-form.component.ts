import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../models/departament.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  name: string = '';
  department: Department = { name: '' };
  departments: Department[] = this.departmentService.getDepartments();
  price: number = 0.0;
  description: string = '';

  constructor(
    private departmentService: DepartmentService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  save() {
    this.productService.addProduct({
      name: this.name,
      description: this.description,
      price: this.price,
      department: this.department,
    });

    this.clear();
  }

  clear() {
    this.name = '';
    this.department = { name: '' };
    this.price = 0.0;
    this.description = '';
  }
}
