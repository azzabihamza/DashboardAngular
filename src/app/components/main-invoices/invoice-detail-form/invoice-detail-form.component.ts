import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { DetailFacture } from 'src/app/models/detailFacture';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-invoice-detail-form',
  templateUrl: './invoice-detail-form.component.html',
  styleUrls: ['./invoice-detail-form.component.css']
})
export class InvoiceDetailFormComponent implements OnInit {
  detailInvoiceFrom: FormGroup;
  columns:string[];
  detailFacture: DetailFacture;
  produits: Produit[];

  constructor(private formBuilder: FormBuilder, private produitService: ProduitService) {
    this.columns = ['Items', 'Quantity', 'Discount Amount', 'Discount Price', 'Price','Actions'];
   }

  ngOnInit(): void {
    this.createForm();
    this.getProduits();
  }

/**
 * Initializes the Form & by default adds an empty row to the PRIMENG TABLE
 */
 private createForm(): void {
  this.detailInvoiceFrom = this.formBuilder.group({
      //tableRowArray is a FormArray which holds a list of FormGroups
      tableRowArray: this.formBuilder.array([
          this.createTableRow()
      ])
  })
}

/**
 * Returns the FormGroup as a Table Row
 */
 private createTableRow(): FormGroup {
  return this.formBuilder.group({
    produit: new FormControl(''),
    quantite: new FormControl(''),
    prix: new FormControl(''),
    Remise: new FormControl(''),
    montantRemise: new FormControl(''),
    total: new FormControl('')
  });
}

get tableRowArray(): FormArray {
  return this.detailInvoiceFrom.get('tableRowArray') as FormArray;
}

addNewRow(): void {
  this.tableRowArray.push(this.createTableRow());
  console.log(this.tableRowArray);
}

onDeleteRow(rowIndex:number): void {
  this.tableRowArray.removeAt(rowIndex);
}

  addDetailInvoice() {
  }

  getProduits(){
    this.produitService.findAllProduits().subscribe((p)=>this.produits=p);
  }

}
