import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    HStack,
    PinInput,
    PinInputField,
   
  } from '@chakra-ui/react';
import React from 'react';



const BuyNow = () => {

 const handlesub = (e)=>{
   e.preventDefault()
   
 }


  return (
    <>
   
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Checkout Your Product</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Enter Details Below✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form  onSubmit={handlesub}>
            <FormControl id="email">
              <FormLabel>First Name</FormLabel>
              <Input type={"text"} placeholder="enter first name"/>
              <FormLabel>Last Name</FormLabel>
              <Input type={"text"} placeholder="enter last name"/>
              <FormLabel>Email address</FormLabel>
              <Input type="email"  placeholder='enter your mail'/>
              <FormLabel>Conatct Number</FormLabel>
              <Input type="number"  placeholder='enter your contact'/>
              <FormLabel>Card Number</FormLabel>
              <Input type="number"  placeholder='enter your Card number'/>
              <FormLabel>Conatct Number</FormLabel>
              <Input type="number"  placeholder='enter your contact'/>
                   <HStack marginTop={3}>
             <FormLabel>CVV</FormLabel>
                <PinInput otp>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    
                </PinInput>
                </HStack>
             <Link href='/submissionpage'> <Button  marginTop={3}  _hover="yellow" color={"white"} bg="black">Procced To Check Out</Button></Link>
            </FormControl>
            
            </form>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
}

export default BuyNow;
