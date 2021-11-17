import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  invoices: Invoice[] | undefined;
  private url = 'http://localhost:8081/SpringMVC/servlet';

  constructor(private _http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this._http.get<Invoice[]>(this.url + '/getAllFactures');
  }
}

