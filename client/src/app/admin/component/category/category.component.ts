import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { faTrashCan, faPlusSquare, faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cate:any;
  add = faPlusSquare;
  faremove = faTrashCan;
  edit = faEdit
  constructor(private d:AdminService) { 
    this.d.getAllCate().subscribe(data=>this.cate=data)
  }


  ngOnInit() {
  }

  xoaCate(id: any){
    if (confirm('Bạn có muốn xoá không?') == true) {
      this.d.removeCate(id).subscribe(data => location.reload())
    }
  }
}
