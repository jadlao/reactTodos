import React from 'react';

export default class CreateTodo extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" 
                ref="createInput" />
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        // grabs input value entered in box
        console.log(this.refs.createInput.value);
        // outputs function
        console.log(this.props.createTask);

        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }
}