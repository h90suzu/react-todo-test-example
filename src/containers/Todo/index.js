import React, { Component } from 'react';

import Todo from '../../components/Todo';
import TodoInput from '../../components/TodoInput';

class TodoContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }
    
    addTodo(name) {
        const newTodo = {
            name: name,
            completed: false,
        };
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    completeTodo(completeIndex) {
        this.setState({
            todos: this.state.todos.map((todo, index) => {
                if (index == completeIndex) {
                    todo.completed = true;
                }
                return todo;
            })
        });
    }

    render() {
        console.log(this.state.todos);
        return (
            <div>
                <TodoInput
                    onSubmit={this.addTodo}
                />

                {this.state.todos.map((todo, index) => (
                    <Todo
                        key={index}
                        {...todo}
                        onComplete={this.completeTodo.bind(null, index)}
                    />
                ))}
            </div>
        );
    }
}

export default TodoContainer;
