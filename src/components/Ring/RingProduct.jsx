import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getRing } from "../../redux/Ring/action";
import Productbox from "../Productbox";
import style from "./Productpage.module.css";
import Sorting from "../Sorting";
import { randomebox } from "../Skliton/random";
import { useState } from "react"; 
import Sklitons from "../Skliton/Sklitons";

const RingProduct = () => {
    const store = useSelector((state) => state.ringReducer.ring);
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
        dispatch(getRing(obj));
        setTimeout(() => {
            setSkeletonLoading(false);
        }, 2000);
    }, [location.search]);

    return (
        <div>
            <img width={"100%"} src="https://banner.caratlane.com/live-images/10c2cf82f2ad425b960f2587933652a7.jpg" alt="" />
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
                                <Productbox key={e.id} {...e} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default RingProduct;
