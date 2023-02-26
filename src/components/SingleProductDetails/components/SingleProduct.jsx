import React, { useState } from 'react'; 
import { FaChevronDown } from 'react-icons/fa';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Heading,
    Input,
    Img
  } from '@chakra-ui/react'

import { Customization } from './Customization';
import { ImageSlider } from './ImageSlider';
import { AllDetails } from './AllDetails';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.png'

let ring = {
    image: "https://cdn.caratlane.com/media/catalog/product/J/L/JL04543-1RP900_1_lar.jpg",
    name: "Lasa Diamond Necklace",
    discription: "Set in 14 KT Rose Gold(3.580 g) with diamonds (0.310 ct ,IJ-SI)",
    price: 51593,
    strikePrice: 55105,
    rating: 4.1,
    type: "necklace",
    id: 1
  }


export const SingleProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data,setData]=useState("18-57.8 mm"); 
    const [btn, setBtn] = useState("18-57.8 mm"); 

    const handleClick = ()=>{
        setData(btn);  
        onClose();
    } 
    console.log(btn);

  return (
    <div>
    <div style={{display:"flex", gap:"10px"}}>
        <div style={{border:"1px solid white",}}><img src={ring.image}/></div>
     <div style={{backgroundColor:"#f5f5f5",border:"1px solid white",width:"70%",padding:"50px"}}>
     <Heading as='h2' size='lg' noOfLines={1}>
    {ring.name}
  </Heading>
  
      <div style={{display:"flex",justifyContent:"space-between"}}> 
       <div>
       <p style={{marginTop:"20px"}}>Select Size</p>
      <Button bgColor="white" onClick={onOpen}> <span style={{margin:"0 10px 0 0"}}>{data}</span> <FaChevronDown /> </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rs {ring.price}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h3>Choice of Metal</h3>
            <br/>
            <Button value={"14 KT Yellow Gold"} variant={btn === "14 KT Yellow Gold" ? "solid" : "outline"} colorScheme='blue' onClick={(e)=>setBtn(e.target.value)}>14 KT Yellow Gold</Button>
            <br/>
            <hr/>
            <br/>
            <p>Diamond Quality</p>
            <br/>
            <Button value="GH-SI"  onClick={(e)=>setBtn(e.target.value)}>GH-SI</Button> 
            <br/>
            <hr/>
            <br/>
            <p>Select Size</p>
            <div style={{display:"flex",gap:"10px"}}>
            <Button value="13" onClick={(e)=>setBtn(e.target.value)}>13</Button>
            <Button value="14" onClick={(e)=>setBtn(e.target.value)}>14</Button>
            <Button value="15" onClick={(e)=>setBtn(e.target.value)}>15</Button>
            <Button  value="16" onClick={(e)=>setBtn(e.target.value)}>16</Button>
            <Button  value="17" onClick={(e)=>setBtn(e.target.value)}>17</Button>
            <Button value="18" onClick={(e)=>setBtn(e.target.value)}>18</Button>
            <Button value="19" onClick={(e)=>setBtn(e.target.value)}>19</Button>           
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={handleClick}>Customize</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
  <div style={{marginTop:"20px"}}>
    <p>Delivery & Store Details</p>
  <Input bgColor="white" placeholder='PINCODE' />
  </div>
    
    </div>
   <Customization price={ring.price}/>
   <ImageSlider />
     </div>
     
    </div>
    <AllDetails />
    <div><img src={image2} alt="img" /></div>
    <div><img src={image1} alt="imagedata"/></div>
    </div>
  )
}
