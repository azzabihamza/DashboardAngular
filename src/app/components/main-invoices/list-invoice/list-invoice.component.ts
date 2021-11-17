import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../services/invoice.service'
import { Invoice } from '../../../models/invoice'
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {

  invoices: Invoice[] | undefined;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((invoices) => (this.invoices = invoices));
  }

}
