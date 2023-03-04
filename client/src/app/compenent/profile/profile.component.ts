import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any
  oder: any;
  oderDetail: any
  detail: any
  see = faEye
  product = {
    name: '',
    avatar: ''
  }
  statusName: any;
  constructor(
    private d:ClientService
  ) {
    const us = localStorage.getItem('tokenUS');
    
    this.d.getDataToken(us).subscribe((data: any) =>{
      let usid = data.userId
      this.d.getUserId(usid).subscribe(data =>{
        let [us]: any = data;
        this.user = us;
      })
      
      this.d.getOder(usid).subscribe( (d: any) =>{
        this.oder = d
      })
    })
    
   }

   showOder(id: number){
    console.log(id);
    
    this.d.getOderDetailById(id).subscribe((dt: any) => {              
      // data = dt           
      console.log(dt);  
      this.detail = dt                
    });
   }

  
  ngOnInit() {
    
  }
  logout(){
    this.d.loggout()
  }

}
