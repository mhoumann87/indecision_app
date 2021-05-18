import React from 'react';

import Option from './Option';

const Options = props => (
  <div>
    {props.options.length === 0 ? (
      <p>Please add an option to get started</p>
    ) : (
      <p>Here are your options</p>
    )}
    <button onClick={props.handleDeleteOptions}>Remove All Options</button>
    <ol>
      {props.options.map((option, i) => (
        <Option
          key={i}
          option={option}
          index={i}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
