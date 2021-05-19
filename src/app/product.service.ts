import { EventEmitter, Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private dataFromServer: any[] = [
    {
      id: 1,
      name: 'Laptop',
      department_id: 4,
      price: 40.0,
      description: 'Laptop',
    },
    {
      id: 2,
      name: 'Shirt',
      department_id: 1,
      price: 10.0,
      description: 'Shirt',
    },
    {
      id: 3,
      name: 'Polo',
      department_id: 1,
      price: 50.0,
      description: 'Polo',
    },
    {
      id: 4,
      name: 'Mouse',
      department_id: 3,
      price: 40.0,
      description: 'Mouse',
    },
  ];

  private products: Product[] = [];
  private nextId: number = 0;

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private departmentService: DepartmentService) {
    for (let product of this.dataFromServer) {
      this.products.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        department: this.departmentService.getDepartmentById(product.id),
      });
    }

    this.nextId = this.products.length + 1;
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    product = { id: this.nextId++, ...product };
    this.products.push(product);
    this.onNewProduct.emit(product);
  }
}
