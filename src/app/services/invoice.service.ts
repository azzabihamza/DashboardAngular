import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private url = 'http://localhost:8081/SpringMVC/servlet';

  constructor(private _http: HttpClient) { }

  findAllFactures(): Promise<Facture[]> {
    return this._http.get(this.url + '/getAllFactures').toPromise().then(response => response as Facture[]).catch(this.handleError);
  }

  findFacture(id: number): Observable<Facture> {
    return this._http.get<Facture>(this.url + '/getFacture/' + id);
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

