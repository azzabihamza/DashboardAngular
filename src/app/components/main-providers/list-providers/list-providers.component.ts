import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fournisseur } from 'src/app/models/fournisseur';
import { ProvidersService } from 'src/app/services/providers.service';

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
  dateDebut : Date;
  dateFin : Date;
  nombreFournisseurCat : object ;
  nombreFournisseurElec: any ;
  nombreFournisseurQu :any;
  nombreFournisseurAl : any;
  NF : string ='';
  catFour : any;

  constructor(private PS : ProvidersService, private ac : ActivatedRoute) { }

  ngOnInit(): void {
    this.PS.getAllProviders().subscribe((prov)=>this.providers=prov);
  }

  AddProvider(i:Fournisseur){
    this.providers.push(i);
    this.PS.ajouterProvider(i);
    console.log(i);
      }
  deleteProvider( i : number ,j : number){
    this.providers.splice(j,1);
    this.PS.RemoveProvider(i).subscribe();

      }
      rechercheCat(i:string){
          this.PS.RechercheByCat(i).subscribe((res)=>this.providers=res);
          console.log(i);
          this.PS.countFournisseurByCat(i).subscribe((res)=>this.nombreFournisseurCat=res);
          this.NF = 'le Nombre de fournisseur en ' + i + ' est ' + this.nombreFournisseurCat;
          console.log(this.NF);

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

       showProduit(i: number){

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
