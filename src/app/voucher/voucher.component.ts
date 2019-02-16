import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  
  purposeSelect: Array<{label: string, value:string}>;
  voucherData : Array<{
                id: string;
                date: string;
                paidto: string;
                purpose: string;
                amount: string;
                description: string;
  }>;
  amountTxt='';
  constructor() { 

         this.purposeSelect = [
           { label : "-- Select -- ", value: "" },
           { label : "Expense", value: "Exp" },
           { label : "Salary Advance", value: "Adv" },
           { label : "Other", value: "Oth" }
          
          ];

          this.voucherData = [
            {     id: "1", date: "15 Feb 2019", paidto: "Rajesh", purpose: "Salary Advance" , amount: "3000",  description: " Salary Advance" },
            {     id: "2", date: "15 Feb 2019", paidto: "Girish", purpose: "Expense" , amount: "1000",  description: " Function" },
            {     id: "3", date: "15 Feb 2019", paidto: "Rajesh", purpose: "Expense" , amount: "1000",  description: " Function" },
            {     id: "4", date: "15 Feb 2019", paidto: "Girish", purpose: "Expense" , amount: "1000",  description: " Function" },
            {     id: "5", date: "15 Feb 2019", paidto: "Girish", purpose: "Expense" , amount: "1000",  description: " Function" },
            {     id: "6", date: "15 Feb 2019", paidto: "Girish", purpose: "Expense" , amount: "1000",  description: " Function" },
          ];
  }

  ngOnInit() {
  }

toText(event :any)
{
 


  }


  


}
