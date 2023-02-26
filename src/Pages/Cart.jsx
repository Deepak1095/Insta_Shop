import { border } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import Navbar from '../Components/Navbar';
import {Button } from "@chakra-ui/react"

const Cart = () => {
    let cartData=JSON.parse(localStorage.getItem("cart_data"))||[]
    let totalCart=cartData.length;

  const deletebtn=(id)=>{
    cartData.splice(id,1)
   localStorage.setItem("cart_data", JSON.stringify(cartData));
   window.location.reload()
   }
   let Price=0
   function price(data){
       data.forEach(function(el){
        let p=Number(el.quantity)*Number(el.Price)
           Price=Price+p
           console.log(Price)
            return Price
       })
   }
   
   
  return (
    <div>
        <Navbar />
        <Button
      colorScheme="green"
      size="sm"
      margin="0% 0% 0% 80%">
      <Link to="/MenShirt">Contiune Shopping</Link>
     </Button>
     <Button
     colorScheme="green"
      margin="0% 0% 0% 80%"
      isDisabled
     >
     Total Item : {totalCart}
     </Button>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}} >
         {cartData?.map(function(item){
         return  <div key={item.id} style={{border:"1px solid black",width:"70%",marginLeft:"10%"}}>
         <img src={item.img}  style={{width:"70%"}} />
         <h3>{item.title}</h3>
         <h3>Price :{item.Price}</h3>
         <button onClick={() => {deletebtn( item.id) }} style={{border:"1px solid black"}}>
            remove
          </button>
          {price(cartData)}
         </div>
         })}
         </div>
         <button style={{width:"70px",border:"1px solid green",margin:"2% 40%"}}><Link to="/payment">Payment</Link></button>
    </div>
  )
}

export default Cart