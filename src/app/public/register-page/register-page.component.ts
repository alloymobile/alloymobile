import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/shared/alloymobile-library/ogranism/register/register.model';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  client: Register;
  constructor(private accountService: AccountService
    , private router: Router
    , private dataService: DataService) {
    this.client = new Register();
   }

  ngOnInit(): void {
  }

  onRegister(client: Register){
    this.accountService.registerUser(client).subscribe(res=>{
      console.log(res);
      this.client.showSpinner=false;
    });
  }
}
