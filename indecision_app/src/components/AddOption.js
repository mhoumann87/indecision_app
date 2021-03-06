import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined,
  };

  handleAddOption = e => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <div>
            <h3 className='danger'>{this.state.error}</h3>
          </div>
        )}

        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
