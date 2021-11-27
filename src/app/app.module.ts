import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IonicModule } from '@ionic/angular';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainCustomersComponent } from './components/main-customers/main-customers.component';
import { MainProductsComponent } from './components/main-products/main-products.component';
import { MainStockComponent } from './components/main-stock/main-stock.component';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { MainProvidersComponent } from './components/main-providers/main-providers.component';
import { MainInvoicesComponent } from './components/main-invoices/main-invoices.component';
import { ListInvoiceComponent } from './components/main-invoices/list-invoice/list-invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceFilterComponent } from './components/main-invoices/invoice-filter/invoice-filter.component';
import { InvoiceFormComponent } from './components/main-invoices/invoice-form/invoice-form.component';
import { InvoiceDetailFormComponent } from './components/main-invoices/invoice-detail-form/invoice-detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './components/main-invoices/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { CustomersFormComponent } from './components/main-customers/customers-form/customers-form.component';
import { UpdateFormComponent } from './components/main-customers/update-form/update-form.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListCustomersComponent } from './components/main-customers/list-customers/list-customers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    DashboardComponent,
    MainPageComponent,
    MainCustomersComponent,
    MainProductsComponent,
    MainStockComponent,
    MainShopComponent,
    MainProvidersComponent,
    MainInvoicesComponent,
    ListInvoiceComponent,
    InvoiceFilterComponent,
    InvoiceFormComponent,
    InvoiceDetailFormComponent,
    BreadcrumbComponent,
    CustomersFormComponent,
    UpdateFormComponent,
    ListCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    NgxPaginationModule,
    MenuModule,
    NgbModule,
    IonicModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
