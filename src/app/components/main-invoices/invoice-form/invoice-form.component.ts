import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { DetailFacture } from 'src/app/models/detailFacture';
import { Facture } from 'src/app/models/facture';
import { Produit } from 'src/app/models/produit';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm: FormGroup ;
  detailInvoiceForm: FormGroup;
  detailFactures: DetailFacture[] = [];
  produits: Produit[];

  clients: Client[];
  facture: Facture;
  totalFacture: number;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.intializeForm();
    this.initializeDetailInvoiceForm();
    this.getCustomers();
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

  getCustomers(){
    this.customerService.getAllCustomersFromDB().subscribe(clients => this.clients = clients);
  }

  getDetailFactures(detailFactures: DetailFacture[]) {
    this.detailFactures = detailFactures;
    this.totalFacture = this.calculerTotal();
    console.log(this.detailFactures);
  }

  calculerTotal(): number {
    let total = 0;
    this.detailFactures.forEach(detailFacture => {
      total += detailFacture.prixTotal;
    });
    return total;
  }

}
