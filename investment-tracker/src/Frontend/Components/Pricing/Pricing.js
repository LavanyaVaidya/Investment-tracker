import React from 'react'
import '../../../LCSS.css';
import NavBar from '../Navbar/NavBar'
import {Link} from 'react-router-dom'

const Pricing = () => {
  return (
    <>
    <NavBar/>
    <div className='gridGap'>
        <div className='row'>
            <div className='col-lg-4'>
                <img className='sizeManageImage' src='/Images/Price.webp'/>
            </div>
            <div className='col-lg-8'>
            <h1 className='text-muted mt-5 mb-3'>Pricing</h1>
            <h3 className='text-muted'>A free tracking plateform for all of your portfolios</h3>
            </div>
        </div>
        <hr></hr>
        <div className='container d-flex justify-content-center'>
            <div className='row gx-5'>
                <div className="col-lg-6 py-5">
                    <div className="card h-100 lpurpleColor">
                        <div className='text-center'>
                            <img src="./Images/Zero.jpg" className="card-img-top w-50 pt-5" alt="..."/>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <hr></hr>
                            <ul className='text-start'>
                                <li>Easy Portfolio Management: Keep track of all your investments in one place.</li>
                                <li>Real-time Updates: Get instant updates on your portfolio's performance and market changes.</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 py-5">
                    <div className='card h-100 lpurpleColor'>
                        <div className='text-center'>
                            <img src="./Images/Zero.jpg" className="card-img-top w-50 pt-5" alt="Responsive image"/>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <hr></hr>
                            <ul className='text-start'>
                                <li>Goal Setting and Monitoring: Set investment goals and track your progress toward achieving them.</li>
                                <li>Diversification Insights: Receive suggestions for diversifying your portfolio to reduce risk.</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <h3 className='text-muted'>Open An account now</h3>
        <div className='row'>
            <div className='col-ln-4'>
            <Link to="/signup">
                <button
                    type='button'
                    className='btn purpleColor'
                >
                    Sign Up
                </button>
            </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pricing