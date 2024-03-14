import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../../../../../services/reservation.service";
import ReservationDTO from "../../../../../dto/ReservationDTO";

@Component({
  selector: 'app-delete-reservation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.scss']
})
export class DeleteReservationComponent implements OnInit {

  reservationForm = new FormGroup({
    id: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(5)
    ])
  });

  constructor(private _reservationService: ReservationService) {
  }
  ngOnInit(): void {
  }
  uploadData() {
    this._reservationService.deleteReservation(this.reservationForm.get('id')?.value).subscribe(response => {
      alert('Deleted..');
      this.reservationForm.reset();
    }, error => {
      console.log(error)
    })
  }



}
