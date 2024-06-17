import { Component, Input } from '@angular/core';
import { Freelance } from '../types/freelance.type';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent {
  @Input() freelance!: Freelance;
  @Input() selectedNumberOfDays: number = 0;

  constructor(public bookingService: BookingService) {}
}
