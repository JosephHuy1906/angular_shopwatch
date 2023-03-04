import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private d: HttpClient,
    private _router: Router
    ) { }


  public getAllCate() {
    return this.d.get('http://localhost:3000/category')
  }
  public getCateId(id: any) {
    return this.d.get('http://localhost:3000/category/' + id);
  }
  public setCate(data: any) {
    return this.d.post('http://localhost:3000/category/', data)
  }
  public putCate(data: any, id: any) {
    return this.d.put('http://localhost:3000/category/' + id, data)
  }
  public removeCate(id: any) {
    return this.d.delete('http://localhost:3000/category/' + id);
  }


  public getAllProduct() {
    return this.d.get('http://localhost:3000/apiproduct/');
  }
  public getProductById(id: any) {
    return this.d.get('http://localhost:3000/apiproduct/' + id);
  }
  public setproduct(data: any) {
    return this.d.post('http://localhost:3000/apiproduct/', data)
  }
  public removeProduct(id: any) {
    return this.d.delete('http://localhost:3000/apiproduct/' + id)
  }
  public putproduct(data: any, id: any) {
    return this.d.put('http://localhost:3000/apiproduct/' + id, data)
  }


  public getAllUser() {
    return this.d.get('http://localhost:3000/user')
  }

  public createAdmin(data: any){
    return this.d.post('http://localhost:3000/user/createadmin', data);
  }
  
  public getUserId(id: any){
    return this.d.get('http://localhost:3000/user/'+ id);
  }
  public getRole(){
    return this.d.get('http://localhost:3000/user/get/role');
  }
  public getAdmin(){
    let token = localStorage.getItem('tokenAd')
    return this.d.get('http://localhost:3000/user/loginad/'+token)
  }
  public updateRole(data: any, id: any){
    return this.d.put('http://localhost:3000/user/update/role/'+id , data)
  }
  public setRole(){
    return localStorage.getItem('role');
  }
  public removeTokenAd(){
    localStorage.removeItem('tokenAd')
  }
  public logout() {
    this.removeTokenAd()
    localStorage.removeItem('role')
    alert('Đăng Xuất Thành Công')
    this._router.navigate(['/loginadmin']);
  }
  public getAllOder(){
    return this.d.get('http://localhost:3000/oders/');
  }
  public putOderId(id: any, data: any){
    return this.d.put('http://localhost:3000/oders/edit/'+id, data);
  }
  public getOderId(id: any){
    return this.d.get('http://localhost:3000/oders/oderId/'+id);
  }

  public getOderDetailId(id: any){
    return this.d.get('http://localhost:3000/oderdetai/'+id);
  }
}
