import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public _url="http://localhost:3000/mcq";
  constructor(private http:HttpClient) { }

  getQuestions():Observable<any[]>{
    return this.http.get<any[]>(`${this._url}`);
  }
}
