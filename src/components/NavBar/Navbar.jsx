import React from "react";
import {
  Text,
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Image,
  Stack,
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
  Avatar,
  SimpleGrid,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineGold, AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
import { BiHomeCircle } from "react-icons/bi";
import { IoStorefrontSharp } from "react-icons/io5";
import { Link } from "react-router-dom"; 
import img from "../img/logo.png"  

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box
        boxShadow={"lg"}
        bg={useColorModeValue("#1A365D", "#1A365D")}
        h={"20px"}
        position="fixed"
      ></Box>
      <Box w={"100%"} position="fixed" top={0} zIndex={"10"}>
        <Flex
          boxShadow="lg"
          p="2"
          alignItems={"canter"}
          gap={"10px"}
          bg={useColorModeValue("#F6F4ff", "#F6F4ff")}
          justifyContent="space-around"
        >
          <IconButton
            bg={"#F6F4ff"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            h="60px"
          />
          <HStack alignItems={"center"} display="flex" w="100%" h="60px">
            <HStack
              as={"nav"}
              display={{ base: "none", sm: "flex", md: "flex" }}
              cursor="pointer"
              w="100%"
              h="50px"
              justifyContent="space-around"
              alignItems={"center"}
            >
              <Box >
                <Image
                  w={{ base: "80px", md: "150px" }} 
                  src={img}
                  alt="log"
                />
              </Box>

              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "5px", sm: "none", md: "20px" }}
                  bg={"#F6F4ff"}
                  icon={<AiOutlineHome />}
                  color="#4f3267"
                  _hover={{ color: "#231535" }}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ sm: "8px", md: "11px" }}
                  marginTop={"7px"}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  FREE TRY AT HOME
                </Text>
              </Box>
              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "5px", sm: "none", md: "20px" }}
                  bg={"#F6F4ff"}
                  icon={<IoStorefrontOutline />}
                  color="#4f3267"
                  _hover={{ color: "#231535" }}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "8px", md: "11px" }}
                  marginTop={"7px"}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  FIND STORE
                </Text>
              </Box>

              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "5px", sm: "none", md: "20px" }}
                  bg={"#F6F4ff"}
                  color="#4f3267"
                  _hover={{ color: "#231535" }}
                  icon={<BsHandbag />}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "8px", sm: "none", md: "11px" }}
                  marginTop={"7px"}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  PLAN OF PURCHASE
                </Text>
              </Box>

              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "10px", sm: "none", md: "25px" }}
                  bg={"#F6F4ff"}
                  icon={<AiOutlineGold />}
                  color="#4f3267"
                  _hover={{ color: "#231535" }}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "8px", sm: "none", md: "11px" }}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  BUY DIGITAL GOLD
                </Text>
              </Box>

              <Box className="input-box">
                <FormControl>
                  <InputGroup>
                    <Input
                      _focusVisible={{ border: "1px solid purple" }}
                      border={"1px solid purple"}
                      placeholder="search"
                      _placeholder={{ color: "black" }}
                      bg={"white"}
                      rounded="md"
                      w={{ md: "190px" }}
                      fontSize={"11px"}
                      lineHeight={"18px"}
                      color={"black"}
                    />
                    <InputRightElement width={{ md: "2rem" }}>
                      <IconButton
                        bgGradient="linear(to-l, #7918CA, #FF0888)"
                        aria-label="Search database"
                        color={"white"}
                        icon={<SearchIcon />}
                        h={"2.4rem"}
                        w={"50px"}
                        roundedLeft={"sm"}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Box>

              <Box display={{ sm: "none", md: "flex" }} alignItems={"center"}>
                <IconButton
                  fontSize={{ base: "5px", md: "20px" }}
                  bg={"#F6F4ff"}
                  icon={<MdLocationPin />}
                  _hover={{ color: "#231535" }}
                />
                <Text
                  fontFamily={"sans-serif"}
                  fontSize={{ base: "5px", md: "11px" }}
                  color="#4f3267"
                  _hover={{ color: "#000000", textDecoration: "underline" }}
                >
                  PIN CODE
                </Text>
              </Box>

              <Avatar
                name="indian-flag"
                w={{ sm: "25px", md: "40px" }}
                size={"sm"}
                src="https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg?w=740&t=st=1674037779~exp=1674038379~hmac=37daab84e0a0fe59d3e5c96a6890e019c413fcf3bc6d1265bb10ebe4b461afe4"
              />

              <Popover>
                <PopoverTrigger>
                  <IconButton
                    fontSize={{ base: "5px", sm: "13px", md: "15px" }}
                    bg={"#F6F4ff"}
                    icon={<FaUser />}
                    _hover={{ color: "#231535" }}
                  />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader
                      fontFamily={"sans-serif"}
                      fontSize={"17px"}
                      textAlign="center"
                    >
                      Your Account
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody
                      fontFamily={"sans-serif"}
                      fontSize={"13px"}
                      textAlign="center"
                    >
                      Access acount & manage your orders
                    </PopoverBody>
                    <PopoverBody
                      border="0"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-around"
                      pb={4}
                    >
                      <Link>
                        {" "}
                        <Button bg="#DE57E5">Signup</Button>
                      </Link>
                      <Link>
                        <Button borderColor="#DE57E5" variant="outline">
                          Login
                        </Button>
                      </Link>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>

              <IconButton
                fontSize={{ base: "5px", sm: "13px", md: "15px" }}
                icon={<AiFillHeart />}
                _hover={{ color: "#231535" }}
              />
              <Link>
                <IconButton
                  fontSize={{ base: "5px", sm: "13px", md: "15px" }}
                  bg={"#F6F4ff"}
                  icon={<MdShoppingBasket />}
                  _hover={{ color: "#231535" }}
                />
              </Link>
            </HStack>
          </HStack>
        </Flex>

        <Box className='dropDown-Menu' display={{ base: 'none', md: 'flex' }}  justifyContent={"space-between"} boxShadow='base' p='2' rounded='sm' bg='white' w={"100%"} >
                    <Box> 
                   <Link to="/jawellary" > <Button as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500"}}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"} fontWeight={"thin"} >NEW ARRIVALS</Button></Link>
                    </Box>
                    

                    <Box>
                    <Box>
                    <Menu >
                    <MenuButton as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500"}}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"} fontWeight={"thin"} >RINGS</MenuButton>
                    <MenuList >
                    <MenuItem minH='48px'>
                    <Image boxSize='4rem' bg={"white"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlo5JpfJGnijXQVGGpuKQmt-FR2EtIwR3Ieg&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"} >ENGAGEMENT</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YvtEKwJTemsoQuEtSwZDOh3Tc9xarqOMvg&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"} >FASHION</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlSVn_pd8Dqpk2LwAuxOpjidyvUfCNhkrrA&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>CASUAL</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7TC4imxTCat6GS60K2pd8T62amzwMQ9UmQ&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>ADJUSTALE RINGS</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbT7ncK1IuYCcHLvHILOp39c33Tt6zHiL6-lzFRqQdIeSphae8ovFXxInKcDBF3V3owQ&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>SILVER STATEMENT RINGS</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlo5JpfJGnijXQVGGpuKQmt-FR2EtIwR3Ieg&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>ENGAGEMENT</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlo5JpfJGnijXQVGGpuKQmt-FR2EtIwR3Ieg&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>ENGAGEMENT</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlo5JpfJGnijXQVGGpuKQmt-FR2EtIwR3Ieg&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>ENGAGEMENT</Text>
                    </MenuItem>
                    </MenuList>
                    </Menu>
                    </Box>
                    </Box>


                    <Box  >
                    <Box>
                    <Menu>
                    <MenuButton as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500" }}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"} fontWeight={"thin"} >EARRINGS</MenuButton>
                    <MenuList>
                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLcHECusSzP4_OvWJTWSpwSLyadwkHm1aNg&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>STUD</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkwgitaP4cC5VbfTnLKrTvwxEglwYx5UQQg&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>JHUMKAS</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xPYoH3VP5eIkWbMCQeSctyeSpYNoi1cRVV_uvVe5VzCfiYKAvlfHsBYwGkKGW3YfCyM&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>HOOPS & HUGGIES</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1a2nsUq9dOh2zjnqtd5jb9YYHOQk0QcVxg&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>EARCUFFS</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgXO_f9EuJPD5JqJAPugReq_cA4_k9n7p6g&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>DROPS</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTg9HaBNh0jceI1lXw9n46__op9cEkiLqtnI51e8171JU3Sa1-6AIp5nNPwwKAfWLBT6Y&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>PEARL EARINGS</Text>
                    </MenuItem>
                    </MenuList>
                    </Menu>
                    </Box>
                    </Box>


                    <Box  >
                    <Box>
                    <Menu>
                    <MenuButton as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500" }}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"} fontWeight={"thin"} >BRACELETS & BANGLES</MenuButton>
                    <MenuList>
                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscLrm08Pxja3t7mdlDCatHno0VWqq8pb7dw&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>CHAIN BRACELETE</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZQLdqugRp7ZSYjEglcoshHsO8zy0tgjrmw&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>FLEXIBLE BRACELETE</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscLrm08Pxja3t7mdlDCatHno0VWqq8pb7dw&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>MANGLESUTRA BRACELETE</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZy_SMZB466H6V1MHXWK-_kQorEQa6y4EFQ&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>LIGHTWEIGHT BANGLES</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQn86Ox0O3G0s2Rpn8vZaow9F8CiP6itO5zQ&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>DIAMOND BANGLES </Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHFSbPeQWy8Cq1aauzWZAspLfiTi-tADbzchJifjbp1Yw5Vfxaqn4r_JJ6sJK57BcrGQ&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>GOLD BANGLES</Text>
                    </MenuItem>
                    </MenuList>
                    </Menu>
                    </Box>
                    </Box>     

                    <Box display={"grid"} >
                    <Box>
                    <Menu>
                    <MenuButton as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500" }}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"} fontWeight={"thin"} >SOLITAIRS</MenuButton>
                    <MenuList>
                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xHj_srtOVVMULS7jlxFs8hiwCjxTeOQy7g&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>RINGS</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2rCmHYb2AAKrHUHCeT-Ypn478k4TFRzR0w&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>PENDANTS</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a56271J_XdV8sPo6oNnBSJROsNtnK7fRuQ&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>NECKLACE</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWGGN_CMXIn41McZoNRhhodezsn7W41vi65wmJu0clfCO9e-fa_ehYsfYMnlYv1bTLjE&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>MENS SOLITAIRES</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qq3tUerLED-tGlGjLv8TsINVmngpZqeVVA&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>EARRINGS</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-niLrGltG7l5HrRqfqyIC8hZZpjuVXisMcg&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>BRIDAL SETS</Text>
                    </MenuItem>

                    <MenuItem minH='48px'>
                    <Image boxSize='4rem'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaQjQtIWpJ6bm8UGTPoY5TRCWLxp6ZK04CA&usqp=CAU"   alt='Rings' mr='12px'/>
                    <Text as={"span"} fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"18px"}>MANGALSUTRA</Text>
                    </MenuItem>
                    </MenuList>
                    </Menu>
                    </Box>
                    </Box>

                    <Box className='mangalsutra-sec'>
                    <Button as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500" }}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"} fontWeight={"thin"} >MANGALSUTRA</Button>
                    </Box>

                    <Box className='ready-to-ship' >
                    <Button as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500" }}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"} fontWeight={"thin"} >READY TO SHIP</Button>
                    </Box>

                    <Box className='kids'>
                    <Button as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500" }}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"} fontWeight={"thin"} >KIDS</Button>
                    </Box>

                    <Box display={"grid"} >
                    <Box>
                    <Menu>
                    <MenuButton as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500" }}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"}  fontWeight={"thin"}>OTHER JEWELLERY</MenuButton>
                    <MenuList>
                    </MenuList>
                    </Menu>
                    </Box>
                    </Box>

                    <Box >
                    <Box>
                    <Menu>
                    <MenuButton as={Button} bg={"white"} _hover={{bg:"#F6F4ff",fontWeight:"500" }}  fontFamily={"sans-serif"} fontSize={"11px"} lineHeight={"42px"} fontWeight={"thin"} >GIFTING</MenuButton>
                    <MenuList>
                        <Box  display={"flex"} gap={"10px"}>
                        <Image  w={"5%"} src="https://images.pexels.com/photos/1454184/pexels-photo-1454184.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <Image  w={"5%"} src="https://images.pexels.com/photos/2799862/pexels-photo-2799862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Image  w={"5%"} src="https://images.pexels.com/photos/6779877/pexels-photo-6779877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Image  w={"5%"} src="https://images.pexels.com/photos/5876688/pexels-photo-5876688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        </Box>
                    </MenuList>
                    </Menu>
                    </Box>
                    </Box>

                </Box>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} bg={"white"}>
            <Stack as={"nav"} spacing={4} h={"1000%"}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Button
                  size="md"
                  height="48px"
                  width="190px"
                  border="1px"
                  borderColor="#dab490"
                  color={"#A05354"}
                  fontSize={"11px"}
                  lineHeight={"18px"}
                >
                  <IconButton
                    fontSize={"20px"}
                    icon={<BiHomeCircle />}
                    _hover={{ color: "#A05354" }}
                  />
                  Try at Home
                </Button>
                <Button
                  size="md"
                  height="48px"
                  width="100px"
                  border="1px"
                  borderColor="#DE57E5"
                >
                  {" "}
                  <Image
                    w={"40px"}
                    src="https://assets.cltstatic.com/images/responsive/pop-logo.png"
                  />
                </Button>
                <Button
                  size="md"
                  height="48px"
                  width={"190px"}
                  border="1px"
                  borderColor="#9066A6"
                  color={"#9066A6"}
                >
                  <IconButton
                    fontSize={"19px"}
                    icon={<IoStorefrontSharp />}
                    _hover={{ color: "#9066A6" }}
                    color="#9066A6"
                  />
                  Find Stores
                </Button>
              </Box>

              <Box>
                <Box display={"flex"} gap={"20px"}>
                  <Image
                    rounded={"xl"}
                    w={"10%"}
                    src="https://thumbs.dreamstime.com/b/beautiful-vintage-oriental-gold-turkish-jewelry-women-s-earrings-black-background-beautiful-oriental-gold-turkish-jewelry-101556212.jpg"
                  />
                  <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                    {" "}
                    NEW ARRIVALS
                  </Box>
                </Box>

                <Box display={"flex"} gap={"20px"} mt={"20px"}>
                  <Image
                    rounded={"xl"}
                    w={"10%"}
                    src="https://images.pexels.com/photos/9420323/pexels-photo-9420323.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2"
                  />
                  <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                    RINGS
                  </Box>
                </Box>

                <Box display={"flex"} gap={"20px"} mt={"20px"}>
                  <Image
                    rounded={"xl"}
                    w={"10%"}
                    src="https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2"
                  />
                  <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                    EARRINGS
                  </Box>
                </Box>

                <Box display={"flex"} gap={"20px"} mt={"20px"}>
                  <Image
                    rounded={"xl"}
                    w={"10%"}
                    src="https://images.pexels.com/photos/12194323/pexels-photo-12194323.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2"
                  />
                  <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                    BRACELETS & BANGLES
                  </Box>
                </Box>

                <Box display={"flex"} gap={"20px"} mt={"20px"}>
                  <Image
                    rounded={"xl"}
                    w={"10%"}
                    src="https://images.pexels.com/photos/7134458/pexels-photo-7134458.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2"
                  />
                  <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                    SOLITAIRES
                  </Box>
                </Box>

                <Box display={"flex"} gap={"20px"} mt={"20px"}>
                  <Image
                    rounded={"xl"}
                    w={"10%"}
                    src="https://images.pexels.com/photos/11655516/pexels-photo-11655516.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2"
                  />
                  <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                    CHAINS
                  </Box>
                </Box>

                <Box display={"flex"} gap={"20px"} mt={"20px"}>
                  <Image
                    rounded={"xl"}
                    w={"10%"}
                    src="https://images.pexels.com/photos/9901792/pexels-photo-9901792.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2"
                  />
                  <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                    OTHER JEWELLERY
                  </Box>
                </Box>
              </Box>

              <SimpleGrid columns={2} spacing={10}>
                <Box height="80px">
                  {" "}
                  <Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/8_FastDelivery_336x420.png" />{" "}
                </Box>

                <Box height="80px">
                  <Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/4_NewIn_336x420.png" />
                </Box>

                <Box height="80px">
                  {" "}
                  <Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/5_Necklace_336x420.png" />{" "}
                </Box>

                <Box height="80px">
                  {" "}
                  <Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/6_Kids_336x420.png" />{" "}
                </Box>

                <Box height="80px">
                  {" "}
                  <Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/3_Silver_336x420.png" />{" "}
                </Box>

                <Box height="80px">
                  {" "}
                  <Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/7_GoldCoin_336x420.png" />{" "}
                </Box>
              </SimpleGrid>

              <Box display={"flex"} gap={"20px"} mt={"20px"}>
                <Image
                  rounded={"xl"}
                  w={"10%"}
                  src="https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                  DIGI GOLD
                </Box>
              </Box>

              <Box display={"flex"} gap={"20px"} mt={"20px"}>
                <Image
                  rounded={"xl"}
                  w={"10%"}
                  src="https://images.pexels.com/photos/13976051/pexels-photo-13976051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                  GIFTING
                </Box>
              </Box>

              <Box display={"flex"} gap={"20px"} mt={"20px"}>
                <Image
                  rounded={"xl"}
                  w={"10%"}
                  src="https://images.pexels.com/photos/7893672/pexels-photo-7893672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Box boxShadow="xs" p="6" rounded="md" bg="white" w={"90%"}>
                  WATCH & BUY
                </Box>
              </Box>
            </Stack>
          </Box>
        ) : (
          <>
            <FormControl display={{ md: "none", sm: "block" }}>
              <InputGroup>
                <Input
                  _focusVisible={{ border: "1px solid purple" }}
                  border={"1px solid purple"}
                  placeholder="search"
                  _placeholder={{ color: "black" }}
                  bg={"white"}
                  rounded="md"
                  w={"100%"}
                  fontSize={"11px"}
                  lineHeight={"18px"}
                  color={"black"}
                />
                <InputRightElement width="2rem">
                  <IconButton
                    bgGradient="linear(to-l, #7918CA, #FF0888)"
                    aria-label="Search database"
                    color={"white"}
                    icon={<SearchIcon />}
                    h="2.4rem"
                    w={"50px"}
                    roundedLeft={"sm"}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Box display={{ base: "flex", sm: "flex", md: "none" }}>
              <Box w={"20%"} textAlign="center">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwg-I_lEX4P9eGlHqt5-9h329hxYSmCziEg&usqp=CAU"
                  }
                />
                <Text fontSize={{ base: "6px", sm: "11px" }}>Watch & Buy</Text>
              </Box>

              <Box w={"20%"} textAlign="center">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbriW9R_7fom_UaZATiiwZkjgHj4Q8xXBkg&usqp=CAU"
                  }
                />
                <Text fontSize={{ base: "6px", sm: "11px" }}>New Arriavls</Text>
              </Box>

              <Box w={"20%"} textAlign="center">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2IUBwIsgdvScWcNI5IRH2u77bqkIj_5tvA&usqp=CAU"
                  }
                />
                <Text fontSize={{ base: "6px", sm: "11px" }}>
                  Anniversary Gifts
                </Text>
              </Box>

              <Box w={"20%"} textAlign="center">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwq5LQpLC-jhVKkecwlvxR6AYLHDjBbqnVQ&usqp=CAU"
                  }
                />
                <Text fontSize={{ base: "6px", sm: "11px" }}>Solitairs</Text>
              </Box>

              <Box w={"20%"} textAlign="center">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoESKI0YAor-IFHLp9v5qhlNfMamTKtJUXg&usqp=CAU"
                  }
                />
                <Text fontSize={{ base: "6px", sm: "11px" }}>Rings</Text>
              </Box>

              <Box w={"20%"} textAlign="center">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaIxUTGCcGPL5ePgz1sQyyEwVTNrIpMwi_A&usqp=CAU"
                  }
                />
                <Text fontSize={{ base: "6px", sm: "11px" }}>Earrings</Text>
              </Box>

              <Box w={"20%"} textAlign="center">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwg-I_lEX4P9eGlHqt5-9h329hxYSmCziEg&usqp=CAU"
                  }
                />
                <Text fontSize={{ base: "6px", sm: "11px" }}>Watch & Buy</Text>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};

export default Navbar;
