import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    useDisclosure,
    Divider,
    GridItem,
    Text,
    Image,
  } from '@chakra-ui/react'
 import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getdatavitamins } from '../Api'

 export default function Filter({setorder}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  const [searchdata , setsearchdata] = useState("")
const[data , setdata] = useState([])

        const fetchdata = (searchdata)=>{
            getdatavitamins(searchdata).then((res)=>{
                setdata(res.data)
            })
        }

       const handleSearch = ()=>{
        fetchdata(searchdata)
       }
console.log(data)
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}  width={100}>
         Filter
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filter Product</DrawerHeader>
  
            <DrawerBody >
            <Button display='flex'
                        alignItems='center'
                        justifyContent='center'
                        width='100%'
     colorScheme='yellow' marginBottom={8}
      onClick={()=> setorder("asc")}
     >Sort By Ascending </Button>
           
           
            <Button 
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='100%'
            colorScheme='yellow'  marginBottom={8}
            onClick={()=> setorder("desc")}
            >Sort By Descending </Button>
             <Button 
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='100%'
            colorScheme='yellow'  marginBottom={8}
            onClick={()=> setorder("")}
            >Reset</Button>
         <Divider variant="solid" orientation='horizontal' colorScheme={"blue"} size="20px"/>

              <Input type={"text"} placeholder="Search Product" onChange={(e)=> setsearchdata(e.target.value)}/>
               <Button onClick={handleSearch} marginBottom="20px">Search</Button>
               <Divider variant="solid" orientation='horizontal' colorScheme={"blue"} size="20px"/>
               
                {
                       data.length>0?
                  

                        data.map((item)=>(
                 
                            <GridItem boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} padding="10px">
                             <Link href={`product_info/${item.id}`}> <Image marginLeft="30px" src={item.image} width="200px" height={150}/></Link>
                              <Text>{item.name.substring(0, 30)}</Text>
                              <Text>⭐⭐⭐⭐{item.rating}</Text> 
                              <Text>Rs : {item.price}</Text>
                              <Button bg={"yellow"}>Add Cart</Button>
                            </GridItem>
                          
                        )) :
                        <Text>Searching Product....</Text>
                }
          
          
            </DrawerBody>
          
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }