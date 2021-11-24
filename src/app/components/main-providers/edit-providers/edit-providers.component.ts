import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  Validators } from '@angular/forms';
import { ProvidersServiceService } from 'src/app/providers-service.service';

import { ActivatedRoute } from '@angular/router';
import { Fournisseur } from '../fournisseur';
@Component({
  selector: 'app-edit-providers',
  templateUrl: './edit-providers.component.html',
  styleUrls: ['./edit-providers.component.css']
})
export class EditProvidersComponent implements OnInit {
  FormProviderEdit : FormGroup;
  providers : Fournisseur[];
@Input() ProviderToEdit : Fournisseur;
@Input() prop2 : Fournisseur;
@Output() editProvider = new EventEmitter<Fournisseur>();


constructor(private PS : ProvidersServiceService, private ac : ActivatedRoute) { }

  ngOnInit(): void {
    this.FormProviderEdit=new FormGroup({
      codeFournisseur:new FormControl({"value":this.ProviderToEdit.codeFournisseur, "disabled":true}),
      libelleFournisseur:new FormControl(this.ProviderToEdit.libelleFournisseur),
      adresseFournisseur: new FormControl(this.ProviderToEdit.adresseFournisseur),
      numtel: new FormControl(this.ProviderToEdit.numtel,Validators.pattern("[0-9]{8}")),
      dateCreation:new FormControl(this.ProviderToEdit.dateCreation),
      categorieProduit:new FormControl(this.ProviderToEdit.categorieProduit)
    })
  }
  get numtelC (){return this.FormProviderEdit.get("numtel");};
  ngOnChanges(changes:SimpleChanges){
     /*this.FormProviderEdit=new FormGroup({
      codeFedit:new FormControl(this.ProviderToEdit.codeF),
      libFedit:new FormControl(this.ProviderToEdit.libF),
      adresseFedit: new FormControl(this.ProviderToEdit.adresseF),
      numteledit:new FormControl(this.ProviderToEdit.numtel),
      dateCreationedit:new FormControl(this.ProviderToEdit.dateCreation),
      categorieProduitedit:new FormControl(this.ProviderToEdit.categorieProduit)

     })*/
     console.log(changes);
     if(!changes.ProviderToEdit.firstChange){
     this.FormProviderEdit.setControl('libelleFournisseur',new FormControl(this.ProviderToEdit.libelleFournisseur));
     this.FormProviderEdit.setControl('adresseFournisseur',new FormControl(this.ProviderToEdit.adresseFournisseur));
     this.FormProviderEdit.setControl('numtel',new FormControl(this.ProviderToEdit.numtel));
     this.FormProviderEdit.setControl('dateCreation',new FormControl(this.ProviderToEdit.dateCreation));
     this.FormProviderEdit.setControl('categorieProduit',new FormControl(this.ProviderToEdit.categorieProduit));
   }
   }
   editFournisseur(){
    console.log(this.FormProviderEdit.getRawValue());
    this.editProvider.emit(this.FormProviderEdit.getRawValue());
    this.FormProviderEdit.reset();
  }

}
