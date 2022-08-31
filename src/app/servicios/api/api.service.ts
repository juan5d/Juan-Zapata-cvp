import { observable } from './../../../../node_modules/@angular-devkit/build-angular/node_modules/inquirer/node_modules/rxjs/src/internal/symbol/observable';
import { Injectable } from '@angular/core';
import { userInterface } from 'src/app/modelos/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string="https://gorest.co.in/public/v2/"
  constructor(private http:HttpClient) { }

  createUser(form:userInterface):Observable<any>{
    let path=this.url+"users"
    return this.http.post<any>(path,form);
  }

  getUser(id: string):Observable<userInterface>{
    let path= this.url+"users"+id;
    return this.http.get<userInterface>(path);
  }

  getAllUser():Observable<userInterface[]>{
    let path= this.url+"users";
    return this.http.get<userInterface[]>(path);
  }
}
