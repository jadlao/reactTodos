import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        // ES6 destructuring
        const { task, isCompleted } = this.props;
        //console.log(this.props);

        const taskStyle = {
            // ? = ternary 
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >
                {task}
            </td>
        );
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        );
    }

    // call renderActionSection method, .bind needed only for click handlers etc
    render() {
        //console.log(this.props);
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }
}