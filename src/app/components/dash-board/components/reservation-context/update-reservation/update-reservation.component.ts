import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../../../../../services/reservation.service";
import ReservationDTO from "../../../../../dto/ReservationDTO";

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent implements OnInit {
  reservationForm = new FormGroup({
    id: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(5)
    ]),
    name: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(15)
    ]),
    address: new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(45)
    ]),
    contact: new FormControl('', [
      Validators.required
    ]),
    checkin: new FormControl('', [
      Validators.required
    ]),
    checkout: new FormControl('', [
      Validators.required
    ]),
    visitors: new FormControl('', [
      Validators.required
    ])

  });
  constructor(private _reservationService:ReservationService) {
  }

  ngOnInit(): void {
  }

  uploadData() {
    const dto = new ReservationDTO(
      this.reservationForm.get('id')?.value,
      this.reservationForm.get('name')?.value,
      this.reservationForm.get('address')?.value,
      this.reservationForm.get('contact')?.value,
      this.reservationForm.get('checkin')?.value,
      this.reservationForm.get('checkout')?.value,
      this.reservationForm.get('visitors')?.value
    );
    this._reservationService.updateReservation(dto).subscribe(response => {
      alert('Updated..');
      this.reservationForm.reset();
    }, error => {
      console.log(error)
    })
  }


}
