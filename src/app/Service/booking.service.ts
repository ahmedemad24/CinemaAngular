import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(public http:HttpClient) { }
  baseUrl="https://localhost:44385/api/Booking"



  getAllTimes() {
    return this.http.get<any[]>(this.baseUrl + "/GetTimes"  );
  }


  getAllHalls() {
    return this.http.get<any[]>(this.baseUrl + "/GetHalls"  );
  }
}
