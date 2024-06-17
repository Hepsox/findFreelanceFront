import { Component, Input } from '@angular/core';
import { Freelance } from '../types/freelance.type';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent {
  @Input() freelance!: Freelance;
}
