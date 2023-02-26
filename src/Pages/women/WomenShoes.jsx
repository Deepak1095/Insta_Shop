import { SimpleGrid} from "@chakra-ui/react";
import { GridItem, Image, Box, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import Navbar from "../../Components/Navbar";
import {Link as LinkRouter} from "react-router-dom"
export default function WomenShoes(){
  const [page, setPage] = useState(1);
  const [data,setData]=useState([])
  const getData=()=>{
axios
  .get(`https://insta-shop.onrender.com/women_shoes`)
.then((res)=>{setData(res.data)})
.catch((err)=>{console.log(err)})
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
    <Navbar />
         <Pagination
     currentPage={page}
     total={4}
     onChange={(val) => setPage(val)}
   />
       <SimpleGrid
    columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
    spacing={7}
    paddingY="20px"
  >

   {data?.map((item)=>(
      <GridItem border="1px solid #dadcdf" key={item.id}>
        <LinkRouter  to={`/MenShirt/${item.id}`}>
        <Image src={item.img} alt={item.title} width="100%" />
        <Box padding="7px" minH="130px">
          <Text fontSize="lg" color="#c7202c">
            Starting at ${item.price}
          </Text>
          <Text fontSize="sm" noOfLines={2}>
            {item.title}
          </Text>
          <Text fontSize="sm">
            {item.reward}
          </Text>
          <Text fontSize="sm" color="#4b678f">
            Free Shipping with $125 orders
          </Text>
        </Box>
        </LinkRouter>
      <Button
        borderRadius="0"
        width="100%"
      >
        Add to Cart
      </Button>
    </GridItem>
    ))}
   
  </SimpleGrid>

   
   
  </div>
  );
};


