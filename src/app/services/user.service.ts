import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/models.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UserService {


  url = "http://localhost:3000/signin"

  constructor(
    private httpClient: HttpClient
  ) { }

  sigin(user: User):Observable<any>{
    return this.httpClient.post(
      this.url,             
      JSON.stringify(user), 
      {                     
        headers: new HttpHeaders({"Content-Type": "application/json"}),
        observe: 'response'
      } 
    )
  }
}
