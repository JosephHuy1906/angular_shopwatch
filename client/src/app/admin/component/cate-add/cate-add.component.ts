import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cate-add',
  templateUrl: './cate-add.component.html',
  styleUrls: ['./cate-add.component.css']
})
export class CateAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private d: AdminService,
    private _router: Router
  ) { }

  public createCateForm = this.fb.group({
    name: ['', [Validators.required]]
  })

  ngOnInit() {
  }
  spthem(){
    var sp = this.createCateForm.value;
    console.log(sp)
    this.d.setCate(sp).subscribe ( data => alert('Thêm thành công'));
    this._router.navigate(['/admin/category/'])
  }
  
}
