import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  HPtasksArray: any[] = []
  MPtasksArray: any[] = []
  LPtasksArray: any[] = []
  NPtasksArray: any[] = []
  completedTasksArray: any[] = []
  priority:string = ''

  formatDate(date : Date): string {
    let dateStr = ''
    switch(date.getDay()){
      case 0:
        dateStr += 'Sunday, '
        break
      case 1:
        dateStr += 'Monday, '
        break
      case 2:
        dateStr += 'Tuesday, '
        break
      case 3:
        dateStr += 'Wednesday, '
        break
      case 4:
        dateStr += 'Thursday, '
        break
      case 5:
        dateStr += 'Friday, '
        break
      case 6:
        dateStr += 'Saturday, '
        break
      }
    switch(date.getMonth()){
      case 0 : 
        dateStr += 'Jan'
        break
      case 1 : 
        dateStr += 'Feb'
        break
      case 2:
        dateStr += 'Mar'
        break
      case 3:
        dateStr += 'Apr'
        break
      case 4:
        dateStr += 'May'
        break
      case 5:
        dateStr += 'Jun'
        break
      case 6:
        dateStr += 'Jul'
        break
      case 7:
        dateStr += 'Aug'
        break
      case 8:
        dateStr += 'Sep'
        break
      case 9:
        dateStr += 'Oct'
        break
      case 10:
        dateStr += 'Nov'
        break
      case 11:
        dateStr += 'Dec'
        break
    }
    dateStr += ' '+date.getDate().toString()
    return dateStr
  }
  addTask(form:NgForm){
    console.log(this.priority)
    if(this.priority == 'High'){
      this.addHPTask(form)
    }else if(this.priority == 'Medium'){
      this.addMPTask(form)
    }else if(this.priority == 'Low'){
      this.addLPTask(form)
    }else{
      this.addNPTask(form)
    }
  }
  addNPTask(form: NgForm){
    const dateTime = new Date();
    let task = {
      ...form.value,
      id: this.NPtasksArray.length + 'N',
      time: dateTime
    }
    this.NPtasksArray.push(task)
    form.resetForm()
    this.priority = ''
  }
  addHPTask(form: NgForm){
    const dateTime = new Date();
    let task = {
      ...form.value,
      id: this.HPtasksArray.length + 'H',
      time: dateTime
    }
    this.HPtasksArray.push(task)
    form.resetForm()
    this.priority = ''
  }
  addMPTask(form: NgForm){
    const dateTime = new Date();
    let task = {
      ...form.value,
      id: this.MPtasksArray.length + 'M',
      time: dateTime
    }
    this.MPtasksArray.push(task)
    form.resetForm()
    this.priority = ''
  }
  addLPTask(form: NgForm){
    const dateTime = new Date();
    let task = {
      ...form.value,
      id: this.LPtasksArray.length + 'L',
      time: dateTime
    }
    this.LPtasksArray.push(task)
    form.resetForm()
    this.priority = ''
  }
}
