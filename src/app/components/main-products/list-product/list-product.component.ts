import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  produits:Produit[];
  closeResult: string;

  constructor(
    private ac:ActivatedRoute ,
    private ps:ProduitService,
    private router: Router,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(){
    this.ps.findAllProduits().subscribe((p)=>this.produits=p);
  }

  deleteProduit(idProduit: number, index: number){
    this.produits.splice(index, 1);
    this.ps.deleteProduit(idProduit).subscribe(() => {}, (error) => {console.log(error)});
  }

  open(content,idProduit: number, index: number) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result === 'yes') {
        this.deleteProduit(idProduit,index);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
