import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-main-customers',
  templateUrl: './main-customers.component.html',
  styleUrls: ['./main-customers.component.css']
})
export class MainCustomersComponent implements OnInit {
  list:Client[]= [];
  listInitial: Client[]= [];
  customer: Client;
  show : Boolean = false;
  p: number = 1;
  closeResult='';
  searchText:any;

  public chartOptions;

  public doughnutChartLabels: any[] = [];
  public doughnutChartData: any = [];
  public typeData: Array<Client> = [];
  constructor(private cs:CustomerService,private modalService: NgbModal ,private ac:ActivatedRoute,private router: Router)
  {

  }



  ngOnInit(): void {
    this.cs.getAllCustomersFromDB().subscribe(res=> {this.list = res,
      this.listInitial=this.list;


     console.log(this.list);
     for(let k in this.list){
      console.log("client "+k+" : "+this.list[k].idClient);
    }
    //charts
   /* this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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
    };  */


    })


  }


  getCustomerByCategory(cat:string){
    this.cs.getCustomerByCategory(cat).subscribe(res=> {this.list = res,
      this.listInitial=this.list;
     console.log(this.list);
      })
  }


  getAll(){/*
    this.cs.getAllCustomersFromDB().subscribe(res=> {this.list = res,
      this.listInitial=this.list;
     console.log(this.list);
      }) */
      location.reload();
  }
  getCustomerByProfession(profession:string){
    this.cs.getCustomerByProfession(profession).subscribe(res=> {this.list = res,
      this.listInitial=this.list;
     console.log(this.list);
      })
  }

  deleteCustomer(id:number,i:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
    console.log(id);
    this.cs.deleteCustomer(id).subscribe();
    this.list.splice(i,1);
    Swal.fire(

      'Removed!',
      'Customer removed successfully.',
      'success'
    )
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'Customer still in our database.)',
      'error'
    )
  }
})

}




  showEdit(i:Client){
    this.show = true;
    this.customer=i;
  }


  updateCustomer(i:Client)
  {
for(let k in this.list)

  if(this.list[k].idClient == i.idClient)
  {
    this.list[k]=i;
    this.show = !this.show;
  }
}

open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
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
