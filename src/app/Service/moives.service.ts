import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoivesService {

  constructor(public http:HttpClient) { }
  baseUrl="https://localhost:44385/api/Movies"




  insertMoive(formModel: any  ) {

    return this.http.post(this.baseUrl + "/SaveMovies" ,formModel,{withCredentials:true});
  }




  GetTop3Moive( ) {

    return this.http.get(this.baseUrl );
  }
}
