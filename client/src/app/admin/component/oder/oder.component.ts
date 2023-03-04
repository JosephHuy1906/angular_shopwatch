import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css']
})
export class OderComponent implements OnInit {

  add = faAdd;
  edit = faEdit;
  oder: any;
  user: Array<any> = [];
  constructor(
    private d: AdminService,
    private _router: Router,
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.d.getAllOder().subscribe((data: any) => {
      this.oder = data
      console.log(data);

      data.forEach((el: any) => {
        let userId = el.userId;
        let oderId = el.oderId

        // this.d.getOderDetailId(oderId).subscribe(d => {
        //   const [destructuring]: any = d;
        //   this.user?.push(destructuring);
        //   console.log(this.user)
        // })
      });
    })
  }

  public oderForm = this.fb.group({
    date_creat: ['', [Validators.required]],
    price: ['', [Validators.required]],
    userid: ['', [Validators.required]],
    statusId: ['', [Validators.required]]
  })

  ngOnInit() {

  }

}
