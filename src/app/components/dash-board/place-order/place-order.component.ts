import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../../services/reservation.service";
import {BookingService} from "../../../services/booking.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private _reservationService:ReservationService, private _bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.loadAllReservations();

    this.allRooms.push({"code": "R-001", "roomType": "Luxury Room", "unitPrice": 1000, "availableQty": 245});
    this.allRooms.push({"code": "R-002", "roomType": "Royal Room", "unitPrice": 1200, "availableQty": 100});
    this.allRooms.push({"code": "R-003", "roomType": "Delux Room", "unitPrice": 1100, "availableQty": 400});
    this.allRooms.push({"code": "R-004", "roomType": "Family Room", "unitPrice": 2000, "availableQty": 180});
    this.allRooms.push({"code": "R-005", "roomType": "Single Room", "unitPrice": 800, "availableQty": 120});
    this.allRooms.push({"code": "R-006", "roomType": "Double Room", "unitPrice": 1500, "availableQty": 220});

    this.allReservation.push({"id":"RES-1101","name":"Nimal Bandara","address":"Galle","checkin":"2021-11-15"});
    this.allReservation.push({"id":"RES-1102","name":"Kamal Perera","address":"Mathara","checkin":"2021-11-02"});
    this.allReservation.push({"id":"RES-1103","name":"Himali Sayurangi","address":"Ambalangoda","checkin":"2021-11-03"});
    this.allReservation.push({"id":"RES-1104","name":"Dineth Alwis","address":"Kandy","checkin":"2021-11-04"});
    this.allReservation.push({"id":"RES-1105","name":"Namal Silva","address":"Maharagama","checkin":"2021-11-05"});
    this.allReservation.push({"id":"RES-1106","name":"Ranjani Gamage","address":"Negambo","checkin":"2021-12-15"});
    this.allReservation.push({"id":"RES-1107","name":"Vimal Shantha","address":"Kegalle","checkin":"2021-12-02"});

    this.selectedRoom = this.allRooms[0];
  }

  allReservation: any[] = [];
  selectedReservation: any = null;

  allRooms: any[] = [];
  selectedRoom: any = null;

  private loadAllReservations() {
    this._reservationService.getAllReservations().subscribe(response => {
      this.allReservation = response.data;
      if (response.data.length > 0) {
        this.selectedReservation = response.data[0];
      }
    }, error => {
      console.log(error)
    })
  }

  setReservation(id: string) {

    for (const temp of this.allReservation) {
      if (temp.id === id) {
        this.selectedReservation = temp;
      }
    }
  }

  setRoom(id: string) {
    for (const temp of this.allRooms) {
      if (temp.code === id) {
        this.selectedRoom = temp;
      }
    }
  }

  cart: any[] = [];

  addToCart(requestedQTY: string) {
    let code = this.selectedRoom?.code;
    let roomType = this.selectedRoom?.roomType;
    let unitPrice = Number(this.selectedRoom?.unitPrice);
    let availableQty = Number(this.selectedRoom?.availableQty);
    let total = Number(requestedQTY) * unitPrice;

    this.cart.push({
      "code": code, "roomType": roomType, "unitPrice": unitPrice,"availableQty":availableQty,
      "requestedQTY": requestedQTY, "total": total
    });
    this.calculateCost();

  }

  delete(num: number) {
    this.cart.splice(num, 1);
    this.calculateCost();
  }

  totalCost = 0;

  private calculateCost() {
    this.totalCost = 0;
    for (const temp of this.cart) {
      this.totalCost += temp.total;
    }
  }

  placeOrder() {
    this._bookingService.saveBooking(this.selectedReservation,new Date(),
      this.totalCost,this.cart).subscribe(response=>{
      alert(response.message);
    }, error => {
      console.log(error)
    });
  }
}
