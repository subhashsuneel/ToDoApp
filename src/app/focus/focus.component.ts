import { Component } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css'],
})
export class FocusComponent {
  pomo: boolean = true;
  sw: boolean = false;

  onPomo() {
    this.pomo = !this.pomo;
    this.sw = false;
  }

  onSw() {
    this.sw = !this.sw;
    this.pomo = false;
  }

  minutes = 25;
  seconds = 0;
  timerComplete = false;
  timerStarted = false;
  intervalId: string | number | NodeJS.Timer | undefined;

  swMinutes = 0;
  swSeconds = 0;
  milliseconds = 0;
  stopwatchStarted = false;
  stopwatchComplete = false;
  swintervalId: string | number | NodeJS.Timer | undefined;

  startTimer() {
    this.timerStarted = true;
    this.intervalId = setInterval(() => {
      if (this.seconds === 0) {
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }

      if (this.minutes === 0 && this.seconds === 0) {
        this.timerComplete = true;
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.timerStarted = false;
  }

  startStopwatch() {
    this.stopwatchStarted = true;
    this.swintervalId = setInterval(() => {
      this.milliseconds++;
      if (this.milliseconds === 100) {
        this.swSeconds++;
        this.milliseconds = 0;
      }
      if (this.swSeconds === 60) {
        this.swMinutes++;
        this.swSeconds = 0;
      }
    }, 10);
  }

  stopStopwatch() {
    clearInterval(this.swintervalId);
    this.stopwatchStarted = false;
  }
}
