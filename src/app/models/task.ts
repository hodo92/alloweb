export class Task {
    task_id: number;
    user_id: number;
    title: string;
    description: string;
    payment: string;
    deadline: Date;
    status_id: number;
    User?: any;
}