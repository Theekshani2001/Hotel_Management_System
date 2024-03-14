import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../../../../services/reservation.service";

@Component({
  selector: 'app-see-reservation',
  templateUrl: './see-reservation.component.html',
  styleUrls: ['./see-reservation.component.scss']
})
export class SeeReservationComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  dataSet:any;

  search(id: string) {
    this.reservationService.searchReservation(id).subscribe(response=>{
      this.dataSet = response.data;
    }, error => {
      console.log(error)
    })
  }
}
