import { Box, Flex, Heading, Image,    Text } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import React from 'react';

const CartDiv = () => {
  return (
    <div>
       <Flex className='cartDiv' alignItems={"center"} justifyContent="space-between" height="12" >
        <Box marginLeft={"10px"}>
          <Text>My Store</Text>
          <Text>214 Gallatin Pike N Street 402 </Text>
        </Box>
          <Flex alignItems={"center"} marginRight="10px">
               
              <Link to='/cartpage'>
              <Image src='https://thumbs.dreamstime.com/b/trolley-thin-line-add-to-shopping-cart-icon-vector-illustration-graphic-web-design-template-black-color-editable-symbol-171152878.jpg'
             width="40px"
             alt='cartimg'
             
            />

            
              </Link>
          
          </Flex>
      </Flex>
    </div>
  );
}

export default CartDiv;
