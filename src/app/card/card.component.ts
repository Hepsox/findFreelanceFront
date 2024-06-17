import { Component, Input } from '@angular/core';
import { Freelance } from '../types/freelance.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() freelance!: Freelance;
}
