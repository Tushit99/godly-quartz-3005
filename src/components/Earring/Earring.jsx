import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getEaring } from '../../redux/Earring/action';
import style from "./Earring.module.css" 
import Productbox from '../Productbox';
import Sorting from '../Sorting';

const Earring = () => {
    const store = useSelector((state) => state.earReducer.earring);
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
        dispatch(getEaring(obj));
    }, [location.search]); 

    return ( 
        <div>
            <img width={"100%"} src="https://banner.caratlane.com/live-images/4320a30823014770b49d6c35ba3508c9.jpg" alt="" />
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


export default Earring  
