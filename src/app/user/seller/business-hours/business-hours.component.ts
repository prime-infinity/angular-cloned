import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-hours',
  templateUrl: './business-hours.component.html',
  styleUrls: ['./business-hours.component.scss']
})
export class BusinessHoursComponent implements OnInit {
  timings = [
    { value: '09:00 AM', label: '09:00 AM' },
    { value: '09:30 AM', label: '09:30 AM' },
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '10:30 AM', label: '10:30 AM' },
    { value: '11:00 AM', label: '11:00 AM' },
    { value: '11:30 AM', label: '11:30 AM' },
    { value: '12:00 PM', label: '12:00 PM' },
    { value: '01:00 PM', label: '01:00 PM' },
    { value: '02:00 PM', label: '02:00 PM' },
    { value: '03:00 PM', label: '03:00 PM' },
    { value: '04:00 PM', label: '04:00 PM' },
    { value: '05:00 PM', label: '05:00 PM' },
    { value: '06:00 PM', label: '06:00 PM' },
    { value: '07:00 PM', label: '07:00 PM' },
    { value: '08:00 PM', label: '08:00 PM' },
    { value: '09:00 PM', label: '09:00 PM' },
    { value: '10:00 PM', label: '10:00 PM' },
    { value: '11:00 PM', label: '11:00 PM' },
    { value: '12:00 AM', label: '12:00 AM' },
    { value: '01:00 AM', label: '01:00 AM' },
    { value: '02:00 AM', label: '02:00 AM' },
    { value: '03:00 AM', label: '03:00 AM' },
    { value: '04:00 AM', label: '04:00 AM' },
    { value: '05:00 AM', label: '05:00 AM' },
    { value: '06:00 AM', label: '06:00 AM' },
    { value: '07:00 AM', label: '07:00 AM' },
    { value: '08:00 AM', label: '08:00 AM' }
];

  constructor() { }

  ngOnInit(): void {
  }

}
