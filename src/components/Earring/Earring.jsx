import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getEaring } from '../../redux/Earring/action';
import style from "./Earring.module.css"
import Productbox from '../Productbox';
import Sorting from '../Sorting';
import { randomebox } from '../Skliton/random';
import { useState } from 'react'; 
import Sklitons from '../Skliton/Sklitons';

const Earring = () => {
    const store = useSelector((state) => state.earReducer.earring);
    const dispatch = useDispatch();
    const location = useLocation();
    const [serchParams] = useSearchParams();
    const [box] = useState(randomebox);
    const [skeletonLoading, setSkeletonLoading] = useState(true);
     
    let obj = {
        params: {
            ringsize: serchParams.getAll("category"),
            _sort: serchParams.get("order") && "price",
            _order: serchParams.get("order")
        },
    };

    useEffect(() => {
        dispatch(getEaring(obj));
        setTimeout(() => {
            setSkeletonLoading(false);
        }, 2000);

    }, [location.search]);

    return (
        <div>
            <img width={"100%"} src="https://banner.caratlane.com/live-images/4320a30823014770b49d6c35ba3508c9.jpg" alt="" />
            <div className={style.container}>
                <div className={style.sort}>
                    <Sorting />
                </div>
                <div>
                    {skeletonLoading ?
                        <div className={style.detail}>
                            {box.map((e) => (
                                <Sklitons key={e.id} />
                            ))}
                        </div> :
                        <div className={style.detail}>
                            {store.map((e) => (
                                <Productbox key={e.id} area={"earrings"} {...e} />
                            ))}
                        </div> 
                    }
                </div>
            </div>
        </div>
    )
}


export default Earring  
