import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => {
  return (
    <Modal isOpen={!!props.selectedOption} contentLabel='Selected Option'>
      <h3>Selected Option</h3>
      {props.selectedOption}
    </Modal>
  );
};

export default OptionModal;
