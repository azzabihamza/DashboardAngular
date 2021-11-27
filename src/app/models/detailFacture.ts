import { Facture } from "./facture";
import { Produit } from "./produit";

export class DetailFacture {
    idDetailFacture: number | undefined;
    qte: number | undefined;
    prixTotal: number | undefined;
    pourcentageRemise: number | undefined;
    montantRemise: number | undefined;
    produit: Produit | undefined;
    facture: Facture | undefined;
}
