import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {
  tasksArray: any[] = [];
  today: any[] = [];
  tomorrow: any[] = [];
  nextWeek: any[] = [];
  nextMonth: any[] = [];
  someDay: any[] = [];
  completedTasksArray: any[] = [];

  priority: string = '';
  when: string = 'Today';
  showByDate: string = 'All';

  getColor(str: string): string {
    if (str == 'High') {
      return 'red';
    } else if (str == 'Medium') {
      return 'orange';
    } else if (str == 'Low') {
      return 'yellow';
    }
    return 'black';
  }

  addTask(form: NgForm) {
    let bgcolor = this.getColor(this.priority);
    let task = {
      ...form.value,
      id: this.tasksArray.length,
      dueDate: this.when,
      priority: this.priority,
      color: bgcolor,
    };
    this.tasksArray.push(task);

    if (task.dueDate == 'Today') {
      this.today.push(task);
    } else if (task.dueDate == 'Tomorrow') {
      this.tomorrow.push(task);
    } else if (task.dueDate == 'Next Week') {
      this.nextWeek.push(task);
    } else if (task.dueDate == 'Next Month') {
      this.nextMonth.push(task);
    } else if (task.dueDate == 'Some Day') {
      this.someDay.push(task);
    }

    form.resetForm();
    this.priority = '';
    this.when = 'Today';
  }

  whichArray(str: string): any[] {
    if (str == 'Today') {
      return this.today;
    } else if (str == 'Tomorrow') {
      return this.tomorrow;
    } else if (str == 'Next Week') {
      return this.nextWeek;
    } else if (str == 'Next Month') {
      return this.nextMonth;
    } else if (str == 'Some Day') {
      return this.someDay;
    }
    return this.tasksArray;
  }
  editTask(event: any) {
    let index = event.target.id;
    if (event.target.checked) {
      this.completedTasksArray.push(this.tasksArray[index]);
      this.tasksArray.splice(index, 1);

      const todayindex = this.today.findIndex((obj) => obj.id == index);
      const tomorrowindex = this.tomorrow.findIndex((obj) => obj.id == index);
      const nextWeekindex = this.nextWeek.findIndex((obj) => obj.id == index);
      const nextMonthindex = this.nextMonth.findIndex((obj) => obj.id == index);
      const someDayindex = this.someDay.findIndex((obj) => obj.id == index);
      console.log(
        todayindex,
        tomorrowindex,
        nextWeekindex,
        nextMonthindex,
        someDayindex,
      );
      if (todayindex != -1) {
        this.today.splice(todayindex, 1);
      } else if (tomorrowindex != -1) {
        this.tomorrow.splice(tomorrowindex, 1);
      } else if (nextWeekindex != -1) {
        this.nextWeek.splice(nextWeekindex, 1);
      } else if (nextMonthindex != -1) {
        this.nextMonth.splice(nextMonthindex, 1);
      } else if (someDayindex != -1) {
        this.someDay.splice(someDayindex, 1);
      }
    }
    console.log(this.completedTasksArray);
  }
}
