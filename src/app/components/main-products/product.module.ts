import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListProductComponent } from './list-product/list-product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

const routes: Routes = [
  {path: '', component: ListProductComponent},
  {path: 'addProduct', component: ProductFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ListProductComponent, ProductFormComponent, DetailProduitComponent],
  exports: [RouterModule]
  })
export class ProductModule { }
