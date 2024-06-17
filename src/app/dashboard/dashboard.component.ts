import { Component } from '@angular/core';
import { BookingService } from '../booking.service';
import { Observable } from 'rxjs';
import { Booking } from '../types/booking.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(public bookingService: BookingService) {}

  listBookings: Booking[] = [];

  listBookings$: Observable<Booking[]> = this.bookingService.getAllBookings();

  deleteBooking(id: number): void {
    this.bookingService.deleteBooking(id).subscribe();
  }
  ngOnInit() {}
}
