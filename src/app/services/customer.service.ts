import {Injectable} from '@angular/core';
import CustomerDTO from "../dto/CustomerDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public saveCustomer(dto: CustomerDTO): Observable<any> {
    return this.http.post('http://localhost:3001/api/v1/customerRoute/saveCustomer', {
      id: dto.id,
      name: dto.name,
      address: dto.address,
      salary: dto.salary
    })
  }

  public updateCustomer(dto: CustomerDTO): Observable<any> {
    return this.http.put('http://localhost:3001/api/v1/customerRoute/updateCustomer', {
      id: dto.id,
      name: dto.name,
      address: dto.address,
      salary: dto.salary
    })
  }

  public deleteCustomer(id: string): Observable<any> {
    return this.http.delete('http://localhost:3001/api/v1/customerRoute/deleteCustomer', {
      headers:{id}
    })
  }

  public searchCustomer(id: string): Observable<any> {
    return this.http.get('http://localhost:3001/api/v1/customerRoute/getCustomer', {
      headers:{id}
    })
  }

  public getAllCustomers(): Observable<any> {
    return this.http.get('http://localhost:3001/api/v1/customerRoute/getAllCustomers')
  }

}
