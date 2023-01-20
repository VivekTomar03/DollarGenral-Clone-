import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';


const ToysList = () => {
  return (
    <div>
       <Flex marginTop={30} justify={"center"} gap="20px" >
      <Box padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" src='https://www.dollargeneral.com/c/toys/_jcr_content/root/responsivegrid/smartcarousel_catego/image_0.coreimg.100.300.png/1672331341015/toys-core-baby-presxhool.png'/>
         <Text fontWeight={"bold"}>Baby Toys</Text>
      </Box>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" src='https://www.dollargeneral.com/c/toys/_jcr_content/root/responsivegrid/smartcarousel_catego/image_1.coreimg.100.300.png/1672332414060/toys-core-action-figures.png'/>
         <Text fontWeight={"bold"}>Action Figure</Text>
      </Box>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" src='https://www.dollargeneral.com/c/toys/_jcr_content/root/responsivegrid/smartcarousel_catego/image_2.coreimg.100.300.png/1672332473690/toys-core-dolls.png'/>
         <Text fontWeight={"bold"}>Dolls</Text>
      </Box>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" marginLeft={10} src='https://www.dollargeneral.com/c/toys/_jcr_content/root/responsivegrid/smartcarousel_catego/image_3.coreimg.100.300.png/1672332512042/toys-core-stuffed-animals.png'/>
         <Text fontWeight={"bold"}>Stuffed Animals And Plush </Text>
      </Box>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120}height="120px" src='https://www.dollargeneral.com/c/toys/_jcr_content/root/responsivegrid/smartcarousel_catego/image_4.coreimg.100.300.png/1672332548383/toys-core-art-crafts-toys.png'/>
         <Text fontWeight={"bold"}>Art & Carf Toys</Text>
      </Box>
      <Box  padding={5} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}>
         <Image width={120} height="120px" src='https://www.dollargeneral.com/c/toys/_jcr_content/root/responsivegrid/smartcarousel_catego/image_5.coreimg.100.300.png/1672332579923/toys-core-puzzles-games-books.png'/>
         <Text fontWeight={"bold"}>Puzzle Games</Text>
      </Box>
    </Flex>
    </div>
  );
}

export default ToysList;
