import { Component, input } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  imports: [DatePickerModule]
})
export class DatePickerComponent {
  dateValue: Date;
  inline = input<boolean>(true);
  showWeek = input<boolean>(false);

  constructor() {
    this.dateValue = new Date();
  }
}