export default class ReservationDTO {
  public id: string;
  public name: string;
  public address: string;
  public contact: number;
  public checkin: Date;
  public checkout: Date;
  public visitors: number;



  constructor(id: string, name: string, address: string, contact: number,checkin:Date,checkout:Date,visitors:number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.contact = contact;
    this.checkin = checkin;
    this.checkout = checkout;
    this.visitors = visitors;
  }
}
