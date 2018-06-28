export class AllTasks {
    Tasks: Array<{
        user_id: number;
        parent_id: number;
        first_name: string;
        last_name: string;
        email: string;
        user_img: string;
        balance: number;
        is_parent: number}>;
    task_id: number;
    user_id: number;
    title: string;
    description: string;
    payment: string;
    deadline: Date;
    status_id: number;
    first_name: string;
}
