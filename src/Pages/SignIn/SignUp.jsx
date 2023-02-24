import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    // Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  const SignUp=()=> {
    const navigate= useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [ResData, setResData] = useState({
      firstName:"", lastName:"",Email:"",Password:""
    });
  let name,value;
    const handleInput=(e)=>{
      name=e.target.name;
      value=e.target.value;
  
      setResData({...ResData, [name]:value});
    }
  
    function reset() {
      setResData({
        firstName:"", lastName:"",Email:"",Password:""});
    }
  
    const sendUserData=async()=>{
      
      if(ResData.firstName!=="" && ResData.Email!=="" && ResData.Password!==""){
        
        await fetch(`https://tame-lime-hose.cyclic.app/users`, {
          method: "POST",
          body: JSON.stringify(ResData),
          headers: {
            "content-type": "application/json"
          }
        });
        reset();
        alert("Account Created Successfully");
        navigate("/login");
      }
      else{
        return alert("Please fill all the details")
      }
      
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack id='form' spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input value={ResData.firstName} required type="text" id='FirstName' name='firstName' onChange={handleInput} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={ResData.lastName} required id='LastName' name='lastName' onChange={handleInput} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={ResData.Email} id='Email' required name='Email' onChange={handleInput}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input id='Password' value={ResData.Password} name='Password' required onChange={handleInput} type={showPassword ? 'text' : 'password'}  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={sendUserData}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
     
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  
  
  export default SignUp;