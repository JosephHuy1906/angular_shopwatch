import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  sp = {
    'avatar': '',
    'productId':1,
    'name': '',
    'price': 1,
    'categoryId': 1,
    'describe': ''
  }
  cate: any
  constructor(
    private d: AdminService,
    private fb: FormBuilder,
    private _router: Router,
    private router: ActivatedRoute
  ) { 
    this.router.paramMap.subscribe( qr =>{
      let id = qr.get('id');
      this.d.getProductById(id).subscribe( data => {
        let [productDetail]: any = data
        console.log(productDetail);
        
        this.sp = productDetail
      })
    })

    this.d.getAllCate().subscribe(data =>{
      this.cate = data
    })
  }
  public editProductForm = this.fb.group({
    avatar: ['',[Validators.required]],
    productId: ['',[Validators.required]],
    name: ['',[Validators.required]],
    price: ['',[Validators.required]],
    categoryId: ['',[Validators.required]],
    describe: ['',[Validators.required]]
  })

  ngOnInit() {
  }
  onSubmit(): void{
    this.router.paramMap.subscribe(qr =>{
    
      
      let id = qr.get('id');
      console.log(id);
      
      this.d.putproduct(this.editProductForm.value, id).subscribe(res =>{
          alert('Cập nhập thành công');
          this._router.navigate(['/admin/product/'])
        })
    })
  }

}
