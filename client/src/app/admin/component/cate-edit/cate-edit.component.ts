import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-cate-edit',
  templateUrl: './cate-edit.component.html',
  styleUrls: ['./cate-edit.component.css']
})
export class CateEditComponent implements OnInit {

  cate: any
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private d: AdminService,
    private router: ActivatedRoute
  ) { 
    this.router.paramMap.subscribe(qr =>{
      let id = qr.get('id');
      this.d.getCateId(id).subscribe(data =>{
        const [cateDetail]: any = data;
        this.cate = cateDetail
      })
    })
  }
  public editCateForm = this.fb.group({
    categoryId: ['',[Validators.required]],
    name: ['',[Validators.required]]
  })

  ngOnInit() {
  }
  onSubmit(): any{
    this.router.paramMap.subscribe(qr =>{
      let id = qr.get('id');
      console.log(id);
      
      this.d.putCate(this.editCateForm.value, id).subscribe(res =>{
        this._router.navigate(['/admin/category/'])
        })
    })
   
  }
}
