import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainCustomersComponent } from './components/main-customers/main-customers.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainProductsComponent } from './components/main-products/main-products.component';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { MainStockComponent } from './components/main-stock/main-stock.component';
import { MainProvidersComponent } from './components/main-providers/main-providers.component';
import { MainInvoicesComponent } from './components/main-invoices/main-invoices.component';
import { ListInvoiceComponent } from './components/main-invoices/list-invoice/list-invoice.component';
import { InvoiceFilterComponent } from './components/main-invoices/invoice-filter/invoice-filter.component';
import { InvoiceFormComponent } from './components/main-invoices/invoice-form/invoice-form.component';
import { CustomersFormComponent } from './components/main-customers/customers-form/customers-form.component';
import { UpdateFormComponent } from './components/main-customers/update-form/update-form.component';
import { ListCustomersComponent } from './components/main-customers/list-customers/list-customers.component';
import { ProductFormComponent } from './components/main-products/product-form/product-form.component';
import { ListProductComponent } from './components/main-products/list-product/list-product.component';
import { InvoiceComponent } from './components/main-invoices/invoice/invoice.component';
import { ListRayonComponent } from './components/main-shop/list-rayon/list-rayon.component';
import { AddRayonComponent } from './components/main-shop/add-rayon/add-rayon.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'customers', component: MainCustomersComponent, children: [
      {path: '', component: ListCustomersComponent},
      {path: 'addcustomer', component: CustomersFormComponent},
      {path: 'updatecustomer/:id"', component: UpdateFormComponent}
    ]},
    {path: 'products', component: MainProductsComponent, children: [
      {path: '', component: ListProductComponent},
      {path: 'addProduct', component: ProductFormComponent},
    ]},
    {path: 'stock', component: MainStockComponent},
    {path: 'shop', component: MainShopComponent, children: [
      {path: '', component: ListRayonComponent},
      {path: 'addRayon', component: AddRayonComponent},
    ]},
    {path: 'providers', component: MainProvidersComponent},
    {path: 'invoices', component: MainInvoicesComponent, children: [
      {path: '', component: ListInvoiceComponent},
      {path: 'addInvoice', component: InvoiceFormComponent},
      {path: 'showInvoice/:id', component: InvoiceComponent}
    ]},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
  ]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
