import React from 'react';

const Header = props => (
  <div className='title-box'>
    <header>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </header>
  </div>
);

// Set default props if none given
Header.defaultProps = {
  title: 'Indecision App',
};

export default Header;
