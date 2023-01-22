import React from 'react'
import CartDiv from '../Components/CartDiv'
import SimpleSlider from '../Components/Crousel'
import Footer from '../Components/Footer'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import ProductList from '../Components/ProductList'
import ToysList from '../Components/ToysList'
import Extradata from '../Components/Extradata'


const ProductPage = () => {
  return (
    <div>
      
       <div>
        <CartDiv/>
       </div >
       
        <div style={{
           marginTop:"40px",
           marginLeft:"85px"
        }} >
                    <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Product</BreadcrumbLink>
              </BreadcrumbItem>

            
            </Breadcrumb>

        </div>
        <div className='health'>
          <Heading textAlign={"left"} marginLeft="95px">Health</Heading>
          <Image height={350} marginLeft="200px" marginTop={30} src='https://www.dollargeneral.com/c/health/_jcr_content/root/responsivegrid/image_copy.coreimg.100.1200.jpeg/1673883600739/health-2280x700-hero-coughcold-flu.jpeg'/>
        </div>
          <div>
             <Text  marginTop={30}>Stay well with DG. We've got all you need to keep yourself and your family feeling your best this winter.​</Text>
          </div>
          <div className='productlist'>
            <ProductList/>
          </div>
          <div>
              <Text fontSize={"x-large"}  fontWeight="bold" marginTop={50}>Oh Good! Supplements to Boost Your System</Text>
                <Flex justify={"center"} gap="20px">
                    <Image height={350} src='https://www.dollargeneral.com/c/health/_jcr_content/root/responsivegrid/dgcontainer_77722066/container1.coreimg.jpeg/1673883658537/health-1000x560-immuneboost.jpeg'/>
                    <Grid gridTemplateColumns="repeat(2,1fr)" justifyItems={"center"}>
                          <GridItem padding={2} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"}>
                            <Image marginLeft={14} height={100} src='https://dggo.dollargeneral.com/images/28/68/28687101_0.jpg'/>
                              <Text >Kid'S Vitamin C + Zinc Gummies</Text> 
                              <Button bg={"yellow"}>Add To Cart</Button>
                          </GridItem>
                          <GridItem padding={2} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"}>
                            <Image marginLeft={14} height={100} src='https://dggo.dollargeneral.com/images/31/65/31651301_0.jpg'/>
                              <Text >Kid'S Vitamin C + Zinc Gummies</Text> 
                              <Button bg={"yellow"}>Add To Cart</Button>
                          </GridItem>
                          <GridItem padding={2} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"}>
                            <Image marginLeft={14} height={100} src='https://dggo.dollargeneral.com/images/31/65/31652101_0.jpg'/>
                              <Text >Kid'S Vitamin C + Zinc Gummies</Text> 
                              <Button bg={"yellow"}>Add To Cart</Button>
                          </GridItem>
                          <GridItem padding={2} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"}>
                            <Image marginLeft={14} height={100} src='https://dggo.dollargeneral.com/images/25/54/25547301_0.jpg'/>
                              <Text >Kid'S Vitamin C + Zinc Gummies</Text> 
                              <Button bg={"yellow"}>Add To Cart</Button>
                          </GridItem>
                          
                    </Grid>
                </Flex>
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
                <BreadcrumbLink href='#'>Toys</BreadcrumbLink>
              </BreadcrumbItem>

            
            </Breadcrumb>

        </div>
           <div className='toyslist'>
             
             <Heading textAlign={"left"} marginLeft="95px" marginTop={30}>Toys</Heading>
             
             <ToysList/>
           </div>
              <div className='extradta'>
              <Heading textAlign={"left"} marginLeft="95px" marginTop={30}>Prduct From Rupees Genreal</Heading>
                     <Extradata/>
              </div>
              <div>
                <Footer/>
              </div>
    </div>
  )
}

export default ProductPage
