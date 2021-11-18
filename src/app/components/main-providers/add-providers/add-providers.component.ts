import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { Fournisseur } from '../fournisseur';
import {  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrls: ['./add-providers.component.css']
})
export class AddProvidersComponent implements OnInit {
FormProviderAdd : FormGroup; 
@Output() ajouterevent : EventEmitter<Fournisseur>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.FormProviderAdd=new FormGroup({
      codeF:new FormControl('',Validators.required),
      libF:new FormControl('',Validators.required),
      adresseF: new FormControl('',Validators.required),
      numtel: new FormControl('',[Validators.required,Validators.pattern("[0-9]{8}")]),
      dateCreation:new FormControl('',Validators.required),
      categorieProduit:new FormControl('',Validators.required)
    }) 
  }
  get codeFC (){return this.FormProviderAdd.get('codeF');};
  get libFC (){return this.FormProviderAdd.get("libF");};
  get adresseFC (){return this.FormProviderAdd.get("adresseF");};
  get numtelC (){return this.FormProviderAdd.get("numtel");};
  get dateCreationC (){return this.FormProviderAdd.get("dateCreation");};
  get categorieProduitC (){return this.FormProviderAdd.get("categorieProduit");};
  Ajouterf(){
    this.ajouterevent.emit(this.FormProviderAdd.value);  
    this.FormProviderAdd.reset();
 
   }

}
