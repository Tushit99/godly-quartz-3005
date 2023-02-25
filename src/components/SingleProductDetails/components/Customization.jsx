import React,{useState} from 'react';
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
    Input
  } from '@chakra-ui/react';
  import { FaChevronDown } from 'react-icons/fa';
 

export const Customization = ({price}) => {

  

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data,setData]=useState("14 KT Yellow Gold"); 
    const [btn, setBtn] = useState("14 KT Yellow Gold"); 

    const handleClick = ()=>{
        setData(btn);  
        onClose();
    } 
    console.log(btn);

  return (
    <div>
        <div>
        <p style={{marginTop:"20px"}}>Customization</p>
      <Button bgColor="white" onClick={onOpen}> <span style={{margin:"0 10px 0 0"}}>{data}</span> <FaChevronDown /> </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rs {price}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h3>Choice of metal</h3>
            <br/>
            <Button value={"14 KT Yellow Gold"} onClick={(e)=>setBtn(e.target.value)}>14 KT Yellow Gold</Button>
            <br/>
            <hr/>
            <br/>
            <p>Diamond Quality</p>
            <br/>
            <Button value="GH-SI" onClick={(e)=>setBtn(e.target.value)}>GH-SI</Button> 
            <br/>
            <hr/>
            <br/>
            <p>Select Size</p>
            <div style={{display:"flex",gap:"10px"}}>
            <Button onClick={(e)=>setBtn(e.target.value)}>13</Button>
            <Button onClick={(e)=>setBtn(e.target.value)}>14</Button>
            <Button onClick={(e)=>setBtn(e.target.value)}>15</Button>
            <Button onClick={(e)=>setBtn(e.target.value)}>16</Button>
            <Button onClick={(e)=>setBtn(e.target.value)}>17</Button>
            <Button onClick={(e)=>setBtn(e.target.value)}>18</Button>
            <Button onClick={(e)=>setBtn(e.target.value)}>19</Button>           
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
      <div style={{marginTop:"30px"}}>
        <Heading as="h2" size="lg">Rs: {price}</Heading>
        <h3 style={{marginTop:"10px",marginBottom:"10px"}}>Making Charge is % of the Gold Value</h3>
        <Button style={{backgroundImage:"linear-gradient(#d758e7, #9261f8 )"}}>Add to Cart</Button>
      </div>
    </div>
    
  )
}
