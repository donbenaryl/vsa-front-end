import { Component } from '@angular/core';
import { INav } from 'src/types/NavTypes';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  activelink = '';

  navLinks: INav[] = [{
    link: "/users",
    label: "Users"
  },{
    link: "/users/register",
    label: "Add User"
  },{
    link: "/users/change-password",
    label: "Change Password"
  }];

  constructor(
    private route:  ActivatedRoute,
    private router:  Router
  ) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.check_router() )
    // router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.scrollTo() )
  }

  check_router = () => {
    this.activelink = this.router.url;
  }

}
