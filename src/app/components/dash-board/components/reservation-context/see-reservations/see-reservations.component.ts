import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../../../../services/reservation.service";

@Component({
  selector: 'app-see-reservations',
  templateUrl: './see-reservations.component.html',
  styleUrls: ['./see-reservations.component.scss']
})
export class SeeReservationsComponent implements OnInit {

  reservations:any[]=[];

  constructor(private _service: ReservationService) { }

  ngOnInit(): void {
    this._service.getAllReservations().subscribe(respose=>{
      this.reservations = respose.data;
    }, error => {
      console.log(error);
    })
  }

}
