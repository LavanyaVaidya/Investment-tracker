import React, {useState} from 'react'
import FAQAccordion from './FAQAccordian';
import NavBar from '../Navbar/NavBar';

const Support = () => {
    const [feedback, setFeedback] = useState('');
    const [submittedFeedback, setSubmittedFeedback] = useState('');

    // Function to handle feedback submission
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        // You can add logic here to send the feedback to a backend or handle it as needed.
        // For this example, we'll just display a confirmation message.
        setSubmittedFeedback(feedback);
        setFeedback('');
        e.target.reset();
    };
  return (
    <>
    <NavBar/>
    <div className='gridGap text-muted'>
        <div>
            <h2 className='pb-5'>FAQ</h2>
            <FAQAccordion/>
        </div>

        <hr></hr>

        <div>
            <div  className='row text-start'>
                <div className='col-lg-6'>
                    <div className='bg-custom-image3 d-flex flex-column text-center'>
            
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div>
                        <h2 className='pt-5'>Still have a question ? Ask away.</h2>
                    </div>
                    <form>
                        <div className="form-outline mb-4">
                            <input type="text" id="form4Example1" className="form-control purpleBorder" placeholder='Name' />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="email" id="form4Example2" className="form-control purpleBorder" placeholder='Email' />
                        </div>

                        <div className="form-outline mb-4">
                            <textarea className="form-control purpleBorder" id="form4Example3" rows="4" placeholder='Question'></textarea>
                        </div>

                        <button type="submit" className="btn purpleColor btn-block mb-4">Send</button>
                    </form>
                </div>
            </div>
        </div>

        <hr></hr>
    
    </div>

        <div className='pad'>
            <h2 className='pb-5 text-muted'>Feedback and Suggestions</h2>
            {submittedFeedback ? (
                <div className="feedback-confirmation">
                <p>Thank you for your feedback:</p>
                <p>{submittedFeedback}</p>
                </div>
            ) : (
                <form onSubmit={handleFeedbackSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control purpleBorder" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFeedback" className="form-label">Feedback</label>
                        <input type="text" className="form-control inputfield purpleBorder" id="exampleFeedback"/>
                    </div>
                    <button type="submit" className="btn purpleColor">Submit</button>
                </form>
            )}
        </div>
    </>
  )
}

export default Support