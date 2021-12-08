import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailProduit } from '../models/detailProduit';
import { Produit } from '../models/produit';
import { ResponseJson } from '../models/ResponseJson';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = 'http://localhost:8081/SpringMVC/servlet';

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  findAllProduits(): Observable<Produit[]> {
    return this._http.get<Produit[]>(this.url + '/getAllProduits');
  }

  addProduit(produit: Produit): Observable<Produit> {
    return this._http.post<Produit>(this.url + '/addProduit', produit, this.httpOptions);
  }

  deleteProduit(id: number): Observable<Produit> {
    return this._http.delete<Produit>(this.url + '/deleteProduit/' + id);
  }

  updateProduit(produit: Produit): Observable<Produit> {
    return this._http.put<Produit>(this.url + '/updateProduit', produit, this.httpOptions);
  }

  addDetail(detailProduit: DetailProduit): Observable<ResponseJson> {
    return this._http.post<ResponseJson>(this.url + '/addDetailProduit', detailProduit, this.httpOptions);
  }


}
