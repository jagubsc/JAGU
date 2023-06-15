import { Component } from '@angular/core';

@Component({
  selector: 'app-bill', 
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {


  public isVisible : boolean = false;
  public products = [
    {id:1001, name:"Ice", price:50, count:5, total:250},
    {id:1002, name:"Rice", price:55, count:3, total:165},
    {id:1003, name:"Biscuit", price:10, count:10, total:100},
    {id:1004, name:"juice", price:20, count:2, total:40},
    {id:1005, name:"magic", price:40, count:5, total:200},
  ]

}
