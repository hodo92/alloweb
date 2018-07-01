import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
    name: 'outstandingTasks'
})
export class OutstandingTasksPipe implements PipeTransform {

    transform(tasks: Task[]) {
        return tasks.filter(task => task.status_id == 1);
    }

}
