import { Component, OnInit } from '@angular/core';


import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
    alert(this.auth.Logged);
  }

  loggOut() {
    alert('Logged Out !!!');
    this.auth.Logged = false;
  }

}
