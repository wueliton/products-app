import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-producs-table',
  templateUrl: './producs-table.component.html',
  styleUrls: ['./producs-table.component.css'],
})
export class ProducsTableComponent implements OnInit {
  @ViewChild(MatTable)
  dataTable: MatTable<any> | undefined;

  products: Product[] = this.productService.getProducts();
  prodColumns: string[] = ['id', 'name', 'department', 'price', 'description'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.onNewProduct.subscribe((product) => {
      this.dataTable?.renderRows();
    });
  }

  ngOnDestroy(): void {
    this.productService.onNewProduct.unsubscribe();
  }
}
