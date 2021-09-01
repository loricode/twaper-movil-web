import { Injectable } from '@angular/core';
import { TwaperService } from '../twaper.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/interfaces/user/user.interface';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private twaperService:TwaperService) {
    this.twaperService.setBaseUrl(environment.baseUrl)
  }
  
  public getPrueba():Observable<any>{
    return this.twaperService.get("/instagram/list-services")
  }

  public login(user:User){
    return this.twaperService.post("/instagram/login", user)
  }

}