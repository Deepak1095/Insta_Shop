import { SimpleGrid} from "@chakra-ui/react";
import { GridItem, Image, Box, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Jewelry(){
  const [data,setData]=useState([])
  const getData=()=>{
axios
  .get(`https://insta-shop.onrender.com/jewelry`)
.then((res)=>{setData(res.data)})
.catch((err)=>{console.log(err)})
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
         <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={7}
      paddingY="20px"
    >
     {data?.map((item)=>(
        <GridItem border="1px solid #dadcdf">
        {/* <RouterLink to={`${pathname}/${id}`}> */}
          <Image src={item.men_prod_img} alt={item.men_prod_title} width="100%" />
          <Box padding="7px" minH="130px">
            <Text fontSize="lg" color="#c7202c">
              Starting at {item.men_prod_price}
            </Text>
            <Text fontSize="sm" noOfLines={2}>
              {item.men_prod_title}
            </Text>
          </Box>
        {/* </RouterLink> */}
        <Button
          borderRadius="0"
          width="100%"
        //   onClick={handleAddToCart}
        //   isLoading={loading}
        >
          Add to Cart
        </Button>
      </GridItem>
      ))}
    </SimpleGrid>
  
     
     
    </div>
  );
};


