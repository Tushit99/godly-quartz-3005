import { Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import ReactCardSlider from "react-card-slider-component"; 


export const ImageSlider = () => {
// const [count,setCount]=useState(0);

const slides = [
    {title:"Old Gold Exchange",description:"This is a description",clickEvent:"sliderClick"},
    {title:"Pay in 6 installments",description:"This is a second description",clickEvent:"sliderClick"},
    {title:"Customer Reviews",description:"This is a third description",clickEvent:"sliderClick"},   
];
    // const handleChange=(payload)=>{
    //     if(count>=3){
    //         setCount(0);
    //     }
    //     else{
    //         setCount((prev)=>prev+payload);
    //     }
      
    // }


  return (
    <div>
        {/* <button disabled={count===0} onClick={()=>handleChange(-1)}>P</button>
         <Image src={slides[0]} />{count}
        <button onClick={()=>handleChange(1)}>N</button> */}
        <ReactCardSlider slides={slides}/>
       {/* <Card slides={slides}/> */}
    </div>
  )
}
