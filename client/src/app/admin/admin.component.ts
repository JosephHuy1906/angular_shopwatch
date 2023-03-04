import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  admin: any;
  constructor(private d: AdminService){
    this.d.getAdmin().subscribe(data =>{
      console.log(data);
      this.admin = data
    })
    if(localStorage.getItem('tokenAd')){
      this.d.getAdmin().subscribe((data: any) =>{
        const role = data.role;
        localStorage.setItem('role',role);
        console.log(data);
      })
    }
 
  }

  ngOnInit(): void {
    
  }

}
