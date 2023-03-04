import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { faTrashCan, faPlusSquare, faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  sp: any
  add = faPlusSquare;
  faremove = faTrashCan;
  edit = faEdit;
  role: any
  constructor(private d: AdminService) { 
    this.d.getAllProduct().subscribe(data => this.sp = data)
    let roleId = localStorage.getItem('role');
    this.role = roleId;
  }

  ngOnInit() {
  }

  remove(id: any): void{
    if (confirm('Bạn có muốn xoá không?') == true) {
      this.d.removeProduct(id).subscribe(data => location.reload())
      
    }
  }
}
