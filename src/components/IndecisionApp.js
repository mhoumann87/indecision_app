import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

class IndecisionApp extends React.Component {
  state = {
    subtitle: 'Put your life in the hands of a computer!',
    options: [],
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prev => ({
      options: prev.options.filter(option => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  };

  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option allready exist';
    }

    this.setState(prev => ({ options: prev.options.concat(option) }));
  };

  // Life cycle methods, like render, fires automaticly

  // When the app first is started
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  // When something changes the state
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      //console.log(json);
      localStorage.setItem('options', json);
    }
  }

  render() {
    return (
      <div className='app-box'>
        <Header subtitle={this.state.subtitle} />

        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />

        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />

        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;
