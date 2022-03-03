import React from 'react'
import newShop from '../Assets/newShop.jpg'
import AddshopForm from './Forms/AddshopForm'
const Addshop = props => {
    return (
        <div style={{background:"#242582"}}>
            <div className='signup-logo ml-2'>
                Shop-Aisle
            </div>
            <div className='d-flex signup-page'>
                <div className='signup'>
                    <img src={newShop} className="w-100" alt="signup pic" />
                </div>
                <div className='signup-form'>
                    <AddshopForm stateAccess = {props.stateAccess}/>
                </div>
            </div>
        </div>
    )
}

export default Addshop