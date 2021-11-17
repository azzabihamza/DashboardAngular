import { Invoice } from "./invoice";

export class Client {
  idClient: number | undefined;
  nom: string | undefined;
  prenom: string | undefined;
  email: string | undefined;
  password: string | undefined;
  dateNaissance: Date | undefined;
  profession: string | undefined;
  categorieClient: string | undefined;
  invoices: Invoice[] | undefined;
}
