import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  cate: any
  constructor(
    private fb: FormBuilder,
    private d: AdminService,
    private _router: Router
  ) {
    this.d.getAllCate().subscribe(data => {
      this.cate = data
    })
  }

  public createProductForm = this.fb.group({
    avatar: ['', [Validators.required]],
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    categoryId: ['', [Validators.required]],
    describe: ['', [Validators.required]]
  })
  ngOnInit() {
  }
  onSubmit(): void {
    console.log(this.createProductForm.value);

    this.d.setproduct(this.createProductForm.value).subscribe(data => alert('Thêm thành công'));
    this._router.navigate(['/admin/product/'])
  }

}
