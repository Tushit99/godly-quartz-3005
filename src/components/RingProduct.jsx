import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRing } from "../redux/Ring/action";
import Productbox from "./Productbox";
import style from "./Productpage.module.css"

const RingProduct = () => {
    const store = useSelector((state) => state.ringReducer.ring);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRing());  
    }, [])

    

    return <div className={style.container}>
        <div>
            <h1> Sorting box </h1>
        </div>
        <div className={style.detail}>
            {store.map((e) => (
                <Productbox key={e.id} {...e} />
            ))}
        </div>
    </div>;
};

export default RingProduct;
