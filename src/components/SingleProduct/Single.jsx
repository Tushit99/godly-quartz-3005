import { Box, Flex, Heading, Image, ListItem, Text, UnorderedList, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchCartData } from '../../redux/cart/action';
import mycs from "./Single.module.css";
import { CheckCircleIcon } from '@chakra-ui/icons';
import image1 from './images/image1.jpg'
import image2 from './images/image2.png'

const Single = () => {
    const { name, id } = useParams();
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        axios.get(`https://tame-lime-hose.cyclic.app/${name}/${id}`).then((e) => {
            setData(e.data);
        })
    }, [])


    return (
        <div>
            <Box className={mycs.main} mt={12} mb={12}>
                <Box className={mycs.box1}>
                    <Image src={data.image} alt='Product-image' />
                </Box>
                <Box className={mycs.box2} >
                    <Box className={mycs.name}>
                        <Heading as='h5' className={mycs.heading} size='lg' >
                            {data.name}
                        </Heading>
                        <Text>{data.discription}</Text>
                    </Box>
                    <Box className={mycs.infobox} p={4}>
                        <Box className={mycs.info1}  >
                            <Heading as='h5' fontSize="lg" textAlign={"left"} fontWeight="700" >
                                Key Features
                            </Heading>
                            <UnorderedList color="#3a3a3a" fontSize="md">
                                <ListItem> Definitive Quality </ListItem>
                                <ListItem> High-Definition Clarity </ListItem>
                                <ListItem> Transmits Original Colours </ListItem>
                                <ListItem> Clear Touch' Easy Clean </ListItem>
                            </UnorderedList>
                            <Heading as='h5' fontSize={{ base: 'sm', lg: "md" }} textAlign={"left"} fontWeight="700" >
                                Return Policy
                            </Heading>
                            <UnorderedList color="#3a3a3a" fontSize="md" >
                                <ListItem> Items are eligible for return within 7 Days of Delivery. </ListItem>
                                <ListItem> All accessories, product & packaging need to be returned in original condition. </ListItem>
                            </UnorderedList>
                            <Heading as='h5' size="sm" textAlign={"left"} fontWeight="500" >
                                Got Feedback to share on this page?
                            </Heading>
                        </Box>
                        <Box className={mycs.info2} >
                            <Heading size={{ base: 'md', lg: "lg" }} textAlign={"left"} fontWeight="500" >
                                ₹{data.price}
                            </Heading>
                            <Text size='xs' textAlign={"left"} fontWeight="500" className={mycs.mrp} >
                                MRP: {data.strikePrice} <span className={mycs.inc}> (Inclusive of all taxes) </span>
                            </Text>
                            {/* <Text size='xs' textAlign={"left"} fontWeight="500" className={mycs.discount} >
                        You Save: {data.discount}
                    </Text> */}
                            <Heading as="h3" size={{ base: 'xs', lg: "sm" }}  >
                                FREE Shipping!
                            </Heading>
                            <Text className={mycs.lines}> *Delivery assurance is subject to our delivery locations staying open as per govt. regulations </Text>
                            <div gap="10px" className={mycs.butbox}>
                                {/* <button data-cy="product-add-item-to-cart-button" onClick={() => {  
                        dispatch(fetchCartData());
                        toast({
                            position: 'bottom-center',
                            duration: 1200,
                            render: () => (
                                <Flex color='white' borderRadius={"10px"} p={"10px"} bgColor='green.400'>
                
                                    <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">You Successfully Added Product in Cart. Please Check Your Cart!</Text>
                                </Flex >
                            ),
                        })
                      }}>Add to Cart</button> */}
                                <button
                                    onClick={() => {
                                        axios
                                            .post(`https://tame-lime-hose.cyclic.app/cart`, data)
                                            .then((res) => {
                                                dispatch(fetchCartData());
                                            })
                                            .catch((err) => console.log("Already Exists in Your Bag"));
                                        toast({
                                            position: 'bottom-center',
                                            duration: 2000,
                                            render: () => (
                                                <Flex color='white' borderRadius={"10px"} p={"10px"} bgColor='green.400'>

                                                    <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">You Successfully Added Product in Cart. Please Check Your Cart!</Text>
                                                </Flex >
                                            ),
                                        })
                                    }}> Add To Cart </button>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div><img src={image2} alt="img" /></div>
            <div><img src={image1} alt="imagedata" /></div>
        </div>
    )
}

export default Single

