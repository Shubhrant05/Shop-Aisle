import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import shopClose from '../Assets/closed.svg'
import shopOpen from '../Assets/open.svg'


const ShopCard = props => {
    const [shopStatus, setShopStatus] = useState(shopOpen)


    //THIS IS HOW YOU COMPARE TIME FROM A STRING COMING FROM BACKEND 

    let open = props.opening.split(":")
    let close = props.closing.split(":")

    let present = new Date()
    let openingtime = new Date();
    openingtime.setHours(open[0], open[1], "00")
    let closingtime = new Date();
    closingtime.setHours(close[0], close[1], "00")

    let isShopOpen = (present >= openingtime && present <= closingtime)

    useEffect(() => {
        isShopOpen ? setShopStatus(shopOpen) : setShopStatus(shopClose)

    },[isShopOpen])

    return (
        <>
            <div className='d-flex justify-content-center column '>
                <Card style={{ width: '48rem' }} className='m-3 shadow p-3 mb-3 bg-white rounded'>
                    <Card.Body style={{ boxShadow: "5px 5px 5px grey", display: "flex" }}>
                        <div className='w-85'>
                            <Card.Title className='title' style={{fontSize:"2rem",fontWeight:"700"}}>{props.name}</Card.Title>
                            <div className='d-flex row justify-content-evenly mb-4 details'>
                                <div>
                                    <Card.Subtitle className="mt-3 text-muted" style={{ fontSize: "1.3rem" }}>Shop-type </Card.Subtitle>
                                    <div className="Shop-type">
                                        {props.category}
                                    </div>
                                </div>
                                <div>
                                    <Card.Subtitle className="mt-3 text-muted" style={{ fontSize: "1.3rem" }}>Reach at </Card.Subtitle><div className="Shop-type">{props.location}</div>
                                </div>
                                <div>
                                    <Card.Subtitle className="mt-3 text-muted" style={{ fontSize: "1.3rem" }}>Working Hours </Card.Subtitle><div className="Shop-type">{
                                        open[0] < 12 ? props.opening + "AM - " : (parseInt(props.opening) - 12).toString() + ":" + open[1] + "PM - "}
                                        {close[0] < 12 ? props.closimg + "AM" : (parseInt(props.closing) - 12).toString() + ":" + close[1] + "PM"}
                                    </div>
                                    {console.log(props.opening, props.closing)}
                                </div>
                            </div>

                            <div className="status-mb mx-auto mb-3">
                                <img src={shopStatus} alt="shop open" className="w-50 mt-3" />
                            </div>

                            <div className='mx-auto d-flex justify-content-between'>

                                <Button variant="danger w-50 hover-delete shadow-none" style={{ marginRight: "1rem", fontSize: "1.3rem", fontWeight: "700", fontFamily: "sans-serif" }} onClick={() => { props.delete(props.id) }}><AiFillDelete className="pb-1 f-1" />Delete</Button>

                                <Button variant="primary w-50 hover-edit shadow-none" style={{ fontSize: "1.3rem", fontWeight: "700", fontFamily: "sans-serif" }} ><AiFillEdit className="pb-1 f-1" />Edit</Button>
                            </div>
                        </div>
                        <div className="status-lp">
                            <img src={shopStatus} alt="shop open" className="w-75" />
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ShopCard