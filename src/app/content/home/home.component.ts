import { Component, OnInit } from '@angular/core';


const greatDay = '09/03/2022 19:00:00';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  seconds: string | number = 1000;
  minutes: any;
  hours: any;
  days: any;

  goalIsComplete: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.initTimer();
  }

  initTimer() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today: Date | string = new Date(),
      dd = String(today.getDate()).padStart(2, '0'),
      mm = String(today.getMonth() + 1).padStart(2, '0'),
      yyyy = today.getFullYear(),
      dataAgostianos = greatDay;

    today = mm + '/' + dd + '/' + yyyy;

    const countDown = new Date(dataAgostianos).getTime(),
      x = setInterval(() => {
        const now = new Date().getTime(),
          distance = countDown - now;

        this.days = Math.floor(distance / day)
          .toString()
          .padStart(2, '0');
        this.hours = Math.floor((distance % day) / hour)
          .toString()
          .padStart(2, '0');
        this.minutes = Math.floor((distance % hour) / minute)
          .toString()
          .padStart(2, '0');
        this.seconds = Math.floor((distance % minute) / second)
          .toString()
          .padStart(2, '0');

        //do something later when date is reached
        if (distance < 0) {
          this.goalIsComplete = true;
          clearInterval(x);
        }
      }, 0);
  }
}
