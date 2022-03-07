import React from 'react'
import AddshopForm from './Forms/AddshopForm'
const Addshop = props => {
    return (
        <div>
            <div className='signup-logo ml-2 mb-3'>
                Shop-Aisle
            </div>
            <div className='d-flex signup-page'>
                <div className='signup-form'>
                    <AddshopForm stateAccess={props.stateAccess} />
                </div>
            </div>
        </div>
    )
}

export default Addshop