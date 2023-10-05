import React, {useState} from 'react'
import FAQAccordion from './FAQAccordian';
import '../../../LCSS.css';
import NavBar from '../Navbar/NavBar';
import axios from 'axios';

const Support = () => {

    const [questionData, setQuestionData] = useState({
        email: '',
        name: '',
        question: '',
    });
    const [feedbackData, setFeedbackData] = useState({
        email: '',
        feedback: '',
    });

    const handleQuestionChange = (e) => {
        const {name, value} = e.target;
        setQuestionData({
            ...questionData,
            [name]: value,
        });
    }

    const handleFeedbackChange = (e) => {
        const {name, value} = e.target;
        setFeedbackData({
            ...feedbackData,
            [name]: value,
        });
    }

    const handleQuestionSubmit = async (e) => {
        e.preventDefault();
        console.log(questionData);
        try {
            await axios.post('http://localhost:4200/questions', questionData);
            alert('Data saved successfully !');
            setQuestionData({email: '',name: '',question: '',})
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
        e.target.reset();
    };

    // Function to handle feedback submission
    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4200/feedback', feedbackData);
            alert('Data saved successfully !');
            setFeedbackData({email: '',name: '',question: '',})
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
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
                    <form onSubmit={handleQuestionSubmit}>
                        <div className="form-outline mb-4">
                            <input type="text" name='name' className="form-control purpleBorder" placeholder='Name' onChange={handleQuestionChange}/>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="email" name='email' className="form-control purpleBorder" placeholder='Email' onChange={handleQuestionChange}/>
                        </div>

                        <div className="form-outline mb-4">
                            <textarea className="form-control purpleBorder" name='question' rows="4" placeholder='Question' onChange={handleQuestionChange}></textarea>
                        </div>

                        <button type="submit" className="btn purpleColor btn-block mb-4">Send</button>
                    </form>
                </div>
            </div>
        </div>

        <hr></hr>
    
    </div>

        <div className='pad' style={{textAlign: 'left'}}>
            <h2 className='pb-5 text-muted'>Feedback and Suggestions</h2>
                <form onSubmit={handleFeedbackSubmit}>
                        <div className="form-outline mb-4">
                            <input type="email" name='email' className="form-control purpleBorder" placeholder='Email' onChange={handleFeedbackChange}/>
                        </div>

                        <div className="form-outline mb-4">
                            <textarea className="form-control purpleBorder" name='feedback' rows="4" placeholder='Feedback' onChange={handleFeedbackChange}></textarea>
                        </div>
                    <button type="submit" className="btn purpleColor">Submit</button>
                </form>
        </div>
    </>
  )
}

export default Support