import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  tasksArray: any[] = []
  completedTasksArray: any[] = []

  addTask(form: NgForm){
    let task = {
      ...form.value,
      id: this.tasksArray.length
    }
    this.tasksArray.push(task)
    form.resetForm()
  }

  editTask(event: any){
    let index = event.target.id
    if(event.target.checked){
      this.completedTasksArray.push(this.tasksArray[index])
    }else{
      this.completedTasksArray.splice(index,1)
    }
  }



}
