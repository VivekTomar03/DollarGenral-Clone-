import React, { useContext, useEffect, useState } from 'react';
import { AuthConetxt } from '../Context/AuthContext';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Flex,
    Card,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  
  } from '@chakra-ui/react';
import {Link as LinkAs} from "react-router-dom"
const CartPage = () => {
   const{data ,setfinalprice} = useContext(AuthConetxt)
var [add ,setadd] = useState(1)



var Price ;
 
   const totalprice = (price )=>{
    
    Price = price
    setfinalprice(Price)
   }
 const  handledelete=(item,index)=>{
    data.pop()
    
 }

  return (   
        <Center margin={35}>
        <Flex  gap={50}> 
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            {
                data.map((item,index)=>{
                  return  <div key={item.id}>
                   
                    <Avatar
              size={'xl'}
              src={
                item.image
              }
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
             {item.name}
            </Heading>

          
           
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              Rs : {item.price }
             
            </Text>
            
            <Text
              textAlign={'center'}
              color={"black"}
              px={3} fontWeight="semibold">
                {item.count}
               
            </Text>
           { totalprice(item.price * item.count)}
            <Button onClick={()=>{
              
               setadd(item.count++)
            }} marginRight="5px"  bg={"black"} color="white"   isDisabled={item.count===5}> +</Button>
    
           <Button isDisabled={item.count===1} onClick={()=>{
               setadd(item.count--)
            }} bg={"black"} color="white"> -</Button>
    
            <Stack mt={8} direction={'row'} spacing={4} >
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}
                
                 onClick={()=>{
                 handledelete(item,index)
                 }}
                >
               Remove
              </Button>
              <LinkAs to={"/buynow"}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Buy Now
              </Button>
              </LinkAs>
            </Stack>
                    </div>
                })
            }

            
          </Box>
          <Box  >
                 <Card padding={20}>
                 <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href='product'>Product</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='productvitamins'>Vitamins</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>CartPage</BreadcrumbLink>
              </BreadcrumbItem>

            
            </Breadcrumb>


                  <Heading>Your Cart Value</Heading>
                  <Text fontWeight={"bold"}>{Price}</Text>
                 <LinkAs to={"/buynow"}>
                 <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}  padding="10px" w={"100px"}>
                Buy Now
              </Button>
                 </LinkAs>
                 </Card>
            </Box>
        </Flex>
        </Center>
      );
  
}

export default CartPage;

  
