import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any;
  role: any;
  public editUser = this.fb.group({
    username: ['',[Validators.required]],
    fullName: ['',[Validators.required]],
    roleId: ['',[Validators.required]]
  })
  constructor(
    private fb: FormBuilder,
    private d: AdminService,
    private _router: Router,
    private router: ActivatedRoute
  ) { 
    this.router.paramMap.subscribe(req =>{
      let id = req.get('id');
      this.d.getUserId(id).subscribe(data =>{
        let [us]: any = data       
        this.user = us
      })
      
      
    })
    this.d.getRole().subscribe(data =>{
      console.log(data);
      this.role = data;
    })
  }

  ngOnInit() {
  }
  
  onSubmit() : void{
    console.log(this.editUser.value);
    this.router.paramMap.subscribe(req =>{
      let id = req.get('id');
      this.d.updateRole(this.editUser.value, id).subscribe(data =>{
        alert('Cập nhập Thành công');
        this._router.navigate(['/admin/user']);
      })
      
      
    })
  }

}
