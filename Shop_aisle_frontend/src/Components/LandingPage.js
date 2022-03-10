import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShopCard from './ShopCard'
import HeroSection from './HeroSection'
import Nav from './Nav'
// import backpic from '../Assets/BackgroundPic.jpg'
const Content = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/api/shop/getShop").then(
      (response) => {
        console.log(response)
        setData(response.data)
      }
    )
  }, [])

  localStorage.clear()
  return (

    <div style={{ height: '100%', width: '100%', backgroundImage: "url('../Assets/BackgroundPic.jpg')" }}>
      {/* <Navigation /> */}
      <Nav/>
      <HeroSection />
      {
        data.map((shop) => {
          return (
            <ShopCard key={shop._id} name={shop.name} category={shop.category} location={shop.area} status={shop.status} id={shop._id} opening={shop.opening} closing={shop.closing} />
          )
        })
      }



    </div>
  )
}

export default Content