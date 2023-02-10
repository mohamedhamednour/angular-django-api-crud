import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpOptions : any

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  getAllData() : Observable<any> {
    return this.http.get<any>(environment.apiUrl);
  }
  getAllDatabyid(id:any) {
    return this.http.get(environment.apiUrl+id);
  }
  deletePost(idx:any):Observable<any> {
    return this.http.delete<any>(environment.apiUrl+idx);
  }
  updateproduct(data:any , idx:any):Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}${idx}/`  , data , this.httpOptions)
    .pipe(
      retry(2),
      catchError((err)=>{
        return throwError (()=> new Error('update error' , err))
      })
    );
  }
  postproduct(data:any) {
    return this.http.post(environment.apiUrl  , data , this.httpOptions)
    .pipe(
      retry(2),
      catchError((err)=>{
        return throwError (()=> new Error('post error'))
      })
    );
  }
}
