import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEaring } from '../redux/Earring/action';
import { getNewarival } from '../redux/Newarival/action';
import { getRing } from '../redux/Ring/action';
import AdminDetail from './AdminDetail';
import style from "./Admin.module.css"
import axios from 'axios';

const Admin = () => { 
    const data1 = useSelector((state) => state.earReducer.earring);
    const data2 = useSelector((state) => state.arivalReducer.newArival);
    const data3 = useSelector((state) => state.ringReducer.ring);
    const dispatch = useDispatch(); 

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [discription, setDiscription] = useState("");
    const [price, setPrice] = useState("");
    const [strikePrice, setStrikePrice] = useState("");
    const [rating, setrating] = useState("");
    const [type, setType] = useState(""); 
    const [ringsize, setRingsize] = useState(""); 


    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj = {
            image,
            name,
            discription: "Set in 14 KT Yellow Gold(3.160 g) with diamonds (0.250 ct ,IJ-SI)",
            price: +price, 
            strikePrice: +price,
            ringsize: +ringsize ,
            rating: +rating ,
            type: "earring",
        };
        let res = await axios
            .post("http://localhost:8080/earrings", obj) 
        console.log(res);
        setImage("");
        setName("");
        setDiscription("");
        setPrice("");
        setRingsize(""); 
        setrating("");
        setType(""); 
        setStrikePrice("");    
        dispatch(getNewarival());
        dispatch(getEaring());
        dispatch(getRing());  
    }; 

    const handleDelete = async (id,name) => {
        let x = await axios.delete(`http://localhost:8080/${name}/${id}`); 
        dispatch(getNewarival());
        dispatch(getEaring());
        dispatch(getRing());  
        console.log(x); 
    }  
    
    useEffect(() => {
        dispatch(getNewarival());
        dispatch(getEaring());
        dispatch(getRing());
    }, []);

    return (
        <div className={style.top}>
            <div className={style.container}>
                <div className={style.box}>
                    <span className={style.border}></span>
                    <form id='mform' onSubmit={handleSubmit}>
                        <h2> data post </h2>
                        <input
                            type="text"
                            value={image}
                            placeholder="Enter image"
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <input
                            type="text"
                            value={name}
                            placeholder="Enter name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            value={discription}
                            placeholder="Enter discription"
                            onChange={(e) => setDiscription(e.target.value)}
                        />
                        <input
                            type="text"
                            value={price}
                            placeholder="Enter price"
                            onChange={(e) => setPrice(e.target.value)}
                        /> 
                        <input
                            type="text"
                            value={ringsize}
                            placeholder="Enter ring size"
                            onChange={(e) => setRingsize(e.target.value)}
                        /> 
                        <input
                            type="text"
                            value={strikePrice}
                            placeholder="Enter striked price"
                            onChange={(e) => setStrikePrice(e.target.value)}
                        />
                        <input
                            type="text"
                            value={rating}
                            placeholder="Enter rating"
                            onChange={(e) => setrating(e.target.value)}
                        />
                        <input
                            type="text"
                            value={type}
                            placeholder="Enter type"
                            onChange={(e) => setType(e.target.value)}
                        />
                        <button className={style.btn} type="submit"> Submit </button>
                    </form>
                </div>
            </div>
            <div>
                <Tabs className={style.appdata} isFitted variant='enclosed'>
                    <TabList mb='1em'>
                        <Tab>Earing </Tab>
                        <Tab> NewArival </Tab>
                        <Tab> Ring </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <AdminDetail detail={data1} pageon={"earrings"} handleDelete={handleDelete} />
                        </TabPanel>
                        <TabPanel>
                            <AdminDetail detail={data2} pageon={"arivals"} handleDelete={handleDelete} />
                        </TabPanel>
                        <TabPanel>
                            <AdminDetail detail={data3} pageon={"rings"} handleDelete={handleDelete} /> 
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Admin

