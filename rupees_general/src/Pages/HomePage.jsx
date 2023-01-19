import React from 'react'
import {Box, Flex, Grid, Heading,  Image, Text, } from '@chakra-ui/react'
import SimpleSlider from '../Components/Crousel'
import { Card,  CardBody,  } from '@chakra-ui/react'
import Category from '../Components/Category'
import MultipleItems from '../Components/FeatureCoupoun'
import Footer from '../Components/Footer'


const HomePage = () => {



  return (
    <div>
      <Flex className='cartDiv' alignItems={"center"} justifyContent="space-between">
        <Box>
          <Text>My Store</Text>
          <Text>214 Gallatin Pike N Street 402 </Text>
        </Box>
          <Flex alignItems={"center"}>
            <Image src='https://thumbs.dreamstime.com/b/trolley-thin-line-add-to-shopping-cart-icon-vector-illustration-graphic-web-design-template-black-color-editable-symbol-171152878.jpg'
             width={70}
             alt='cartimg'
             
            />
            <Heading bg={"grey"} borderRadius="50%">1</Heading>
          </Flex>
      </Flex>

        <div className='crousel' style={{alignItems:"center" , marginLeft:"10%", marginTop:"50px"}}>
              <SimpleSlider/>
        </div>

        <div className='ads' marginTop="50px">
            <Flex alignContent={"center"} justifyContent="center" marginTop="100px" gap={10}>
               <Card bg={"gray.100"} border="1px solid black"  w={280}>
                <CardBody>
                <Flex gap={10}>
                <Image w={70} src='https://www.dollargeneral.com/content/dam/home-pickup-merge/coupons.png' alt='201'/>
                 <Text>Digital Coupons</Text>
                </Flex>
                </CardBody>
                </Card>
               
                <Card bg={"gray.100"} border="1px solid black" w={300}>
                <CardBody>
                <Flex gap={10}  >
                <Image w={70} h={70} src='https://www.dollargeneral.com/content/dam/home-pickup-merge/weekly.png' alt='201'/>
                 <Text>Weekly Ads</Text>
                </Flex>
                </CardBody>
                </Card>
            </Flex>
        </div>

          <div className='shop_byCatogory' alignContent="center" >
             <Heading marginTop="50px">Shop by Category</Heading>
               <Category/>
          </div>
            <div className='velantineday'>
                  <Heading marginTop="50px">Valentine's Day Gifts for Everyone</Heading>
                  <Grid gridTemplateColumns="repeat(3,0.70fr)"  marginLeft={75} marginTop={20}>
                    <Card > 
                      <CardBody>
                        <Image w={"80%"}  marginLeft={10} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/responsivegrid_copy_/image.coreimg.100.500.jpeg/1673882299032/wk51-home-section-banner-650x650-giftsforhim.jpeg' alt='oneimg'/>

                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <Image w={"80%"}  marginLeft={10} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/responsivegrid_copy_/image_copy.coreimg.100.500.jpeg/1673882305149/wk51-home-section-banner-650x650-giftsforher.jpeg' alt='oneimg'/>

                      </CardBody>
                    </Card>

                    <Card>
                      <CardBody>
                        <Image w={"80%"}  marginLeft={10} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/responsivegrid_copy_/image_copy_130136415.coreimg.100.500.jpeg/1673882311231/wk51-home-section-banner-650x650-giftsforkids.jpeg' alt='oneimg'/>

                      </CardBody>
                    </Card>
                    
                  </Grid>
            </div>

            <div className='shopebycoupoun'>
            <Heading marginTop="50px">Featured Coupons</Heading>
             
             <div style={{marginTop:"30px"}}>
             <MultipleItems/>
             </div>
             
            </div>

            <div className='gamePlay'>
            <Heading marginTop="50px">Game Play</Heading>
            <Image style={{
              marginTop:"30px",
              marginLeft:"170px",
              height:"95%",
              width:"75%"
            }} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid_303914515/herobanner_copy.coreimg.jpeg/1673882331997/wk51-home-2280x700-hero-desktop-superbowlr1.jpeg' alt='gameplay'/>
            </div>
            

            <div className='dealOfTheWeek'>
            <Heading marginTop="50px">Deal Of The Week</Heading>
              <Flex marginTop={20} gap="20px" justify={"center"}>
               <Image style={{width:"300px", height:"300px"}} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/smartcarousel_381982/item_1673388221146.coreimg.100.400.png/1673816425324/week50-deals1.png' alt=''/>
               <Image style={{width:"300px", height:"300px"}} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/smartcarousel_381982/item_1673388224933.coreimg.100.400.png/1673552771136/week50-deals2.png' alt=''/>
               <Image style={{width:"300px", height:"300px"}} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/smartcarousel_381982/item_1673537616719.coreimg.100.400.png/1673552827725/week50-deals2-1.png' alt=''/>
              </Flex>
            </div>
            <div className='exploremore'>
            <Heading marginTop="50px">Explore More</Heading>
              <Flex marginTop={20} gap="20px" justify={"center"}>
               <Image style={{width:"300px", height:"200px"}} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/smartcarousel_copy_3/item_1668730146240.coreimg.100.500.jpeg/1673546501519/wk51-home-section-banner-430x200-5off25-v2.jpeg' alt=''/>
               <Image style={{width:"300px", height:"200px"}} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/smartcarousel_copy_3/item_1668730157406.coreimg.100.500.jpeg/1673546537622/wk51-home-section-banner-430x200-frozenfavorites-v2.jpeg' alt=''/>
               <Image style={{width:"300px", height:"200px"}} src='https://www.dollargeneral.com/_jcr_content/root/responsivegrid/smartcarousel_copy_3/item_1669745516339.coreimg.100.500.jpeg/1673546549128/wk51-home-section-banner-430x200-sts-v2.jpeg' alt=''/>
              </Flex>
            </div>
            <div className='footer'>
                 <Footer/>
            </div>
    </div>
  )
}

export default HomePage
