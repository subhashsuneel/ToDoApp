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
  priority:string = ''
  borderColor:string = ''

  addTask(form: NgForm){
    let task = {
      ...form.value,
      id: this.tasksArray.length
    }
    this.tasksArray.push(task)
    form.resetForm()
    this.priority = ''
    this.borderColor = ''
  }

  editTask(event: any){
    let index = event.target.id
    if(event.target.checked){
      this.completedTasksArray.push(this.tasksArray[index])
    }else{
      this.completedTasksArray.splice(index,1)
    }
  }

  changePriority(){
    console.log(this.priority)
    switch(this.priority){
      case 'High':{
        this.borderColor = 'red'
        break
      }
      case 'Medium':{
        this.borderColor = 'orange'
        break
      }
      case 'Low':{
        this.borderColor = 'yellow'
        break
      }
      default : {
        this.borderColor = 'black'
        break
      }
    }
  }


}
