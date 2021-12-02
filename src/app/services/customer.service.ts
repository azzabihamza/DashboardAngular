import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  list:Client []= [];

  CustomersUrl:string='http://localhost:8081/SpringMVC/servlet';


  constructor(private _http:HttpClient) { }


  getAllCustomersFromDB():Observable<Client[]>{
    return this._http.get<Client[]>(this.CustomersUrl+"/getAllClients");
  }

  deleteCustomer (Customer: Client | number): Observable<Client> {
    const id = typeof Customer === 'number' ? Customer : Customer.idClient;
    const url=this.CustomersUrl+'/remove-client/'+id;
    return this._http.delete<Client>(url);
    }


    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
      }


    addCustomer (Customer: Client): Observable<Client> {

  return this._http.post<Client>(this.CustomersUrl+"/add-client", Customer, this.httpOptions);}



  getCustomerById(id: number): Observable<Client> {
    return this._http.get<Client>(this.CustomersUrl +'/retrieve-client/'+ id); }

    updateCustomer ( Customer: Client): Observable<Client> {
      return this._http.put<Client>(this.CustomersUrl+'/modify-client', Customer, this.httpOptions);
      }

}
