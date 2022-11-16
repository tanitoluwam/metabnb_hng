import React from 'react';
 import { Hero } from "../../components/hero/Hero"
 import { Banner } from "../../components/banner/Banner"
 import { Gallery } from "../../components/gallery/Gallery"
import { NftsSection } from '../../components/nftsSection/NftsSection';


export const Home = () => {
  return (
    <div>
    <Hero />
      <Banner />
      <Gallery />
      <NftsSection /> 
    </div>
  )
}
