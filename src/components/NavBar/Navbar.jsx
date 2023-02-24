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
