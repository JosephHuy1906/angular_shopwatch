import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dem: any
  cart = faCartShopping
  constructor(private d: ClientService) { 
    let post: any = localStorage.getItem("cart")
    var cart = JSON.parse(post);
     
    if(cart){
      this.dem = cart.length;
      console.log(this.dem);
    }
    
  }

  sp: any;
  ngOnInit() {
    this.d.getCategory().subscribe(data => this.sp = data)
  }

}
