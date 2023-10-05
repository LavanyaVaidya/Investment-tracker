import React from 'react';
import '../../../LCSS.css';

function FAQAccordion() {
    const FAQs = [
        {
            question: 'What is an investment tracker?',
            answer: `An investment tracker is a digital tool or app that helps
            you monitor and manage your investments in one place. It provides real-time updates on your 
            portfolios performance and helps you make informed investment decisions..`,
            accordianID: `flush-collapseOne`
        },
        {
            question: 'How Do I Open an Investement Tracker Account?',
            answer: `To open an account, you can visit our website 
            and follow the account opening process. You will need to provide personal information, 
            financial details, and complete the necessary forms. Once your account is approved, you 
            can start tracking.`,
            accordianID: `flush-collapseTwo`
        },
        {
            question: 'Is my financial data safe and secure with the investment tracker?',
            answer: `Yes, we take security seriously. Your financial data is encrypted and stored securely. 
            We use industry-standard security practices to protect your information.`,
            accordianID: `flush-collapseThree`
        },
        {
            question: 'How Do I Contact Customer Support?',
            answer: `Our customer support team is available through multiple channels, 
            including phone, email, live chat, and in-person visits to our branches (if applicable). Visit 
            our "Contact Us" for details.`,
            accordianID: `flush-collapseFour`
        },
        {
            question: 'Can I track multiple investment accounts or portfolios?',
            answer: `Absolutely! Our investment tracker allows you to manage 
            and monitor multiple portfolios in one place. Whether you have a community investing, 
            ethical investing, green investing portfolios you can track them all..`,
            accordianID: `flush-collapseFive`
        },
    ]
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
    {FAQs.map((FAQ, index) => {
        return (
            <div key={index}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed lpurpleColor my-1" type="button" data-bs-toggle="collapse" data-bs-target={`#${FAQ.accordianID}`} aria-expanded="false" aria-controls={`${FAQ.accordianID}`}>
                        {FAQ.question}
                    </button>
                    </h2>
                    <div id={`${FAQ.accordianID}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{FAQ.answer}</div>
                    </div>
                </div>
            </div>
        )
    })}
    </div>
  );
}

export default FAQAccordion;
