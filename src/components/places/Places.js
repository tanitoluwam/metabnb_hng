
import React from 'react';
import linearImage from "../../assets/images/linear-logo.png";
import { Button } from '../button/Button';
import { Card } from '../card/Card';
import placeOne from "../../assets/images/place-1.png"
import placeTwo from "../../assets/images/place-2.png"
import placeThree from "../../assets/images/place-3.png"
import placeFour from "../../assets/images/place-4.png"
import placeFive from "../../assets/images/place-5.png"
import placeSix from "../../assets/images/place-6.png"
import placeSeven from "../../assets/images/place-7.png"
import placeEight from "../../assets/images/place-8.png"
import placeNine from "../../assets/images/place-9.png"
import placeTen from "../../assets/images/place-10.png"
import placeEleven from "../../assets/images/place-11.png"
import placeTwelve from "../../assets/images/place-12.png"
import imgOne from "../../assets/images/Frame-1.png"
import imgTwo from "../../assets/images/Frame-2.png"
import imgThree from "../../assets/images/Frame-3.png"
import imgFour from "../../assets/images/Frame-4.png"


export const Places = () => {
  return (
    <div className='container'>
        <ul className='d-none  d-md-flex justify-content-between align-items-center places_link mt-5'>
            <li>Resturant</li>
            <li>cottage</li>
            <li>castle</li>
            <li>fantast city</li>
            <li>beach</li>
            <li>carbins</li>
            <li>off-grid</li>
            <li>Farm</li>
            <Button style="btn places_btn d-flex  px-4 align-items-center">
            <span>Location</span>
            <img src={linearImage} alt="" />
            </Button>
        </ul>
        <div className='d-flex flex-wrap justify-content-betweeen mb-5 mt-2'>
        <Card picture={placeOne}/>
        <Card picture={placeTwo}/>
        <Card picture={placeThree}/>
        <Card picture={placeFour}/>
        <Card picture={imgOne}/>
        <Card picture={imgTwo}/>
        <Card picture={imgThree}/>
        <Card picture={imgFour}/>
        <Card picture={placeFive}/>
        <Card picture={placeSix}/>
        <Card picture={placeSeven}/>
        <Card picture={placeEight}/>
        <Card picture={placeNine}/>
        <Card picture={placeTen}/>
        <Card picture={placeEleven}/>
        <Card picture={placeTwelve}/>

        </div>
    </div>
  )
}
