import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../fournisseur';
import { ProvidersServiceService } from 'src/app/providers-service.service';
import { ActivatedRoute } from '@angular/router';

interface categorieProduit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.css']
})  
export class ListProvidersComponent implements OnInit {
  providers : Fournisseur[]; 
  myProvider : Fournisseur;
  showEditProvider:Boolean = false;
  showAddProvider:Boolean = true;
  SelectedCat:String ;
  dateDebut : string ='';
  dateFin : string = '';

  constructor(private PS : ProvidersServiceService, private ac : ActivatedRoute) { }

  ngOnInit(): void {
    this.PS.getAllProviders().subscribe((prov)=>this.providers=prov);
  }

  AddProvider(i:Fournisseur){
    this.providers.push(i);
    this.PS.ajouterProvider(i);
    console.log(i);
      }
  deleteProvider( i : bigint,j : number){
    this.providers.splice(j,1);
    this.PS.RemoveProvider(i).subscribe(); 
    
      }
      rechercheCat(i:string){
          this.PS.RechercheByCat(i).subscribe((res)=>this.providers=res);
          console.log(i);
      }
      resetlist(){
        this.PS.getAllProviders().subscribe((prov)=>this.providers=prov);

      }
      rechercheDate(){
        this.PS.Recherchebydate(this.dateDebut, this.dateFin).subscribe((res)=>this.providers=res);
        
    }
     

      showEditForm(i:Fournisseur){
        // this.show=!this.show;
        this.showEditProvider=true;
        this.showAddProvider=false; 
        this.myProvider=i;

       }

       updateProvider(i:Fournisseur){
        for (let k in this.providers){
          if (this.providers[k].idFournisseur == i.idFournisseur){
            this.providers[k]=i;
          }
        }
        
        this.showEditProvider=false;
        this.showAddProvider=true;
        
      }
      categories: categorieProduit[] = [
        {value: 'ELECTROMENAGER', viewValue: 'ELECTROMENAGER'},
        {value: 'ALIMENTAIRE', viewValue: 'ALIMENTAIRE'},
        {value: 'QUINCAILLERIE', viewValue: 'QUINCAILLERIE'},
      ];

}
