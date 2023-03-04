import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cate: any
  proRamdom: any
  cate1: any
  cate2: any
  cate3: any

  constructor(private d: ClientService) { }

  ngOnInit() {
    this.d.getCategory().subscribe(data => this.cate = data);
    this.d.getProductMain().subscribe(data => this.proRamdom = data);
    this.d.getProductCate1().subscribe(data => this.cate1 = data);
    this.d.getProductCate2().subscribe(data => this.cate2 = data);
    this.d.getProductCate3().subscribe(data => this.cate3 = data);
  }
  onClick(productId: any): void {
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
