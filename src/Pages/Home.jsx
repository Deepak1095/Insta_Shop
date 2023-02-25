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
   var data =
 [
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940910013.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Epic Easy Care Nailshead Mens Big and Tall Long Sleeve Dress Shirt",
            "men_prod_price": "$75.00 - $90.00",
            "reward": "up to $5.40 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940910020.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Versatech Multi Check Stretch Mens Big and Tall Long Sleeve Dress Shirt",
            "men_prod_price": 95,
            "reward": "$5.70 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500311.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Versatech Multi Check Stretch Mens Long Sleeve Dress Shirt",
            "men_prod_price": 95,
            "reward": "$5.70 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940910018.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Easy Care Stretch Gingham Mens Big and Tall Long Sleeve Dress Shirt",
            "men_prod_price": 105,
            "reward": "$6.30 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1943601116.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Stretch Oxford Mens Short Sleeve Dress Shirt",
            "men_prod_price": 100,
            "reward": "$6.00 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940909969.jpg?plain&size=400x400",
            "men_prod_title": "Clique Men's Malmo Pique Polo Shirt",
            "men_prod_price": 30,
            "reward": "$1.80 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939530734.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Versatech Tattersall Stretch Mens Long Sleeve Dress Shirt",
            "men_prod_price": 95,
            "reward": "$5.70 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940909989.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Advantage Tipped Polo Shirt",
            "men_prod_price": 70,
            "reward": "$4.20 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500270.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Big & Tall CB DryTec Northgate Polo Shirt",
            "men_prod_price": "$50.00 - $55.00",
            "reward": "up to $3.30 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1943601120.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Stretch Oxford Stripe Mens Long Sleeve Dress Shirt",
            "men_prod_price": 100,
            "reward": "$6.00 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836724.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Epic Easy Care Nailshead Mens Long Sleeve Dress Shirt",
            "men_prod_price": "$75.00 - $90.00",
            "reward": "up to $5.40 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836702.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Epic Easy Care Nailshead Mens Short Sleeve Dress Shirt",
            "men_prod_price": 75,
            "reward": "$4.50 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500274.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Versatech Pinstripe Stretch Mens Long Sleeve Dress Shirt",
            "men_prod_price": 95,
            "reward": "$5.70 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939530736.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Big & Tall Windward Jigsaw Print Short Sleeve Shirt",
            "men_prod_price": 90,
            "reward": "$5.40 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940909975.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Long-Sleeve Advantage Jersey Polo Shirt",
            "men_prod_price": 85,
            "reward": "$5.10 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500292.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Long Sleeve Mens Big & Tall Epic Easy Care Mini Herringbone Shirt",
            "men_prod_price": "$69.00 - $75.00",
            "reward": "up to $4.50 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940910042.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Epic Easy Care Fine Twill Mens Long Sleeve Dress Shirt",
            "men_prod_price": "$75.00 - $85.00",
            "reward": "up to $5.10 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836704.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's L/S Epic Easy Care Mini Herringbone Shirt",
            "men_prod_price": "$75.00 - $90.00",
            "reward": "up to $5.40 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940910009.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Epic Easy Care Nailshead Mens Big and Tall Short Sleeve Dress Shirt",
            "men_prod_price": "$75.00 - $80.00",
            "reward": "up to $4.80 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836687.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Soar Windowpane Plaid Short Sleeve Shirt",
            "men_prod_price": 110,
            "reward": "$6.60 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836766.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Reach Oxford Button Front Short-Sleeve Shirt",
            "men_prod_price": 85,
            "reward": "$5.10 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500277.jpg?plain&size=400x400",
            "men_prod_title": "Forge Polo Tailored Fit Shirt",
            "men_prod_price": 70,
            "reward": "$4.20 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836722.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Stretch Oxford Mens Long Sleeve Dress Shirt",
            "men_prod_price": "$100.00 - $105.00",
            "reward": "up to $6.30 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836735.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Strive Shadow Plaid Short Sleeve Shirt",
            "men_prod_price": 100,
            "reward": "$6.00 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1943601103.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Stretch Oxford Mens Big and Tall Short Sleeve Dress Shirt",
            "men_prod_price": "$95.00 - $100.00",
            "reward": "up to $6.00 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500310.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Anchor Double Check Plaid Mens Tailored Fit Shirt",
            "men_prod_price": 95,
            "reward": "$5.70 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940910041.jpg?plain&size=400x400",
            "men_prod_title": "Clique Men's Helsa V-neck Shirt",
            "men_prod_price": 47.5,
            "reward": "$2.85 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836760.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Epic Easy Care Fine Twill Mens Big and Tall Dress Shirt",
            "men_prod_price": "$75.00 - $85.00",
            "reward": "up to $5.10 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500261.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Anchor Multi Color Plaid Mens Tailored Fit Shirt",
            "men_prod_price": 95,
            "reward": "$5.70 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836763.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's L/S Tailored Fit Spread Nailshead Shirt",
            "men_prod_price": 75,
            "reward": "$4.50 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836718.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Soar Windowpane Check Tailored Fit Shirt",
            "men_prod_price": 115,
            "reward": "$6.90 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500305.jpg?plain&size=400x400",
            "men_prod_title": "Forge Polo Tonal Stripe Tailored Fit Shirt",
            "men_prod_price": 75,
            "reward": "$4.50 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939530730.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Strive Three Bars Jacquard Short Sleeve Shirt",
            "men_prod_price": 100,
            "reward": "$6.00 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939530729.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Windward Jigsaw Print Short Sleeve Shirt",
            "men_prod_price": 90,
            "reward": "$5.40 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940909978.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's CB DryTec Northgate Polo Shirt",
            "men_prod_price": "$50.00 - $55.00",
            "reward": "up to $3.30 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836761.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Big & Tall Reach Oxford Button Front Shirt",
            "men_prod_price": "$100.00 - $110.00",
            "reward": "up to $6.60 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939530737.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Versatech Geo Dobby Stretch Mens Long Sleeve Dress Shirt",
            "men_prod_price": 90,
            "reward": "$5.40 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500267.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Mens Anchor Double Check Shirt",
            "men_prod_price": 95,
            "reward": "$5.70 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940910045.jpg?plain&size=400x400",
            "men_prod_title": "Clique Men's Fairfax Polo Shirt",
            "men_prod_price": 30,
            "reward": "$1.80 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940909966.jpg?plain&size=400x400",
            "men_prod_title": "Clique Men's Malmo Snag Proof Zip Polo Shirt",
            "men_prod_price": 30,
            "reward": "$1.80 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836721.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Easy Care Stretch Gingham Mens Long Sleeve Dress Shirt",
            "men_prod_price": 105,
            "reward": "$6.30 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940910003.jpg?plain&size=400x400",
            "men_prod_title": "Clique Men's Ice Sport Polo Shirt",
            "men_prod_price": "$30.00 - $32.50",
            "reward": "up to $1.95 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1951836764.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Men's Tailored Fit Nailshead Shirt",
            "men_prod_price": "$75.00 - $90.00",
            "reward": "up to $5.40 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1939500315.jpg?plain&size=400x400",
            "men_prod_title": "Cutter & Buck Mens Forge Polo Particle Print Polo Shirt",
            "men_prod_price": 85,
            "reward": "$5.10 / 6% Cashback"
          },
          {
            "men_prod_img": "https://img.shop.com/Image/290000/291600/291696/products/1940909962.jpg?plain&size=400x400",
            "men_prod_title": "Clique Men's Evans Polo Shirt",
            "men_prod_price": 25,
            "reward": "$1.50 / 6% Cashback"
          }
        ]



let i=1
data.forEach(object => {
  object.id = i++;
});

console.log(data)
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