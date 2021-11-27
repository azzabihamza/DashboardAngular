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


const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'customers', component: MainCustomersComponent},
    {path: 'products', component: MainProductsComponent},
    {path: 'stock', component: MainStockComponent},
    {path: 'shop', component: MainShopComponent},
    {path: 'providers', component: MainProvidersComponent},
    {path: 'invoices', component: MainInvoicesComponent, children: [
      {path: '', component: ListInvoiceComponent},
      {path: 'addInvoice', component: InvoiceFormComponent},
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
