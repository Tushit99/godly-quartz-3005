import { Skeleton } from '@chakra-ui/react';
import style from "./Productbox.module.css";
import { FaChevronRight } from 'react-icons/fa';

const Productbox = ({ image, name, price, strikePrice }) => {


    return (
        <div className={style.box}>
            <div className={style.imgbox}>
                <Skeleton startColor='rgb(196, 188, 232)' endColor='rgb(138, 94, 174)' className={style.skliton} />
                <img className={`skeleton  ${style.proimg}`} src={image} alt="product-img" />
            </div>
            <div className={style.pricebox}>
                <h2>₹{price}</h2>
                <p>₹{strikePrice}</p>
            </div>
            <div className={style.delevery}>
                <h2> Check delivery data </h2>
                <FaChevronRight />
            </div>
            <h3> {name} </h3>
        </div>
    )
}

export default Productbox

