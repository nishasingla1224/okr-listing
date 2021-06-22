import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
    handleClose: PropTypes.func,
    show: PropTypes.bool,
    children:PropTypes.array
  };
  
  Modal.defaultProps = {
    handleClose:()=>{},
    show: false,
    children:[]
  };

export default Modal;