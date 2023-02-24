import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom'; 
import style from "./Newarival.module.css" 
import Productbox from '../Productbox';
import Sorting from '../Sorting';
import { getNewarival } from '../../redux/Newarival/action';

const NewArival = () => {
    const store = useSelector((state) => state.arivalReducer.newArival);
    const dispatch = useDispatch();
    const location = useLocation();
    const [serchParams] = useSearchParams();

    let obj = {
        params: {
            ringsize: serchParams.getAll("category"),
            _sort: serchParams.get("order") && "price", 
            _order: serchParams.get("order") 
        },
    };

    useEffect(() => {
        dispatch(getNewarival(obj));
    }, [location.search]); 

    return ( 
        <div>
            <img width={"100%"} src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Newin/01/Desktop_1920-x560_toplisting.jpg" alt="" />
            <div className={style.container}>
                <div className={style.sort}>
                    <Sorting />
                </div> 
                <div className={style.detail}>
                    {store.map((e) => (
                        <Productbox key={e.id} {...e} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default NewArival  
