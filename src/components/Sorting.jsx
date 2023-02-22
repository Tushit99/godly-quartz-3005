import { Checkbox } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Sorting = () => {
    const [serchParam, setSerchParams] = useSearchParams();
    const initalState = serchParam.getAll("ringsize");
    const [order, setOrder] = useState("");
    const [catagory, setCatagory] = useState(initalState || []);


    const handleChange = (e) => {
        let newCat = [...catagory];
        let value = e.target.value;

        if (newCat.includes(value)) {
            newCat.splice(newCat.indexOf(value), 1);
        }
        else {
            newCat.push(value);
        }
        setCatagory(newCat);
    }

    const handleorder = (e) => {
        setOrder(e.target.value);
    }

    useEffect(() => {
        let params = {
            ringsize: catagory
        }
        setSerchParams(params);
    }, [catagory])

    return (
        <div>
            <h3> Filter By </h3>
            <div>
                <Checkbox size='lg' onChange={handleChange} value={5} colorScheme='blue'>
                    5
                </Checkbox>
                <Checkbox size='lg' onChange={handleChange} value={6} colorScheme='blue'>
                    6
                </Checkbox>
                <Checkbox size='lg' onChange={handleChange} value={7} colorScheme='blue'>
                    7
                </Checkbox>
                <Checkbox size='lg' onChange={handleChange} value={8} colorScheme='blue'>
                    8
                </Checkbox>
                <Checkbox size='lg' onChange={handleChange} value={9} colorScheme='blue'>
                    9
                </Checkbox>
                <Checkbox size='lg' onChange={handleChange} value={10} colorScheme='blue'>
                    10
                </Checkbox>
            </div>
            <div>
                <input type="checkbox" name='order' value="asc" onChange={handleorder} />
                <input type="checkbox" name='order' value="desc" onChange={handleorder} />
            </div>
        </div>
    )
}

export default Sorting 
