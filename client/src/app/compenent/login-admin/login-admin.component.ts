import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  errortk: any;
  errormk: any;
  constructor(
    private d: ClientService,
    private _router: Router,
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) { }


  public admin = this.fb.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })
  ngOnInit() {
  }


  onSubmit(): void{
    console.log(this.admin.value);
    
    this.d.loginAdmin(this.admin.value).subscribe((res: any) =>{
      if(res.errortk ){
        alert(res.errortk); 
      }else if(res.errormk){
        alert(res.errormk); 
      }else if(res.token !== undefined){
        let token = res.token;
        this.d.setTokenAd(token);
        alert('Đăng nhập thành công');
        this._router.navigate(['/admin']);
      }
    })
  }


}
