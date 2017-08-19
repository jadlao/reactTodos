import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

const todos = [
{
    task: 'make react tutorial',
    isCompleted: true
},
{
    task: 'eat dinner',
    isCompleted: false
}
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div>
                <h1>React Todos</h1>
                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodosList 
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        // set to opposite
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos })
    }
}