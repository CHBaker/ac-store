import * as fromActions from './actions';

export const initialState = {
    loaded: false,
    loading: false,
    todos: [{ label: 'Eat Pizza', complete: false }]
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.ADD_TODO : {
            const todo = action.payload;
            const todos = [...state.todos, todo];
            return {
                todos,
            }
        }
    }
    return state;
}
