import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { ProvidersService } from 'src/app/services/providers.service';
import { ActivatedRoute } from '@angular/router';


import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { Fournisseur } from 'src/app/models/fournisseur';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
 
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  QUINCAILLERIE: number; 
  ALIMENTAIRE : number ; 
  ELECROMENAGER: number ;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  

  constructor(private PS: ProvidersService, private ac: ActivatedRoute) { 
    this.PS.countFournisseurByCat("ALIMENTAIRE").subscribe((res) => (this.ALIMENTAIRE = res));
    this.PS.countFournisseurByCat("QUINCAILLERIE").subscribe((res) => (this.QUINCAILLERIE = res));
    this.PS.countFournisseurByCat("ELECROMENAGER").subscribe((res) => (this.ELECROMENAGER = res));
   }
  
   
  
  ngOnInit(): void {
    

    
}
showProduit() {
      
  this.chartOptions = {
    //  series: [this.quincaillerie,this.alimentaire,this.electromenager],
    series: [this.QUINCAILLERIE, this.ALIMENTAIRE, this.ELECROMENAGER],  
    chart: {
        width: 450,
        type: "pie"
      },
      labels: ["QUINCAILLERIE", "ALIMENTAIRE", "ELECTROMENAGER"],
      
      responsive: [
        {
          breakpoint: 480,
          options: {
            
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
   }
}
