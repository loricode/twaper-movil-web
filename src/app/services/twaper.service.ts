import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from './header.service';
import { Observable } from 'rxjs';

@Injectable({
   providedIn:'root'
})
export class TwaperService{
   
   baseUrl:string = ""

   constructor(
      private _http:HttpClient,
      private headerService:HeaderService ){}

   public setBaseUrl(apiUrl:string){
      this.baseUrl = apiUrl
   }         

   public get(path:string):Observable<any>{
      return this._http.get(this.baseUrl + path, {
         headers:this.headerService.httpHearder()
      })
   }
  
   public post(path:string, obj?:any):Observable<any>{
     return this._http.post(this.baseUrl + path, obj, {
        headers:this.headerService.httpHearder()
      })
   }
  
   public put(path:string, obj?:any):Observable<any>{
     return this._http.post<any>(this.baseUrl + path, obj, {
        headers:this.headerService.httpHearder()
     })
  }

}