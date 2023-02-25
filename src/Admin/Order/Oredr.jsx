import React from 'react'
import style from "./Order.module.css";

const Oredr = () => {
    return (
        <div className={style.main}>
            <div className={style.orderbox}>
                <div>
                    <img src="https://cdn.caratlane.com/media/catalog/product/J/E/JE05358-YGP6RS_3_lar.jpg" alt="" />
                </div>
                <div>
                    <h3>name</h3>
                    <h3>price</h3>
                    <h3>Order data</h3>
                    <h3>Address</h3>
                </div>
            </div>
        </div>
    )
}

export default Oredr

