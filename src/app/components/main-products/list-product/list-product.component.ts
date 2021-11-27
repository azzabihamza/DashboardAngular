import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  produits:Produit[];

  constructor(private ac:ActivatedRoute , private ps:ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(){
    this.ps.findAllProduits().subscribe((p)=>this.produits=p);
  }

}
