import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { DetailFacture } from 'src/app/models/detailFacture';
import { Facture } from 'src/app/models/facture';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm: FormGroup ;
  detailInvoiceForm: FormGroup;
  detailFacture: DetailFacture;
  produits: Produit[];

  clients!: Client[];
  facture!: Facture;

  constructor() { }

  ngOnInit(): void {
    this.intializeForm();
    this.initializeDetailInvoiceForm();
  }

  intializeForm() {
    this.invoiceForm = new FormGroup({
      client: new FormControl(''),
      montantFacture: new FormControl(''),
      montantRemise: new FormControl(''),
      detailFacture: new FormControl('')
    });
  }

  initializeDetailInvoiceForm() {
    this.detailInvoiceForm = new FormGroup({
      produit: new FormControl(''),
      quantite: new FormControl(''),
      prix: new FormControl(''),
      Remise: new FormControl(''),
      montantRemise: new FormControl(''),
      total: new FormControl('')
    });
  }

  addDetailInvoice() {
  }


}
