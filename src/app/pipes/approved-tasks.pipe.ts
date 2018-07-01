import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
    name: 'approvedTasks'
})
export class ApprovedTasksPipe implements PipeTransform {

    transform(tasks: Task[]) {
        return tasks.filter(task => task.status_id == 3);
    }

}
