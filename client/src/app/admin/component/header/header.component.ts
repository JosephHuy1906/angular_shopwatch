import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { faHome, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fahome = faHome;
  falogout =faPowerOff;
  constructor(
    private d: AdminService
  ) { }

  ngOnInit() {
  }
  logout(): void{
    this.d.logout()
  }

}
