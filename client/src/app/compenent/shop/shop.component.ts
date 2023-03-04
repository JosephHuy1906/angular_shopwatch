import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  sp: any
  best: any
  facart = faCartArrowDown;
  fasee = faEye;
  faHeart = faHeart
  constructor(private d: ClientService) { }

  ngOnInit() {
    this.d.getProduct().subscribe(data => this.sp = data)
    this.d.getProductCate3().subscribe(data => this.best = data);
  }
  onClick(productId: any){
    this.d.getProductById(productId).subscribe(data => {
      const [sp]: any = data;

      let carts: any = {
        id: sp.productId, 
        name: sp.name, 
        price: sp.price, 
        image: sp.avatar,
        quatity: 1,
        total: sp.price
      }
      console.log(carts);
      
      let post: any = localStorage.getItem("cart")
      var cart = JSON.parse(post);
      if (cart == null) {
        cart = [];
        cart.push(carts);
      } else {
        let item = cart.find((item: any) => item.id === sp.productId);
        if (item) {
          item.quatity++;
          item.total = item.price * item.quatity
        }
        else
          cart.push(carts);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Đã thêm vào giỏ hàng');
      location.reload()
    })

  }


}
