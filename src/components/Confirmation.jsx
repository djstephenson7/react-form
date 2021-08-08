import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const Confirmation = () => {
  const locale = {
    pleaseVerify:
      'Please verify your email address, you should have received an email from us already!',
  };

  return (
    <div className="tab-content">
      <div className="icon-container">
        <FontAwesomeIcon icon={faCheckCircle} className="icon" />
      </div>
      <p className="icon-text">{locale.pleaseVerify}</p>
    </div>
  );
};

export default Confirmation;
