import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShopCard from './ShopCard'
import HeroSection from './HeroSection'
import {Nav} from './Nav'
import loader from '../Assets/loader.svg'
// import backpic from '../Assets/BackgroundPic.jpg'
const Content = () => {
  const [data, setData] = useState([])
  const [searchLoader , setSearchLoader] = useState(false);
  useEffect(() => {
    setSearchLoader(true)
    axios.get("http://localhost:5000/api/shop/getShop").then(
      (response) => {
        console.log(response)
        setData(response.data)
        setSearchLoader(false)
      }
    )
  }, [])

  localStorage.clear()
  return (
    (searchLoader) ?         
    <div className="d-flex justify-content-center" >
    <img src={loader} alt = "loader" style={{color:'white'}}/>
    </div>:
    <div style={{ height: '100%', width: '100%', backgroundImage: "url('../Assets/BackgroundPic.jpg')" }}>
      {/* <Navigation /> */}
      <Nav/>
      <HeroSection />
      {
       data ? data.map((shop) => {
          return (
            <ShopCard key={shop._id} name={shop.name} category={shop.category} location={shop.area} status={shop.status} id={shop._id} opening={shop.opening} closing={shop.closing} creator = {shop.creator}/>
          )
        }) : <h1 style={{color:'white'}}>Fuck u</h1>
      }



    </div>
  )
}

export default Content