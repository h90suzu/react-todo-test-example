import React, { Component, PropTypes } from 'react';

const propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

class TodoInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit() {
        this.props.onSubmit(this.state.text);
        this.setState({ text: '' });
    }
    
    render() {
        return (
            <div>
                <input
                    value={this.state.text}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleSubmit}>Add</button>
            </div>
        );
    }
}

TodoInput.propTypes = propTypes;

export default TodoInput;
