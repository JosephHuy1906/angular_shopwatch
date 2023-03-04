import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faFacebook,faInstagram, faTwitter, faWhatsapp, faPinterest,  } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  detail = {
    "productId": '',
    "name": '',
    "price": 0,
    "mota": "",
    "images": 0,
    "avatar": "",
    "categoryId": 1
  }
  img:any
  facebook = faFacebook;
  inta = faInstagram;
  twiter = faTwitter;
  whatsapp = faWhatsapp;
  pinter = faPinterest;
  star = faStar;
  cart = faCartArrowDown;

  constructor(
    private d: ClientService,
    private _router: Router,
    private fb: FormBuilder,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(query => {
      let id = query.get('id');
      console.log(id);
      this.d.getProductById(id).subscribe(data => {
        const [productDetail]: any = data;
        this.detail = productDetail;
        let images = this.detail.images
        console.log('imgID: ',images);

        this.d.getImg(images).subscribe(data =>{
          console.log(data);
          this.img = data
        })
      });
    })
  }


 


  ngOnInit() {

  }


}
