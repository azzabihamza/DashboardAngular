import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailProduitEntity } from '../models/detailProduitEntity';
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
  
  findDetailProduitByid(id:number): Observable<DetailProduitEntity> {
    return this._http.get<DetailProduitEntity>(this.url + '/getDetailProduits/'+id);
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

  addDetail(detailProduitEntity: DetailProduitEntity): Observable<ResponseJson> {
    return this._http.post<ResponseJson>(this.url + '/addDetailProduit', detailProduitEntity, this.httpOptions);
  }

  findProduitByID(id:number): Observable<Produit> {
    return this._http.get<Produit>(this.url + '/getProduit/' + id);
  }



}
