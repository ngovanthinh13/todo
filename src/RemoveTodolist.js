
import React, { Component } from 'react'

class RemoveTodolist extends Component {
    removeItem(item, i) {
        this.props.removeTodo(item, i);
    }

    render() {
        return(
            <ul>
                { this.props.todos.map((todo,i) => {
                    return <li onClick={() => { this.removeItem(todo, i)}} key={i}>{ todo }</li>
                })}
            </ul>
        );
    }
}

export default RemoveTodolist