import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-login-repass',
  templateUrl: './login-repass.component.html',
  styleUrls: ['./login-repass.component.css']
})
export class LoginRepassComponent implements OnInit {
  err: any;

  constructor(
    private fb: FormBuilder,
    private d: ClientService,
    private _router: Router
  ) { }

  public userFrom = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  public loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  ngOnInit() {
  }

  regin(): void {
    this.d.createUser(this.userFrom.value).subscribe(res => {
      alert('Đăng Ký tài khoản thành công');
      location.reload();
    })
  }


  login(): void {
    this.d.loginUser(this.loginForm.value).subscribe((res: any) => {
      if (res.error) {
        alert(res.error)
      } else {
        let token = res.token;
        this.d.setToken(token)
        alert('Đăng nhập thành công');
        this._router.navigate(['/profile']);
      }


    })
  }

}
