import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../services/invoice.service'
import { Facture } from '../../../models/facture'
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {

  invoices!: Facture[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    //this.invoiceService.getInvoices().subscribe((invoices) => (this.invoices = invoices));
    this.getAllInvoices();
  }

  getAllInvoices() {
    this.invoiceService.findAllFactures().then((invoices) => {this.invoices = invoices}, (error) => {console.log(error)});
  }

  deleteInvoice(id: number, index: number) {
    this.invoices.splice(index, 1);
    this.invoiceService.deleteFacture(id).subscribe(() => {}, (error) => {console.log(error)});
    

  }
}
