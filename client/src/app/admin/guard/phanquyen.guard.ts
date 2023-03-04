import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';

@Injectable({
  providedIn: 'root'
})
export class PhanquyenGuard implements CanActivate {
  role: number = 0
  constructor(
    private d: AdminService,
    private _router: Router
  ){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const role = this.d.setRole();
    if(role !== '1'){
      alert('Bạn không đủ thẩm quyền');
      // this._router.navigate(['/admin'])
      return false
     }else{
       return true
     }
  }

  
  
}
