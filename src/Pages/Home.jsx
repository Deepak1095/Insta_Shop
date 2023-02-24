import React from 'react'
import {SimpleGrid, GridItem, Image, Box, Text, Button } from "@chakra-ui/react";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { LendingProduct } from './Products';
const Home = () => {
const Isotonix=[
    {   "id":1,
         "img": "https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?plain&size=600x600",
         "title": "IsotonixÂ® Vitamin D with K2",
         "price": "$36.95 - $84.95",
         "reward": "up to $1.70 / 2% Cashback"
       },
       {
         "id":2,
         "img": "https://img.shop.com/Image/250000/250100/250199/products/1332818472.jpg?plain&size=600x600",
         "title": "DNA Miracles IsotonixÂ® Immune",
         "price": 23.95,
         "reward": "$0.48 / 2% Cashback"
       },
       {
         "id":3,
         "img": "https://img.shop.com/Image/210000/214200/214267/products/559010729.jpg?plain&size=600x600",
         "title": "ClearShieldÂ® Maximum Protection and Hydration",
         "price": "$14.95 - $24.95",
         "reward": "up to $0.50 / 2.01% Cashback"
       },
       {
         "id":4,
         "img": "https://img.shop.com/Image/210000/214100/214196/products/561800360.jpg?plain&size=600x600",
         "title": "IsotonixÂ® Vitamin C",
         "price": "$17.95 - $38.95",
         "reward": "up to $0.78 / 2.01% Cashback"
       }
     ]
const Motives=[
    {
     "id":1,
     "img": "https://img.shop.com/Image/240000/243300/243380/products/1965483015.jpg?plain&size=600x600",
     "title": "MotivesÂ® Lash & Brow Serum",
     "price": 40,
     "reward": "$0.80 / 2% Cashback"
   },
   {
    "id":2,
     "img": "https://img.shop.com/Image/240000/243300/243380/products/1768096339.jpg?plain&size=600x600",
     "title": "MotivesÂ® Boss Babe Palette",
     "price": 50.25,
     "reward": "$1.01 / 2.01% Cashback"
   },
   {
    "id":3,
     "img": "https://img.shop.com/Image/240000/243300/243380/products/1939204281.jpg?plain&size=600x600",
     "title": "MotivesÂ® Gel-ous Brow Gel",
     "price": 23.25,
     "reward": "$0.47 / 2.02% Cashback"
   },
   {
    "id":4,
     "img": "https://img.shop.com/Image/240000/243300/243380/products/1487570156.jpg?plain&size=600x600",
     "title": "MotivesÂ® Fiber Lush Mascara",
     "price": 30.75,
     "reward": "$0.62 / 2.02% Cashback"
   }]
const Fixx=[
    {
        "id":1,
    "img": "https://img.shop.com/Image/210000/214200/214202/products/1964430726.jpg?plain&size=600x600",
    "title": "Fixx Argan Oil Shampoo",
    "price": 20.95,
    "reward": "$0.46 / 2% Cashback"
  },
  {
    "id":2,
    "img": "https://img.shop.com/Image/210000/214200/214202/products/1964430737.jpg?plain&size=600x600",
    "title": "Fixx Argan Oil Conditioner",
    "price": 23.95,
    "reward": "$0.46 / 2% Cashback"
  },
  {
    "id":3,
    "img": "https://img.shop.com/Image/210000/214200/214202/products/1959550818.jpg?plain&size=600x600",
    "title": "Fixx Thick Hair Shampoo & Conditioner",
    "price": 28.95,
    "reward": "$0.46 / 2% Cashback"
  },
  {
    "id":4,
    "img": "https://img.shop.com/Image/210000/214200/214202/products/1961298297.jpg?plain&size=600x600",
    "title": "Fixx Argan Oil Conditioner- Limited Edition Special Buy One, Get One Free",
    "price": 22.95,
    "reward": "$0.46 / 2% Cashback"
  }
]
const Lumiare=[
    {
      "id":1,
      "img": "https://img.shop.com/Image/240000/248600/248698/products/1958498951.jpg?plain&size=600x600",
      "title": "LumiÃ¨re de VieÂ® Revive & Reset Facial Mist (Soothing Toner)",
      "price": 25.75,
      "reward": "$0.52 / 2.02% Cashback"
    },
    {
      "id":2,
      "img": "https://img.shop.com/Image/240000/248600/248698/products/1958498942.jpg?plain&size=600x600",
      "title": "LumiÃ¨re de VieÂ® P.M. Eye Lift (Eye Serum)",
      "price": 39.95,
      "reward": "$0.80 / 2% Cashback"
    },
    {
      "id":3,
      "img": "https://img.shop.com/Image/270000/274000/274036/products/1956507645.jpg?plain&size=600x600",
      "title": "LumiÃ¨re de VieÂ® Hommes Gift Set",
      "price": 40,
      "reward": "$0.80 / 2% Cashback"
    },
    {
      "id":4,
      "img": "https://img.shop.com/Image/240000/248600/248698/products/1849034699.jpg?plain&size=600x600",
      "title": "LumiÃ¨re de VieÂ® Lumi-Stick",
      "price": 7.5,
      "reward": "$0.15 / 2% Cashback"
    }
   ]
const Jewelry=[
    {
      "id":1,
      "img": "https://img.shop.com/Image/280000/282000/282022/products/1954593897.jpg?plain&size=600x600",
      "title": "SASHA â Double Stud Set",
      "price": 51.95,
      "reward": "$1.04 / 2% Cashback"
    },
    {
      "id":2,
      "img": "https://img.shop.com/Image/280000/282000/282022/products/1954593899.jpg?plain&size=600x600",
      "title": "GABRIELLA - Simulated Diamond Tennis Bracelet",
      "price": 149.95,
      "reward": "$3.00 / 2% Cashback"
    },
    {
      "id":3,
      "img": "https://img.shop.com/Image/280000/282000/282022/products/1954593919.jpg?plain&size=600x600",
      "title": "LORENA â Dual Stud Chain Earrings",
      "price": 53.95,
      "reward": "$1.08 / 2% Cashback"
    },
    {
      "id":4,
      "img": "https://img.shop.com/Image/280000/282000/282022/products/1954593918.jpg?plain&size=600x600",
      "title": "GENEVIEVE - Dual Stone Ring",
      "price": 46.95,
      "reward": "$0.94 / 2% Cashback"
    }
   ] 
const Health=[
    {
      "id":1,
      "img": "https://img.shop.com/Image/210000/214100/214199/products/561800368.jpg?plain&size=600x600",
      "title": "Heart Healthâ¢ Essential Omega III Fish Oil with Vitamin E",
      "price": "$40.00 - $69.95",
      "reward": "up to $1.40 / 2% Cashback"
    },
    {
      "id":2,
      "img": "https://img.shop.com/Image/210000/214100/214199/products/561800367.jpg?plain&size=600x600",
      "title": "Heart Healthâ¢ Advanced Co-Q10 (Cardiovascular & Immune Support)",
      "price": 55.95,
      "reward": "$1.12 / 2% Cashback"
    },
    {
      "id":3,
      "img": "https://img.shop.com/Image/210000/214100/214199/products/561800370.jpg?plain&size=600x600",
      "title": "Heart Healthâ¢ System",
      "price": 112,
      "reward": "$2.24 / 2% Cashback"
    },
    {
      "id":4,
      "img": "https://img.shop.com/Image/210000/214100/214199/products/561800369.jpg?plain&size=600x600",
      "title": "Heart Healthâ¢ Advanced LipiTrimÂ® Ultra (Cholesterol and Triglyceride Support Formula)",
      "price": 49.95,
      "reward": "$1.00 / 2% Cashback"
    }
   ]
  return (
    <div>
        <Navbar />
        <h1 style={{fontSize:"30px",marginLeft:"5%"}}>Health And Nutrition</h1>
        <LendingProduct data={Isotonix} />
        <h1 style={{fontSize:"30px",marginLeft:"5%"}}>Luxury Beauty by Motives</h1>
        <LendingProduct data={Motives} />
       <h1 style={{fontSize:"30px",marginLeft:"5%"}}>Healthy Hair with Fixx</h1>
        <LendingProduct data={Fixx} />
        <h1 style={{fontSize:"30px",marginLeft:"5%"}}>Skin Care from Lumière de Vie</h1>
        <LendingProduct data={Lumiare} />
        <h1 style={{fontSize:"30px",marginLeft:"5%"}}>Shine in Layered Jewelry</h1>
        <LendingProduct data={Jewelry} />
        <h1 style={{fontSize:"30px",marginLeft:"5%"}}>Heart Health Supplements</h1>
        <LendingProduct data={Health} />
        {/* <Footer /> */}
    </div>
  )
}

export default Home