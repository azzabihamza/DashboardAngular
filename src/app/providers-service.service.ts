import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProvidersServiceService {

  constructor(private http : HttpClient) { }

  public ajouterProvider(provider){
    return this.http.post("http://localhost:9595/SpringMVC/servlet/addFournisseur",provider,{responseType : 'text' as 'json'});
  }
}
