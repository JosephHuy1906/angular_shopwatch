import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  role: any;
  constructor(
    private d: AdminService,
    private fb: FormBuilder,
    private _router: Router,
    private router: ActivatedRoute
  ) { 
    this.d.getRole().subscribe(data =>{
      this.role = data;
    })
  }

  public addAdmin = this.fb.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]],
    roleId: ['',[Validators.required]]
  })
  ngOnInit() {
  }
  add(): void{
    this.d.createAdmin(this.addAdmin.value).subscribe(data =>{
      alert('Tạo tài khoản thành công')
    })
  }

}
