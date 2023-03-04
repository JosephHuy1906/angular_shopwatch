import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(
    private h: HttpClient,
    public router: Router
  ) { }


  public getProductMain() {
    return this.h.get('http://localhost:3000/apiproduct/ramdom');
  }
  public getProduct() {
    return this.h.get('http://localhost:3000/apiproduct/');
  }
  public getProductCate1() {
    return this.h.get('http://localhost:3000/apiproduct/cate1');
  }
  public getProductCate2() {
    return this.h.get('http://localhost:3000/apiproduct/cate2');
  }
  public getProductCate3() {
    return this.h.get('http://localhost:3000/apiproduct/cate3');
  }
  public getProductBest() {
    return this.h.get('http://localhost:3000/apiproduct/best');
  }

  public getCategory() {
    return this.h.get('http://localhost:3000/category/');
  }
  getProductById(id: any) {
    return this.h.get('http://localhost:3000/apiproduct/' + id);
  }
  public getImg(idimg: any) {
    return this.h.get('http://localhost:3000/apiproduct/img/' + idimg);
  }


  public createUser(data: any) {
    return this.h.post('http://localhost:3000/user/create', data)
  }
  public loginUser(data: any) {
    return this.h.post('http://localhost:3000/user/login', data)
  }
  public loginAdmin(data: any) {
    return this.h.post('http://localhost:3000/user/loginAd', data)
  }
  public getUserId(id: any){
    return this.h.get('http://localhost:3000/user/'+ id);
  }

  public getDataToken(token: any){
    return this.h.get('http://localhost:3000/user/profile/'+token);
  }

  public setToken(token: string) {
    localStorage.setItem('tokenUS', token);
  }
  public removeToken() {
    localStorage.removeItem('tokenUS')
  }
  public getToken() {
    return localStorage.getItem('tokenUS');
  }
  public getTokenAd() {
    return localStorage.getItem('tokenAd');
  }
  public getAdmin(id: any) {
    return this.h.post('http://localhost:3000/admin/',id)
  }
  public setTokenAd(token: string) {
    localStorage.setItem('tokenAd', token);
  }
  public isloggedIn() {
    return this.getToken() == null;
  }

  public isloggedInAd() {
    return this.getTokenAd() == null;
  }

  public updateUser(data: any, id: any){
    return this.h.put('http://localhost:3000/user/update/user/'+id, data);
  }

  public loggout() {
    this.removeToken();
    alert('Bạn đã Đăng Xuất');
    this.router.navigate(['/']);
  }
  public isloginUS(){
    return this.getToken() !== null
  }

  public setOder(data: any){
    return this.h.post('http://localhost:3000/oders/',data);
  }
  public setOderDetail(data: any){
    return this.h.post('http://localhost:3000/oderdetai/create',data);
  }
 

  public getOder(id: number){
    return this.h.get('http://localhost:3000/oders/'+id);
  }
  public getOderDetailById(id: number){
    return this.h.get('http://localhost:3000/oderdetai/'+id)
  }
  public getStatus(id: number){
    return this.h.get('http://localhost:3000/oders/status/'+id);
  }
}
