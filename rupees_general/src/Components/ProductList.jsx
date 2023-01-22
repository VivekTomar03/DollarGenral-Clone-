import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ProductList = () => {
  return (
    <Flex marginTop={30} justify={"center"} gap="20px" >
      <Box padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" src='https://www.dollargeneral.com/c/health/_jcr_content/root/responsivegrid/smartcarousel_categories/image_0.coreimg.100.300.png/1673883610671/health-cabinet.png'/>
         <Text fontWeight={"bold"}>Medicine Cabinate</Text>
      </Box>
      <Link href='/productvitamins'>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" src='https://www.dollargeneral.com/c/health/_jcr_content/root/responsivegrid/smartcarousel_categories/image_1.coreimg.100.300.png/1673883617365/health-vitamins.png'/>
         <Text fontWeight={"bold"}>Vitamins</Text>
      </Box>
      </Link>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" src='https://www.dollargeneral.com/c/health/_jcr_content/root/responsivegrid/smartcarousel_categories/image_2.coreimg.100.300.png/1673883623725/health-eye.png'/>
         <Text fontWeight={"bold"}>Medical Care</Text>
      </Box>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" src='https://www.dollargeneral.com/c/health/_jcr_content/root/responsivegrid/smartcarousel_categories/image_3.coreimg.100.300.png/1673883629668/health-nutrition.png'/>
         <Text fontWeight={"bold"}>Nutritional upplements</Text>
      </Box>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120}height="120px" src='https://www.dollargeneral.com/c/health/_jcr_content/root/responsivegrid/smartcarousel_categories/image_4.coreimg.100.300.png/1673883636771/health-itchrelief.png'/>
         <Text fontWeight={"bold"}>Foot Care</Text>
      </Box>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" src='https://www.dollargeneral.com/c/health/_jcr_content/root/responsivegrid/smartcarousel_categories/image_5_copy.coreimg.100.300.png/1673883642949/health-exercise2.png'/>
         <Text fontWeight={"bold"}>Fitness Care</Text>
      </Box>
    </Flex>
  );
}

export default ProductList;
