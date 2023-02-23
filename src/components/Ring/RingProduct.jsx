import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getRing } from "../../redux/Ring/action";
import Productbox from "../Productbox";
import style from "./Productpage.module.css";
import Sorting from "../Sorting";

const RingProduct = () => {
    const store = useSelector((state) => state.ringReducer.ring);
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
        dispatch(getRing(obj));
    }, [location.search]);

    return (
        <div>
            <img width={"100%"} src="https://banner.caratlane.com/live-images/10c2cf82f2ad425b960f2587933652a7.jpg" alt="" />
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
    );
};

export default RingProduct;
