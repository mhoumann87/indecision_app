import React, { Component } from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class IndesicionApp extends Component {
  state = {
    subtitle: 'Put your life in the hands of a computer',
    options: [],
  };

  render() {
    return (
      <div>
        <Header title={'Indecision App'} subtitle={this.state.subtitle} />

        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />

        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptions={this.handleDeleteOptions}
        />

        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }

  // When the app is first started
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing
    }
  }

  // When something changes the state
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);

      localStorage.setItem('options', json);
    }
  }

  handleDeleteOption = optionToDelete => {
    this.setState(prev => ({
      options: prev.options.filter(option => optionToDelete !== option),
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
    }

    this.setState(prev => ({ options: prev.options.concat(option) }));
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  };
}

export default IndesicionApp;
