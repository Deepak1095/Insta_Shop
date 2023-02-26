import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { Box, Text, Flex, Select, Button,Image,SimpleGrid,Container} from "@chakra-ui/react";
import Footer from "../Components/Footer";
import { BsCartPlusFill } from "react-icons/bs";

function SingleUserPage() {

    const [data, setData] = useState({});
    const [quantity, setQuantity] = useState(1);
    const params = useParams();
    const fetchHandleData = (id) => {
        axios
        .get(`https://insta-shop.onrender.com/men_shirts/${id}`)
      .then((res)=>{setData(res.data)})
      .catch((err)=>{console.log(err)})
        }
    
    useEffect(() => {
        fetchHandleData(params.id);
    }, [params.id])

    const addToCart=()=>{
      
        
       let cartData=JSON.parse(localStorage.getItem("cart_data"))||[]
       let obj={
        "id":Math.random(),
        "Price":data.price,
        "img":data.img,
        "about":data.title
       }
       cartData.push(obj)
localStorage.setItem("cart_data", JSON.stringify(cartData));
         }
    return (
       
        <div>
             <Navbar /> 

             <Container
      maxW={{ base: "90%", sm: "90%", md: "60%" }}
      color="#262626"
      marginY="30px"
      paddingX="0"
    >
        
  <SimpleGrid columns={[1, 1, 1, 2, 2, 2]} spacing={10}>
        <Box>
      <Image
        src={data.img}
        width="100%"
        alt="Dan Abramov"
        border="1px solid #dadcdf"
      />
    </Box>

     <Box>
   <Text fontSize="xl" marginBottom="10px">
     {data.title}
   </Text>
   <Text fontSize="2xl" color="#c7202c" marginBottom="10px">
     $ {data.price}
   </Text>
   <Text fontSize="1.5xl" color="#c7202c" marginBottom="30px">
     {data.reward}
   </Text>
   <Flex justifyContent="space-between">
     <Select
       placeholder="Quantity: 1"
       value={quantity}
       onChange={(e) => setQuantity(+e.target.value)}
       size="sm"
       width="45%"
     >
       <option value="1">Quantity: 1</option>
       <option value="2">Quantity: 2</option>
       <option value="3">Quantity: 3</option>
       <option value="4">Quantity: 4</option>
       <option value="5">Quantity: 5</option>
       <option value="6">Quantity: 6</option>
       <option value="7">Quantity: 7</option>
       <option value="8">Quantity: 8</option>
       <option value="9">Quantity: 9</option>
       <option value="10">Quantity: 10</option>
     </Select>
     <Button
      colorScheme="green"
      size="sm"
      leftIcon={<BsCartPlusFill />}
      width="45%"
      onClick={addToCart} ><Link to="/cart">
       Add to Cart
       </Link>
     </Button>
   </Flex>
 </Box>
     
 </SimpleGrid>
    
    </Container>




        <Footer />
    </div>)
}
export default SingleUserPage;