export const initialState = {
    todo: [
        {
            item:'Learn about reducers',
            completed:false,
            id: 4309523
        }
    ]
}

export const todoReducer = (state,action) => {
    switch(action.type){
        case 'SUBMIT_TODO' :
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case 'TODO_TOGGLE' :
            return {
                ...state,
                todo: state.todo.map(todo => {
                    if(action.payload === todo.id){
                        return {
                            ...todo, completed:!todo.completed
                        }
                    }
                    return {...todo}
                })}
                case 'CLEAR_COMPLETE' :
                    return {
                        ...state,
                        todo:state.todo.filter( todo => {return !todo.completed
                        })
                    }
                    default:
                        return state
    }
}