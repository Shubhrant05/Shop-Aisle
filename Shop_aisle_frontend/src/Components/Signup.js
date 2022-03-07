import React from 'react'
import signup from '../Assets/signup.svg'
import SignupForm from './Forms/SignupForm'
const Signup = () => {
    return (
        <div>
            <div className='signup-logo ml-2'>
                Shop Aisle
            </div>
            <div className='d-flex signup-page'>
                <div className='signup'>
                    <img src={signup} alt="signup pic" />
                </div>
                <div className='signup-form'>
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export default Signup