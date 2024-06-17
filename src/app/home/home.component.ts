import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreelanceService } from '../freelance.service';
import { Freelance } from '../types/freelance.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  freelance: Freelance | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: FreelanceService
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getFreelanceById(id).subscribe((freelance: Freelance) => {
      this.freelance = freelance;
    });
  }
}
