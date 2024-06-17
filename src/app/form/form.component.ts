import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { BookingService } from '../booking.service';
import { FreelanceService } from '../freelance.service';
import { ActivatedRoute } from '@angular/router';
import { Freelance } from '../types/freelance.type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output()
  numberOfDays = new EventEmitter<number>();

  @Input()
  freelance!: Freelance | null;

  devisForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: BookingService,
    private freelanceService: FreelanceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('coucou');
    this.devisForm = this.fb.group({
      title: ['', Validators.required],
      debutCondition: ['', Validators.required],
      description: ['', Validators.required],
      dateDebut: new FormControl<Date | null>(null, Validators.required),
      numberDays: [0, [Validators.required, Validators.pattern('^[0-9]*$')]],
    });

    this.devisForm.get('numberDays')?.valueChanges.subscribe((numberOfDays) => {
      this.numberOfDays.emit(numberOfDays);
    });
  }

  get isDatePreciseSelected(): boolean {
    return this.devisForm.get('debutCondition')?.value === 'DATE_PRECISE';
  }

  onSubmit() {
    const formValue = this.devisForm.value;

    const booking = {
      ...formValue,
      freelance: { id: this.freelance?.id },
      entreprise: { id: 1 },
    };
    this.service.createBooking(booking).subscribe();
  }
}
