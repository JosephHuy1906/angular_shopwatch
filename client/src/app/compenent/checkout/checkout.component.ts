import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  sp: any;
  total: number;
  user: any;
  userId: number = 0;
  currentDateTime: string = "";
  constructor(
    private d: ClientService,
    private fb: FormBuilder,
    public date: DatePipe,
    private _router: Router
  ) {
    const getcart: any = localStorage.getItem("cart");
    const cart = JSON.parse(getcart);
    this.sp = cart
    console.log(cart);
    const tinh = cart.reduce((sp: any, item: any) =>
      sp + item.total, 0
    )
    this.total = tinh;

    const us = localStorage.getItem('tokenUS');
    console.log(us);
    this.d.getDataToken(us).subscribe((data: any) => {
      let usid = data.userId
      this.userId = usid
      console.log(us);
      console.log(usid);
      this.d.getUserId(usid).subscribe(data => {
        let [us]: any = data;
        this.user = us;
        console.log(us);
      })
    })
  }
  public checkoutForm = this.fb.group({
    price: ['', [Validators.required]],
    userId: ['', [Validators.required]],
    date_creat: [this.date.transform((new Date), 'MM/dd/yyyy h:mm:ss'), [Validators.required]],
    statusId: [1, [Validators.required]],
  })
  public userForm = this.fb.group({
    fullName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  })
  public oderForm = this.fb.group({

  })

  ngOnInit() {

  }


  checkout() {
    console.log(this.checkoutForm.value);

    this.d.updateUser(this.userForm.value,this.userId).subscribe(data =>{
    })

    this.d.setOder(this.checkoutForm.value).subscribe((data: any) => {
      let oderId = data.insertId;
      let getcart: any = localStorage.getItem("cart");
      let cart = JSON.parse(getcart);

      cart.forEach((el: any) => {

        let detail = {
          productId: el.id,
          name: el.name,
          image: el.image,
          quantity: el.quatity,
          price: el.price,
          oderId: oderId
        }
        this.d.setOderDetail(detail).subscribe(d => {
          localStorage.removeItem('cart')
          this._router.navigate(['/'])
        })
      })
    })

  }
}
