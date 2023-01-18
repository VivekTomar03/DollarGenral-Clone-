import { Alert, AlertIcon, Button, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useReducer, useState } from 'react'
import {
  FormControl,
  FormLabel,
  
} from '@chakra-ui/react'
import { deletedata, getdata, postdata } from '../Api'
import { useEffect } from 'react'


 const initstate = {
  

        name: "",
        price: "",
        description: "",
        rating: "",
        Brand_Description: "",
        Unit_Size: "",
        image: ""
 }

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


const AdminPage = () => {
const [getproduct , setgetproduct] = useState([])
const [state, dispatch] = useReducer(reducer, initstate);
  //  -----------------------------------fetch data-------------------------------------------------------//
         const fetchdata = ()=>{
            getdata().then((res)=>{
             
              setgetproduct(res.data)
            })
         }
 //  -----------------------------------fetch data-------------------------------------------------------//       
         
  //------------------------------------post data-------------------------------------------------------//
   const handlesubmit = (e)=>{
     e.preventDefault()
     const{name , value} = e.target;
     const obj= {
      ...state,
       [name] : value
     }
     postreqdata(obj)
   }     
      const postreqdata = (obj)=>{
        postdata(obj)
      }
 //------------------------------------post data-------------------------------------------------------//
 //-------------------------------------------delete data-----------------------------------------------//

 const handledelete = (id)=>{
     deletedata(id)
       
 }
 //-------------------------------------------------------edit data ------------------------------------------------//


 
 const handleedit =(id)=>{

  
 }



  return (
    <div >
        <Heading marginTop="10px" fontSize='4xl'>Admin's Portal</Heading>
        <div style={{display:"flex" , justifyContent:"space-around"}}  >
          <div style={{border:"1px solid grey" , padding:"10px"}}>
            <form onSubmit={handlesubmit}>
            <FormControl w="330px" >
          <Text fontSize='4xl' marginTop="40px" >Add Product</Text>
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
              />
              <Input type="submit" value="Add Product" bg="black" color="white"/>
           </FormControl>
            </form>

          </div>
         <div >
                <Text fontSize='4xl'>Display Data</Text>
                <Button onClick={fetchdata}>Get Data</Button>
              
              <div style={{display:"flex" , flexDirection:"column" ,justifyContent:"center"}}>
              {
                  getproduct.map((item)=>{
                    return<div key={item.id} style={{border:"1px solid black" , margin:"5px"}}>
                    <Image src={item.image} w="200px" marginLeft={250}/>
                      <Text>Title :{item.name}</Text>
                      <Text>Price :{item.price}</Text>
                      <Text>Description :{item.description}</Text>
                      <Text>Rating :{item.rating}</Text>
                      <Text>Brand :{item.Brand_Description}</Text>
                      <Text>Unit Size :{item.Unit_Size}</Text>
                      <Button onClick={()=>handleedit(item.id)}>Edit</Button>
                      <Button onClick={()=> handledelete(item.id)}>Delete</Button>
                      
                      
                    </div>
                  })
                }
              </div>
         </div>
        </div>

    </div>
  )
}

export default AdminPage
