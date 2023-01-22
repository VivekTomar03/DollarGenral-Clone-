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
import { userLoginGet } from '../Api';
import { AuthConetxt } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Link as AdminLink } from 'react-router-dom';



const Login = () => {
const {UserLogin }  = useContext(AuthConetxt)

const[email ,setemail] = useState("")
const [password , setpassword] = useState("")
const[success , setsuccess] = useState(false)

const handleloginuserget = ()=>{
    const obj = {
      email, 
      password
    }
    fetchuserlogin(obj)
    
}

  const fetchuserlogin = (obj)=>{
    userLoginGet(obj).then((res)=>{
       const user = res.data.find(el => el.email ===email && el.password===password)
       if (user) {
        UserLogin()
        setsuccess(true)
        alert("Login Successful")
       
         
    } else {
      alert("Login Unsuccessful")
    }
        
      })
  }
  console.log(success)
  return (
    <div>
      <div>

      </div>
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='enter your register email' onChange={(e)=> setemail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  placeholder='enter your register password' onChange={(e)=> setpassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              {
                !success?<Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}  onClick={ handleloginuserget}>
                Sign in
              </Button>:<Navigate to="/"/>
              }
              <Text> Create Acccount here  <Link href='/register' color={'blue.400'}>Register</Link></Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  )
}

export default Login


// <AdminLink  to="/"><Button
//                bg={'blue.400'}
//                color={'white'}
//                _hover={{
//                  bg: 'blue.500',
//                }} 
//               >Home</Button></AdminLink>