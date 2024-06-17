import { Component } from '@angular/core';
import { FreelanceService } from '../freelance.service';
import { Freelance } from '../types/freelance.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-freelance',
  templateUrl: './all-freelance.component.html',
  styleUrl: './all-freelance.component.css',
})
export class AllFreelanceComponent {
  constructor(private freelanceService: FreelanceService) {}

  FreelanceList$: Observable<Freelance[]> =
    this.freelanceService.getListFreelance();
}
