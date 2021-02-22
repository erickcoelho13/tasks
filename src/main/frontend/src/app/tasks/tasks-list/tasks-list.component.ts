import { Component, OnInit } from '@angular/core';
import {Task} from "src/app/tasks/task.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor() { }

    ngOnInit(): void {
        this.tasks.push(new Task(1, "Task 1", true, "22/02/2020"));
        this.tasks.push(new Task(2, "Task 2", false, "21/02/2020"));
        this.tasks.push(new Task(3, "Task 3", false, "12/02/2020"));
        this.tasks.push(new Task(4, "Task 4", false, "02/02/2020"));
  }

    getDueDateLabel(task: Task) {
        return task.completed ? 'label-success' : 'label-primary';
    }

    onTaskChange(event, task) {
        console.log('Task has changed');
    }

}
