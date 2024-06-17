import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from './types/booking.type';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private readonly BASE_URL = 'http://localhost:8080';

  public readonly DAILY_FEE = 35;

  constructor() {}

  createBooking(booking: Booking): Observable<any> {
    if (booking.debutCondition === 'DES_QUE_POSSIBLE') {
      // format date yyyy-mm-dd
      booking.dateDebut = new Date().toISOString().split('T')[0];
    } else if (booking.debutCondition === 'PEU_IMPORTE') {
      booking.dateDebut = '';
    }
    console.log(booking);

    return this.http.post(`${this.BASE_URL}/booking/add`, booking);
  }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.BASE_URL}/booking/get/all`);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/booking/delete/${id}`);
  }

  calculTotalPrestation(
    tjm: number,
    numberOfDays: number,
    dailyFee: number = this.DAILY_FEE
  ): number {
    return (tjm + dailyFee) * numberOfDays;
  }
}
