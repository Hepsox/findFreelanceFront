import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  devisForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: BookingService) {}

  ngOnInit() {
    console.log('coucou');
    this.devisForm = this.fb.group({
      title: ['', Validators.required],
      debutCondition: ['', Validators.required],
      description: ['', Validators.required],
      dateBegin: new FormControl<Date | null>(null, Validators.required),
      numberDays: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  get isDatePreciseSelected(): boolean {
    return this.devisForm.get('debutCondition')?.value === 'DATE_PRECISE';
  }

  onSubmit() {
    console.log('coucou');
    console.log(this.devisForm.value);
    // this.service.createBooking(this.devisForm.value).subscribe();
  }
}
