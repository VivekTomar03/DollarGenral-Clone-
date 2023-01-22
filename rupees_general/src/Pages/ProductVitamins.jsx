
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { getdatavitamins } from '../Api';
import CartDiv from '../Components/CartDiv';
import SimpleSlider from '../Components/Crousel';
import Filter from '../Components/Filter';
import { useSearchParams } from "react-router-dom";
import Footer from '../Components/Footer';
import DarkMode from '../Components/DarkMode';
import CartPage from './CartPage';
import { AuthConetxt } from '../Context/AuthContext';
import Loadingdata from '../Components/Loadingdata';


const changetonumber = (val)=>{
  let num = Number(val)
 if(typeof num !='number' || num<=0 ){
    num =1
 }

 return num
}
const ProductVitamins = () => {
  const [product , setproduct]  = React.useState([])
  let [searchparan , setsearchparam] = useSearchParams()
  const initstate = changetonumber(searchparan.get('page'))
  const [ page , setpage] = useState(initstate)
  const [orderby , setorderby] = useState("")
  const [totalpage , setTotalpage] = useState()
  const [cartItems , setCartItems] = useState([])
  const{setdata , data} = useContext(AuthConetxt)
  const[isLoading , setisloading] = useState(false)
   setdata(cartItems)
  

  const [category , setcategory] = useState("")
  const sort = "price"
  
  const geturl = (url , sort , orderby , category)=>{
    
    if(orderby && sort){
      return `${url}&_sort=${sort}&_order=${orderby}`
    }
    if(category){
      return `${url}&category=${category}`
    }
    return url
  
  }
  let apiurl = geturl(`https://mock-server-json-x067.onrender.com/Vitamins?_page=${page}&_limit=12`,sort,orderby,category)
  
  
  const getdata = async(page)=>{
    // return fetch(apiurl)
    // .then((res) => res.json())
    // .catch((error)=> console.log(error))
    try {
      let res = await fetch(apiurl)
      let data = await res.json()
      return{
        TotalPage: +res.headers.get("X-Total-Count"),
        data,
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  
  useEffect(()=>{
      fetchdata(page)
  },[page,orderby,category])
  
  
  useEffect(()=>{
    let paramobj = {page}
    if(orderby){
      paramobj.orderby = orderby
    }
   if(category){
    paramobj.category = category
   }
  
    
  setsearchparam(paramobj)
  },[page,orderby , category]);
  
     const fetchdata = async(page)=>{
      try {
       setisloading(true)
       const res = await getdata(page)  
       
      const{TotalPage , data} = res
       setTotalpage(TotalPage)
       setproduct(data) 
       setisloading(false)
      } catch (error) {
          console.log(error)
      }
     } 

       const handlecart=(item)=>{
        let itemExists = false;
        const updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.id === item.id) {
                itemExists = true;
                return { ...cartItem, count: cartItem.count + 1 };
            }
            return cartItem;
        });
    
        if (!itemExists) {
            setCartItems([...updatedCartItems, { ...item, count: 1 }]);
        } else {
            setCartItems(updatedCartItems);
        }
        // console.log(item, "from handle cart")
        // setdata([...data , item])
        // console.log(data)
       }
    
          console.log(isLoading)
 let countpage = Math.ceil(totalpage/12)
  return isLoading ? <Loadingdata/> : (
    <div>
     <div className='cartdiv'>
      <CartDiv/>
     </div>
       <div style={{alignItems:"center" , marginLeft:"10%", marginTop:"50px"}}>
        <SimpleSlider/>
       </div>

       <div style={{
           marginTop:"40px",
           marginLeft:"85px"
        }} >
                    <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href='product'>Product</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Vitamins</BreadcrumbLink>
              </BreadcrumbItem>

            
            </Breadcrumb>

        </div>
        <div className='health' >
          <Heading textAlign={"left"} marginLeft="95px">Health</Heading>

         
        </div>
           <Flex className='filter' justify={"end"} marginRight="70px">
              <Filter  setorder={setorderby}/>
           </Flex>

        <div className='ProductItems'>

             <Grid  gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' ,xl:"repeat(4,1fr)" , "2xl":"repeat(4,1fr)"}} margin={"auto"} marginTop="40px" gap={10} width="90%">
              {
                product.map((item)=>(
                 
                    <GridItem boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} padding="10px" key={item.id}>
                     <Link href={`product_info/${item.id}`}> <Image marginLeft="30px" src={item.image} width="200px" height={150}/></Link>
                      <Text>{item.name.substring(0, 30)}</Text>
                      <Text>⭐⭐⭐⭐{item.rating}</Text> 
                      <Text>Rs : {item.price}</Text>
                      <Button onClick={()=> handlecart(item)} bg={"yellow"}>Add Cart</Button>
                    </GridItem>
                  
                ))
              }
                
             </Grid>
        </div>
        <div className='pagination' style={{marginTop:"20px"}}>
          <Button isDisabled={page===1} marginRight="5px" onClick={()=> setpage(page-1)}>🡸 Previous</Button>
          <Button isDisabled marginRight="5px">{page}</Button>
          <Button isDisabled={page===countpage}  onClick={()=> setpage(page+1)}>Next 🢂</Button>
        </div>
        <div className='footer'>
            <Footer/>
          </div>
          
    </div>
  );
}

export default ProductVitamins;
