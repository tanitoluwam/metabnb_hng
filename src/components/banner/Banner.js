import React from 'react'
import tokenImage from "../../assets/images/mb-token.png"
import metaMask from "../../assets/images/metamask.png"
import openSea from "../../assets/images/opensea.png"

export const Banner = () => {
  return (
    <div className='banner d-flex justify-content-center align-items-center py-2'>
        <img src={tokenImage} alt="" />
        <img src={metaMask} alt="" />
        <img src={openSea} alt="" />
    </div>
  )
}
