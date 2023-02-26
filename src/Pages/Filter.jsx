import {Button} from "@chakra-ui/react"
export function FilterData({data,toggle,setToggle}){
  
    const sortLH=()=>{
        data.sort(function(a,b){
             return a.price-b.price
           })
        console.log(data)
           setToggle(!toggle)
        }
        const sortHL=()=>{
             data.sort(function(a,b){
                  return b.price-a.price
                })
             console.log(data)
                setToggle(!toggle)
             }
    
   
        return (
            <div style={{display:"flex"}}>
                        <Button 
                        isDisabled={toggle}
                        colorScheme="red" 
                        onClick={sortLH}
                        >sort low to high</Button>
        
                        <Button
                         isDisabled={!toggle}
                        colorScheme="red"
                         onClick={sortHL}
                         >sort high to low</Button>
            </div>
        )
}