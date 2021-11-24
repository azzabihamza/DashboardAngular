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
import { ListProvidersComponent } from './components/main-providers/list-providers/list-providers.component';
import { EditProvidersComponent } from './components/main-providers/edit-providers/edit-providers.component';
import { AddProvidersComponent } from './components/main-providers/add-providers/add-providers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
    ListProvidersComponent,
    EditProvidersComponent,
    AddProvidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    NgbModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
