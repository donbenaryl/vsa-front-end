import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IUser } from 'src/types/AuthTypes';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  isLoading = true;

  dataSource: IUser[] = []

  displayedColumns = ['id', 'email', 'operation'];

  constructor(
    private authService: AuthService
  ) {
    this.fetch_users()
  }

  fetch_users = () => {
    this.authService.fetchUsers()
      .subscribe(
        (res) => {
          this.dataSource = res;
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
        }
      )
  }

  change_password = (id: number) => {
  };
}
