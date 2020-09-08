import React from 'react'

const TodoList = props => {
    const {
        todos,
        completedTodo
    } = props

    return(
        <div>
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id} onClick={() => completedTodo(todo.id)} className={todo.completed ? 'complete' : ''}>{todo.item}</li>
                })}
            </ul>
        </div>
    )
}

export default TodoList;