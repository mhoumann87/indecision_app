import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    {props.options.length === 0 ? (
      <p>Please add an option to get started</p>
    ) : (
      <p>Here Are Your Options</p>
    )}
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    <ul>
      {props.options.map((option, i) => (
        <Option
          key={i}
          option={option}
          index={i}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ul>
  </div>
);

export default Options;
