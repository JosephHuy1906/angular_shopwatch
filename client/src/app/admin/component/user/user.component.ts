import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { faEdit,faPlusSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;
  edit = faEdit;
  add= faPlusSquare;
  constructor(private d:AdminService) { 
    this.d.getAllUser().subscribe(data=>this.user=data)
  }

  ngOnInit() {
  }

}
