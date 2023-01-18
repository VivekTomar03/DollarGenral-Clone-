import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";
const Links = [
  {to:"/" , title:"Home"}
];



export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="black" px={4} color="white">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
               

               <Menu bg="black">
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="black">
                 Category
                  </MenuButton>
                  <MenuList color="black">
                    <MenuItem>On Sale</MenuItem>
                    <MenuItem>Food & Beverage</MenuItem>
                    <MenuItem>Beauty</MenuItem>
                    <MenuItem>Pet</MenuItem>
                    <MenuItem>Auto & Hardware</MenuItem>
                  </MenuList>
             </Menu>

             <Text>Coupons & Deals</Text>
             <Text>Weekly Ads</Text>
             <Text>Careers</Text>

            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://as1.ftcdn.net/v2/jpg/03/16/12/52/1000_F_316125289_3GTL3Yd9JVQz3Nw50uAEEkOpX6GvK0LE.jpg'
                  }
                />
                <Text>Sign In</Text>
              </MenuButton>
              <MenuList color={'black'}>
                <MenuItem><NavLink to="./login">SignIn</NavLink></MenuItem>
                <MenuItem><NavLink to="./register">Create Account</NavLink></MenuItem>
                <MenuItem>Wallet</MenuItem>
                <MenuItem>Shopping List</MenuItem>
                <MenuItem>Gift Card Balnce</MenuItem>
                <MenuItem>Get Help</MenuItem>
                <MenuDivider />
                <MenuItem><NavLink to="adminpage">Login As Admin</NavLink></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}