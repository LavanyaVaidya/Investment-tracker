// Modal.js
import React from 'react';

const MyModal = ({ showModal, handleCloseModal }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" style={{color: "black"}}>Privacy Policy</h2>
          </div>
          <div className="modal-body" style={{color: "black"}}>
          <section>
            
            <p>We may collect the following types of information:</p>
            
            <ol>
                <li><strong>Personal Information</strong>: When you register for an account, we may collect information such as your name, email address, phone number, and other contact details.</li>
                <li><strong>Financial Information</strong>: In order to provide you with the services of the App, we may collect and store financial data such as investment portfolio information, transaction history, and financial account information. We do not store sensitive financial information like credit card numbers.</li>
                <li><strong>Device Information</strong>: We may collect information about the device you use to access the App, including device type, operating system, and unique device identifiers.</li>
                <li><strong>Log Data</strong>: When you use the App, we may automatically collect certain information, such as your IP address, browser type, operating system, and the pages or features of the App that you interact with.</li>
            </ol>
        </section>
            <p>If you have any questions, please don't hesitate to contact us.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
