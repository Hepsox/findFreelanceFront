import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private readonly BASE_URL = 'http://localhost:8080';

  constructor() {}

  createBooking(booking: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/bookings`, booking);
  }
}
