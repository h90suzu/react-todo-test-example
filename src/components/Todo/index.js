import React, { Component, PropTypes } from 'react';

const propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onComplete: PropTypes.func.isRequired,
};

class Todo extends Component {

    render() {
        return(
            <li>
                {this.props.completed ? (
                    <span>[Completed]</span>
                ) : null}

                <span>{this.props.name}</span>

                {!this.props.completed ? (
                    <button onClick={this.props.onComplete}>Complete</button>
                ) : null}
            </li>
        );
    }
}

Todo.propTypes = propTypes;

export default Todo;
