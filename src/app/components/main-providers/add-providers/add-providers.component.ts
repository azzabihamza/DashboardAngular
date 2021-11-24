import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { Fournisseur } from '../fournisseur';
import {  Validators } from '@angular/forms';
import { ProvidersServiceService } from 'src/app/providers-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrls: ['./add-providers.component.css']
})
export class AddProvidersComponent implements OnInit {
FormProviderAdd : FormGroup; 
FournisseurAdd : Fournisseur ; 
@Output() ajouterevent : EventEmitter<Fournisseur>= new EventEmitter();

  constructor(private PS : ProvidersServiceService, private ac : ActivatedRoute) { }

  ngOnInit(): void {
    this.FormProviderAdd=new FormGroup({
      codeFournisseur:new FormControl('',Validators.required),
      libelleFournisseur:new FormControl('',Validators.required),
      adresseFournisseur: new FormControl('',Validators.required),
      numtel: new FormControl('',[Validators.required,Validators.pattern("[0-9]{8}")]),
      dateCreation:new FormControl('',Validators.required),
      categorieProduit:new FormControl('',Validators.required)
    }) 
  }
  get codeFournisseurc(){return this.FormProviderAdd.get('codeFournisseur');};
  get libelleFournisseurc (){return this.FormProviderAdd.get("libelleFournisseur");};
  get adresseFournisseurc (){return this.FormProviderAdd.get("adresseFournisseur");};
  get numtelC (){return this.FormProviderAdd.get("numtel");};
  get dateCreationC (){return this.FormProviderAdd.get("dateCreation");};
  get categorieProduitC (){return this.FormProviderAdd.get("categorieProduit");};
/*
  Ajouterf(){
    this.ajouterevent.emit(this.FormProviderAdd.value);  
    this.FormProviderAdd.reset();
 
   }*/
   
   Ajouterf(){
    this.ajouterevent.emit(this.FormProviderAdd.value);  
    this.FormProviderAdd.reset();
  }

}
