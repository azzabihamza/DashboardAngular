import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../fournisseur';

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

  constructor() { }

  ngOnInit(): void {
    this.providers= ([
      {codeF : "1" , libF: "lib1", adresseF: "adr1", numtel: "4545484", dateCreation : "2021-04-04",categorieProduit: "Electromenager"  },
      {codeF : "2" , libF: "lib2", adresseF: "adr2", numtel: "799866", dateCreation : "2021-10-05",categorieProduit: "Alimentaire"  },
      {codeF : "3" , libF: "lib3", adresseF: "adr3", numtel: "76786", dateCreation : "2019-09-09",categorieProduit: "Quincaillerie"  }
    ])
  }

  AddProvider(i:Fournisseur){
    this.providers.push(i);
    console.log(i);
      }
  deleteProvider( i : number){
    this.providers.splice(i,1);
    
      }
      showEditForm(i:Fournisseur){
        // this.show=!this.show;
        this.showEditProvider=true;
        this.showAddProvider=false; 
        this.myProvider=i;

       }

       updateProvider(i:Fournisseur){
        for (let k in this.providers){
          if (this.providers[k].codeF == i.codeF){
            this.providers[k]=i;
          }
        }
        this.showEditProvider=false;
        this.showAddProvider=true;
        
      }

}
