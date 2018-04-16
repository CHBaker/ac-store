export const ADD_TODO = '[TODOS] ADD_TODO';
export const REMOVE_TODO = '[TODOS] ADD_TODO';

export class AddTodo {
    readonly type = ADD_TODO;
    constructor(public payload: any) {}
}

export class RemoveTodo {
    readonly type = REMOVE_TODO;
    constructor(public payload: any) {}
}

export type TodosAction = AddTodo | RemoveTodo
