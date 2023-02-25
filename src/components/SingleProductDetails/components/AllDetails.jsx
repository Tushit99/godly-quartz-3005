import { Heading } from '@chakra-ui/react'
import React from 'react'

export const AllDetails = () => {
  return (
    <div style={{margin:"50px"}}>
        <Heading as="h2" size="lg">Product Details</Heading>
        <div style={{display:"flex"}}>
        <div style={{border:"1px solid white",width:"50%"}}>
            <p>Set in 14 KT Yellow Gold(3.790 g) with diamonds (0.160 ct ,GH-SI)</p>
        <div style={{border:"1px solid white",display:"flex",justifyContent:"space-between",padding:"10px"}}>
        <div>
        <p><b>Dimensions</b></p>
        <p>Width - 9.5 mm</p>
        <p>Height - 3.1 mm</p>
        <p>Size - 18 (57.8 mm)</p>
        </div>
        <div>
        <p><b>Weight</b></p>
        <p>Gross 3.842 g</p>
        
        </div>
        <div>
        <p><b>Purity</b></p>
        <p>14 KT</p>
        
        </div>
        </div>        
        </div>
        <div style={{border:"1px solid white",width:"50%",marginLeft:"20px"}}><p><b>DIAMOND & GEMSTONES</b></p>
         <div style={{display:"flex",justifyContent:"space-between",margin:"20px"}}>
            <div>
                <p><b>Diamond Type</b></p>
                <p>GH-SI</p>
            </div>
            <div>
            <p><b>Setting Type</b></p>
                <p>Pave</p>
            </div>
            <div>
            <p><b>Total Number</b></p>
                <p>9</p>
            </div>
            <div>
            <p><b>	
Total Weight</b></p>
                <p>0.161 ct</p>
            </div>
         </div>
        </div>
        </div>
    </div>
  )
}
