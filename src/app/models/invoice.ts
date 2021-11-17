import { Client } from "./client";

export class Invoice {
  idInvoice !: number;
  discountAmount!: number;
  billAmount!: number;
  dateBill !: Date;
  status!: Boolean;
  client !: Client;
}
