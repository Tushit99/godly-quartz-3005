import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./Edit.module.css";

const Edit = () => {
  const [image, setImage] = useState("");
  const [fullname, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [strikePrice, setStrikePrice] = useState("");
  const [rating, setrating] = useState("");
  const [type, setType] = useState("");
  const [ringsize, setRingsize] = useState("");
  const { name, id } = useParams(); 
  const navigate = useNavigate(); 


  const handleChange = async (e) => {
    e.preventDefault();
    try {
      let obj = {
        image, 
        name: fullname,
        discription,
        price: +price,
        strikePrice: +strikePrice,
        ringsize: +ringsize,
        rating: +rating,
        type,
      };
      let res = await axios
        .patch(`https://tame-lime-hose.cyclic.app/${name}/${id}`, obj)
      console.log(res);
      setImage("");
      setName("");
      setDiscription("");
      setPrice("");
      setRingsize("");
      setrating("");
      setType("");
      setStrikePrice("");
      navigate("/admin"); 
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    axios.get(`https://tame-lime-hose.cyclic.app/${name}/${id}`).then((e) => {
      setImage(e.data.image);
      setName(e.data.name);
      setDiscription(e.data.discription);
      setPrice(e.data.price);
      setRingsize(e.data.ringsize);
      setrating(e.data.rating);
      setType(e.data.type);
      setStrikePrice(e.data.strikePrice);
    })
  }, [])


  return (
    <div className={style.formtop}>
      <h2> data post </h2>
      <form onSubmit={handleChange}>
        <div>
          <label> Image Url </label>
          <input
            type="text"
            value={image}
            placeholder="Enter image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label> Name </label>
          <input
            type="text"
            value={fullname}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>discription</label>
          <input
            type="text"
            value={discription}
            placeholder="Enter discription"
            onChange={(e) => setDiscription(e.target.value)}
          />
        </div>
        <div>
          <label> Price </label>
          <input
            type="text"
            value={price}
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label> strikePrice </label>
          <input
            type="text"
            value={strikePrice}
            placeholder="Enter striked price"
            onChange={(e) => setStrikePrice(e.target.value)}
          />
        </div>
        <div>
          <label> ring size </label>
          <input
            type="text"
            value={ringsize}
            placeholder="Enter ring size"
            onChange={(e) => setRingsize(e.target.value)}
          />
        </div>
        <div>
          <label>rating</label>
          <input
            type="text"
            value={rating}
            placeholder="Enter rating"
            onChange={(e) => setrating(e.target.value)}
          />
        </div>
        <div>
          <label> type </label>
          <input
            type="text"
            value={type}
            placeholder="Enter type"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <Button colorScheme='twitter' variant='solid' type="submit"> Submit </Button>
      </form>
    </div>
  )
}

export default Edit

