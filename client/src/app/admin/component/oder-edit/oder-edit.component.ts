import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oder-edit',
  templateUrl: './oder-edit.component.html',
  styleUrls: ['./oder-edit.component.css']
})
export class OderEditComponent implements OnInit {

  oder: any
  constructor(
    private fb: FormBuilder,
    private d: AdminService,
    private _router: Router,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(req =>{
      let id = req.get('id');
      this.d.getOderId(id).subscribe(data => {
        let [d]: any  = data
        this.oder = d
      })
    })
   }

  public oderEditForm = this.fb.group({

  })

  ngOnInit() {
  }
  onSubmit(){

  }

}
