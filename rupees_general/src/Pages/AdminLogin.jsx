import React, { useContext, useState } from 'react'
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
} from '@chakra-ui/react';

import { Link as AdminLink } from 'react-router-dom';
import { adminloginpost } from '../Api';
import { AuthConetxt } from '../Context/AuthContext';
const AdminLogin = () => {
 const [email , setemail] = useState('eve.holt@reqres.in')
 const [password , setpassword] = useState("cityslicka")
const{AdminLogin , adminAuth} = useContext(AuthConetxt)

 const handlesubmit = (e)=>{
  e.preventDefault()
  const obj = {
    email,
    password
  }
  fetchdataforadminlogin(obj)

  
 }
 

 const fetchdataforadminlogin = (obj)=>{
    adminloginpost(obj).then((res)=>{
        
            AdminLogin()
            console.log(res.data)
      
    })
 }
  return (
    <div>
      <div>

      </div>
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} padding="20px">
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Welcome Admin </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
           Please Use Your Credintial  To Login  ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form  onSubmit={handlesubmit}>
       
              <FormLabel>Email address</FormLabel>
              
              <Input type="email" placeholder='enter admin email'  name='email'  onChange ={(e)=> setemail(e.target.value)}/>
           
            
              <FormLabel>Password</FormLabel>
              <Input type="password"  placeholder='enter admin password' name='password'  onChange ={(e)=> setpassword(e.target.value)} />

              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              
        
              <Input
               bg={'blue.400'}
               color={'white'}
               _hover={{
                 bg: 'blue.500',
               }}
              type="submit"  value="SignIn"
               isDisabled ={adminAuth===true}
              />
            
            


            </form>
           <AdminLink to="/adminpage"> <Button 
             bg={'blue.400'}
             color={'white'}
             _hover={{
               bg: 'blue.500',
             }}
           isDisabled ={adminAuth===false}>Click To Redirect To Admin Portal</Button></AdminLink>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  )
}

export default AdminLogin
