/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }
}*/
import {Injectable} from '@angular/core';
import ReservationDTO from "../dto/ReservationDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {
  }

  public saveReservation(dto: ReservationDTO): Observable<any> {
    return this.http.post('http://localhost:3001/api/v1/reservationRoute/saveReservation', {
      id: dto.id,
      name: dto.name,
      address: dto.address,
      contact: dto.contact,
      checkin:dto.checkin,
      checkout:dto.checkout,
      visitors:dto.visitors
    })
  }

  public updateReservation(dto: ReservationDTO): Observable<any> {
    return this.http.put('http://localhost:3001/api/v1/reservationRoute/updateReservation', {
      id: dto.id,
      name: dto.name,
      address: dto.address,
      contact: dto.contact,
      checkin:dto.checkin,
      checkout:dto.checkout,
      visitors:dto.visitors
    })
  }

  public deleteReservation(id: string): Observable<any> {
    return this.http.delete('http://localhost:3001/api/v1/reservationRoute/deleteReservation', {
      headers:{id}
    })
  }

  public searchReservation(id: string): Observable<any> {
    return this.http.get('http://localhost:3001/api/v1/reservationRoute/getReservation', {
      headers:{id}
    })
  }

  public getAllReservations(): Observable<any> {
    return this.http.get('http://localhost:3001/api/v1/reservationRoute/getAllReservations')
  }

}
