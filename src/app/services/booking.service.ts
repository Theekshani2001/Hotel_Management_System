import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  public saveBooking(customer: Object, date: Date, totalCost: Number, rooms:any []): Observable<any>{
    return this.http.post('http://localhost:3001/api/v1/orderRoute/place-order',{
      customer: customer,
      date: date,
      totalCost: totalCost,
      rooms: rooms
    });
  }

}
