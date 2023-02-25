import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Single = () => { 
    const {name,id} = useParams(); 
    const [data, setData]= useState({}); 

    console.log(name,id); 

    useEffect(()=>{
        axios.get(`https://tame-lime-hose.cyclic.app/${name}/${id}`).then((e)=>{
        setData(e.data); 
        })
    },[]) 

    console.log(data); 
    
  return (
    <div>Single</div>
  )
}

export default Single

