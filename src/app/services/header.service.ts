import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  public httpHearder(){
    let token:string = localStorage.getItem('token') || '';
    if(token === ''){
     return {}
    }
    let headers = new HttpHeaders({'Accept':'application/json', 'Authorization':'Bearer '+token })
    return headers;
  }
}
