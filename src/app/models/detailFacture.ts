import { Facture } from "./facture";
import { Produit } from "./produit";

export class DetailFacture {
    idInvoiceDetail: number | undefined;
    amountDiscount: number | undefined;
    quantity: number | undefined;
    totalPrice: number | undefined;
    discountPrice: number | undefined;
    produit: Produit | undefined;
    facture: Facture | undefined;
}
