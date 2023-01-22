import { Box, Heading, Text, Button, Image, Center, Link } from '@chakra-ui/react';

export default function SubmissionPage() {
  return (
    <Center textAlign="center" py={10} px={6} >
      <Box 
       w={"fit-content"}
       padding="20px"
      boxShadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"}>
      <Center><Image w="60px" src='https://static.vecteezy.com/system/resources/thumbnails/004/628/192/small_2x/check-mark-icon-design-free-vector.jpg'/></Center>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
       Congratulation Order Placed
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
       Order ID : {Math.floor(Math.random() * 90000) + 10000}
      </Text>
      <Text color={'gray.500'} mb={6}>
       Your Order will Deliver Soon
      </Text>

      <Link href='/'>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid">
        Go to Home
      </Button>
      </Link>
      </Box>
    </Center>
  );
}