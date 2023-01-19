import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    FormControl,
    Text,
    FormLabel,
    Image,

  } from '@chakra-ui/react'
import { useReducer } from 'react';

import { updatedata } from '../Api';






    const reducer = (state , action)=>{
      switch(action.type){
        case "name":{
          return{
            ...state,
            name:action.payload
          }
        }
        case "price":{
          return{
            ...state,
            price:action.payload
          }
        }
        case "description":{
          return{
            ...state,
            description:action.payload
          }
        }
        case "rating":{
          return{
            ...state,
            rating:action.payload
          }
        }
        case "Brand_Description":{
          return{
            ...state,
            Brand_Description:action.payload
          }
        }
        case "Unit_Size":{
          return{
            ...state,
            Unit_Size:action.payload
          }
        }
        case "image":{
          return{
            ...state,
            image:action.payload
          }
        }
        default:{
          return state
        }
      }
    }


export default function Updatedata({data,setupdatedata,fetchdata}) {
//    console.log(setupdatedata)

    const initstate = {
  

        name: data.name,
        price: data.price,
        description:data.description,
        rating: data.rating,
        Brand_Description: data.Brand_Description,
        Unit_Size: data.Unit_Size,
        image:data.image
    }



    const { isOpen, onOpen, onClose } = useDisclosure()
    const [state, dispatch] = useReducer(reducer, initstate);
   
   
    const handlesubmit = (e)=>{
        e.preventDefault()
        const{name , value} = e.target;
        const obj= {
            ...state,
         
          [name] : value
        }
        updatefetchdata(data.id,obj)
        alert("Data Updated successfully")
      }

        const updatefetchdata = (data,obj)=>{
            updatedata(data,obj).then(()=>fetchdata()).catch((err)=> console.log(err))
        }


       

    return (
      <div  style={{marginTop:"50px" ,width:"80%" ,height:"500px", marginLeft:"10%"}}>
        <Button onClick={onOpen} colorScheme='yellow' color="white">Click here to Update data</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Hello Admin</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={handlesubmit} marginLeft="200px">
            <FormControl w="400px" >
          <Text fontSize='4xl' marginTop="40px" >Update  Product</Text>
              <FormLabel>Product name</FormLabel>
              <Input type='text'  placeholder='enter title' border="1px solid black"
               name='name'
               value={state.name}
               onChange={(e)=> dispatch({type:"name" , payload:e.target.value})}
              />
              <FormLabel>Price</FormLabel>
              <Input type='text'  placeholder='enter price' border="1px solid black"
                name='price'
                value={state.price}
                onChange={(e)=> dispatch({type:"price" , payload:e.target.value})}
               
              />
              <FormLabel>Description</FormLabel>
              <Input type='text'  placeholder='enter description' border="1px solid black"
                name='description'
                value={state.description}
                onChange={(e)=> dispatch({type:"description" , payload:e.target.value})}
              />
              <FormLabel>Rating</FormLabel>
              <Input type='text'  placeholder='enter rating' border="1px solid black"
               name='rating'
               value={state.rating}
               onChange={(e)=> dispatch({type:"rating" , payload:e.target.value})}
              
              />
              <FormLabel>Brand</FormLabel>
              <Input type='text'  placeholder='enter brand' border="1px solid black"
               name='Brand_Description'
               value={state.Brand_Description}
               onChange={(e)=> dispatch({type:"Brand_Description" , payload:e.target.value})}
              />
              <FormLabel>Unit Size</FormLabel>
              <Input type='text'  placeholder='enter unit size' border="1px solid black"
               name='Unit_Size'
               value={state.Unit_Size}
               onChange={(e)=> dispatch({type:"Unit_Size" , payload:e.target.value})}
              />
              <FormLabel>Image URL</FormLabel>
              <Input type='text'  placeholder='enter image url' border="1px solid black"
              name='image'
              value={state.image}
              onChange={(e)=> dispatch({type:"image" , payload:e.target.value})}
              /> <br/>
               <FormLabel>-----------------------------------------------------------</FormLabel>
              <Input type="submit" value=" Product" bg="black" color="white"/>
           </FormControl>
            </form>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={()=> setupdatedata(false)} >Admin Page</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Image src="https://marmelab.com/react-admin/img/tutorial_empty.png" alt='logod' marginTop={50}/>
      </div>
    )
  }