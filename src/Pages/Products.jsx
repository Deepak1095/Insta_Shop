
import {SimpleGrid, GridItem, Image, Box, Text, Button } from "@chakra-ui/react";
export function LendingProduct ({data}) {

  return (
    <div>
        <SimpleGrid
      columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      spacing={7}
      paddingY="20px"
      paddingX="5%"
    >
     {data?.map((item)=>(
        <GridItem border="1px solid #dadcdf" key={item.id}>
          <Image src={item.img} width="100%" />
          <Box padding="7px" minH="90px" >
            <Text fontSize="lg" color="#c7202c">
              Starting at {item.price}
            </Text>
            <Text fontSize="sm">
              {item.title}
            </Text>
            <Text fontSize="sm">
              {item.reward}
            </Text>
            <Text fontSize="sm" color="#4b678f">
              Free Shipping with $125 orders
            </Text>
          </Box>
       
      </GridItem>
      ))}
    </SimpleGrid>

    </div>
  )
}

