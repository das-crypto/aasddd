import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-add-new-account',
  templateUrl: './add-new-account.component.html',
  styleUrls: ['./add-new-account.component.css']
})
export class AddNewAccountComponent implements OnInit {

  account: Account=new Account();

  constructor(private dataService: DataServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAccount(){
    this.dataService.createAccount(this.account).subscribe(data=> {
      console.log(data);
      this.goToAccountList();
    });
  }

  goToAccountList(){
    this.router.navigate(['/customer-list']);
  }

  onSubmit(){
    this.saveAccount();
  }

}
