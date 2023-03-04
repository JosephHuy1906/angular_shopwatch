import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  sp: any;
  total: number = 0
  constructor() { }

  ngOnInit() {
    const getcart: any = localStorage.getItem("cart");
    const cart = JSON.parse(getcart);
    this.sp = cart
    console.log(cart);
    const tinh = cart.reduce((sp: any, item: any) =>
      sp + item.total, 0
    )
    this.total = tinh;

  }

  onDelete(item: number): void {
    let getSP: any = localStorage.getItem("cart");
    let cart = JSON.parse(getSP);
    if (confirm("Bạn có muốn xoá sản phẩm này không") == true) {
      cart.splice(item, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    location.reload();
  }

  next(id: number) {
    let post: any = localStorage.getItem("cart")
    var cart = JSON.parse(post);
    let item = cart.find((item: any) => id === item.id);
    if(item){
      item.quatity ++;
      item.total = item.price * item.quatity;
    }
    console.log(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload()
  }


  prev(id: number){
    let post: any = localStorage.getItem("cart")
    var cart = JSON.parse(post);
    let item = cart.find((item: any) => id === item.id);
    if(item){
      item.quatity --;
      item.total = item.price * item.quatity;
      console.log(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      location.reload()
    }

  }
}
