import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/alloymobile-library/ogranism/login/login.model';
import { IconBar } from 'src/app/shared/alloymobile-library/tissue/icon-bar/icon-bar.model';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import loginPageDB from './login-page.data.json'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  client: Login = new Login();
  iconBar: IconBar[] = [];
  constructor(private accountService: AccountService
    , private router: Router
    , private dataService: DataService) {
      this.iconBar = loginPageDB.map((iconBar: IconBar)=>new IconBar(iconBar));
  }

  ngOnInit(): void {
  }

  onLogin(client: Login){
    this.accountService.loginUser(client).subscribe(res=>{
      this.dataService.nextClient(res);
      this.client.showSpinner=false;
      this.router.navigate(['/admin']);
    });
  }

  onIconClicked(icon: IconBar){
    console.log(icon);
  }
}
