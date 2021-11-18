import { Invoice } from "./invoice";
import { Produit } from "./produit";

export class InvoiceDetail {
    idInvoiceDetail: number | undefined;
    amountDiscount: number | undefined;
    quantity: number | undefined;
    totalPrice: number | undefined;
    discountPrice: number | undefined;
    produit: Produit | undefined;
    invoice: Invoice | undefined;
}
