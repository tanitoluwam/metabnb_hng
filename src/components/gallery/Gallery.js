import React from 'react'
import { Card } from '../card/Card'
import imgOne from "../../assets/images/Frame-1.png"
import imgTwo from "../../assets/images/Frame-2.png"
import imgThree from "../../assets/images/Frame-3.png"
import imgFour from "../../assets/images/Frame-4.png"
import imgFive from "../../assets/images/Frame-5.png"
import imgSix from "../../assets/images/Frame-6.png"
import imgSeven from "../../assets/images/Frame -7.png"
import imgEight from "../../assets/images/Frame-8.png"

export const Gallery = () => {
  return (
    <div className='container'>
        <h1 className='gallery-header text-center pt-5 pb-4'>Inspiration for your next adventure</h1>
        <div className='d-flex flex-wrap justify-content-betweeen'>
          <Card 
          picture={imgOne}/>
          <Card 
          picture={imgTwo}/>
          <Card 
          picture={imgThree}/>
          <Card 
          picture={imgFour}/>
          <Card 
          picture={imgFive}/>
          <Card 
          picture={imgSix}/>
          <Card 
          picture={imgSeven}/>
          <Card 
          picture={imgEight}/>
        </div>
    </div>
  )
}
