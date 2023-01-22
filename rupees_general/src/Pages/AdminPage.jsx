import {  Button, Card, CardBody, Grid, Heading, Image, Input,  Text, } from '@chakra-ui/react'
import React, { useReducer, useState } from 'react'
import {
  FormControl,
  FormLabel,
  
} from '@chakra-ui/react'
import { deletedata, getdata, postdata } from '../Api'

import Updatedata from '../Components/Updatedata'
import Loadingdata from '../Components/Loadingdata'



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
  const [updatedatas  , setupdatedata] = useState(false)
  const [iddata , setiddata] = useState(0)
  const [isLoading , setisloading] = useState(false)
  //  -----------------------------------fetch data-------------------------------------------------------//
         const fetchdata = ()=>{
         setisloading(true)
            getdata().then((res)=>{
             
              setgetproduct(res.data)
              setisloading(false)
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
     deletedata(id).then(()=> fetchdata())
    
       
 }
 //-------------------------------------------------------edit data ------------------------------------------------//


 
 const handleedit =(id)=>{
    <>
      {setiddata(id)}
     { setupdatedata(true)}
      
 
    </>
 }

// console.log(iddata)
  return updatedatas ? <Updatedata data={iddata} setupdatedata={setupdatedata} fetchdata={fetchdata}  /> :  (
    <div>
        <Heading marginTop="10px" fontSize='6xl'>Admin's Portal</Heading>
        <div  style={{display:"flex" , justifyContent:"space-around",marginTop:"50px", flexDirection:"column" ,alignItems:"center"}} >
          <Card  boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"}>
            <CardBody bg={"yellow"}>
            <form onSubmit={handlesubmit} style={{border:"3px solid black" , padding:"10px" , backgroundColor:"white"} } >
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
            </CardBody>
          </Card>
         <div >
         <br/>
           <hr/>
           <br/>
                <Text fontSize='4xl'>Display Data</Text>
                <Button onClick={()=>{
                  fetchdata()
                   
                }}>Get Data</Button>
              
              <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)" ,justifyContent:"center"}}>
              {
                 
                  getproduct.map((item)=>{
                    return<Card key={item.id} style={{ margin:"5px"}} padding={10}>
                      <CardBody padding={50} style={{  margin:"5px"}} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>
                    <Image src={item.image} w="200px" marginLeft={50}/>
                      <Text>Title :{item.name}</Text>
                      <Text>Price :{item.price}</Text>
                      <Text>Description :{item.description}</Text>
                      <Text>Rating :{item.rating}</Text>
                      <Text>Brand :{item.Brand_Description}</Text>
                      <Text>Unit Size :{item.Unit_Size}</Text>
                      <Button onClick={()=>handleedit(item)} marginRight="4px" bg={"yellow"}>Edit    .</Button>
                      <Button onClick={()=> handledelete(item.id)} bg={"yellow"}>Delete</Button>
                      
                      </CardBody>
                    </Card>
                  })
                }
              </div>
         </div>
        </div>

    </div>
  )
}

export default AdminPage
