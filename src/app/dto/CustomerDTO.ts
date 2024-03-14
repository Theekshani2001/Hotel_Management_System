export default class CustomerDTO {
  public id: string;
  public name: string;
  public address: string;
  public salary: number;


  constructor(id: string, name: string, address: string, salary: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.salary = salary;
  }
}
