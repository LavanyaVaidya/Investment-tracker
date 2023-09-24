import React from 'react';

function FAQAccordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed lpurpleColor my-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            What is an investment tracker?
        </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">An investment tracker is a digital tool or app that helps 
        you monitor and manage your investments in one place. It provides real-time updates on your 
        portfolio's performance and helps you make informed investment decisions..</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed lpurpleColor my-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            How Do I Open an Investement Tracker Account?
        </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">To open an account, you can visit our website 
        and follow the account opening process. You will need to provide personal information, 
        financial details, and complete the necessary forms. Once your account is approved, you 
        can start tracking.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed lpurpleColor my-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Is my financial data safe and secure with the investment tracker?
        </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Yes, we take security seriously. Your financial data is encrypted and stored securely. 
        We use industry-standard security practices to protect your information.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed lpurpleColor my-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
            How Do I Contact Customer Support?
        </button>
        </h2>
        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Our customer support team is available through multiple channels, 
        including phone, email, live chat, and in-person visits to our branches (if applicable). Visit 
        our "Contact Us" for details.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed lpurpleColor my-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
            Can I track multiple investment accounts or portfolios?
        </button>
        </h2>
        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Absolutely! Our investment tracker allows you to manage 
        and monitor multiple portfolios in one place. Whether you have a community investing, 
        ethical investing, green investing portfolios you can track them all..</div>
        </div>
    </div>
    </div>
  );
}

export default FAQAccordion;
