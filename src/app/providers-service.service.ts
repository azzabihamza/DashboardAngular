import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fournisseur } from './components/main-providers/fournisseur';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProvidersServiceService {

  constructor(private http : HttpClient) { }

  public ajouterProvider(fournisseur: Fournisseur) : Observable<Fournisseur>{

    return this.http.post<Fournisseur>("http://localhost:9595/SpringMVC/servlet/addFournisseur",fournisseur, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
    }


  getAllProviders(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>("http://localhost:9595/SpringMVC/servlet/retrieveFournisseur");
  }

  RemoveProvider(Fournisseur: Fournisseur | number): Observable<Fournisseur> {
    const id = typeof Fournisseur === 'number' ? Fournisseur : Fournisseur.idFournisseur;
    const url = 'http://localhost:9595/SpringMVC/servlet/removeFourisseurs/' + id;
    return this.http.delete<Fournisseur>(url);
  }
  

  UpdateFournisseur (Fournisseur: Fournisseur): Observable<Fournisseur> {
    
    
    return this.http.put<Fournisseur>('http://localhost:9595/SpringMVC/servlet/updateFournisseur',Fournisseur);
  }

  RechercheByCat(categorieProduit : String ): Observable<Fournisseur[]> {
    const url = 'http://localhost:9595/SpringMVC/servlet/retrieveFournisseurByCat/'+ categorieProduit;
    return this.http.get<Fournisseur[]>(url);
  }


  Recherchebydate (dateDebut : string , dateFin : string ): Observable<Fournisseur[]> {
    const url = 'http://localhost:9595/SpringMVC/servlet/retrieveFournisseurBydat/'+ dateDebut+'/'+dateFin;
    return this.http.get<Fournisseur[]>(url);
  }
  

}
