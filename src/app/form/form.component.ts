import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  devisForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.devisForm = this.fb.group({
      title: ['', Validators.required],
      debutCondition: ['', Validators.required],
      description: ['', Validators.required],
      dateBegin: new FormControl<Date | null>(null, Validators.required),
      numberDays: ['', Validators.required],
    });
  }

  get isDatePreciseSelected(): boolean {
    return this.devisForm.get('debutCondition')?.value === 'DATE_PRECISE';
  }

  onSubmit() {
    console.log(this.devisForm.value);
  }
}
