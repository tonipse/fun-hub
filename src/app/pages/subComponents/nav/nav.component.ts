import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../common/modelsAndServices/_services/accountService/account.service';
import { User } from '../../../common/modelsAndServices/_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
