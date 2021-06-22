import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  viewCustomer:boolean =false;
  createdAccount:boolean=false;
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  viewCustomerList()
  {
    this.viewCustomer = true;
    this.createdAccount=false;
    console.log('Customer viewed');
  }
  createAccount(){
    this.viewCustomer=false;
    this.createdAccount=true;
  }

}
