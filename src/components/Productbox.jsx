import { Button, } from '@chakra-ui/react';
import style from "./Productbox.module.css";
import { FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from 'react-router-dom';

const Productbox = ({id, image, name, price, strikePrice, area }) => {
    const [btloading, setBtloading] = useState(false);
    const [btText, setBtText] = useState("Check delivery date");

    const deleveryDate = () => {
        setBtloading(true);
        setTimeout(() => {
            const date = new Date();
            const la = Math.round(Math.random() * 8) + 2
            console.log(la)
            const x = date.getDate() + la;
            date.setDate(x)
            let s = date.toString().split(" ")
            let a = s[2] + " " + s[1]
            setBtText(`Delivery by ${a}`);
            setBtloading(false);
        }, 2000)
    }

    return (
        <Link to={`./${area}/${id}`}>
            <div className={style.box}>
                <div className={style.imgbox}>
                    <img className={style.proimg} src={image} alt="product-img" />
                </div>
                <div className={style.pricebox}>
                    <h2>₹{price}</h2>
                    <p>₹{strikePrice}</p>
                </div>
                <div>
                    <Button
                        isLoading={btloading}
                        colorScheme='white'
                        padding={0}
                        height={5}
                        cursor="pointer"
                        margin={0}
                        fontSize="large"
                        color={"black"}
                        onClick={deleveryDate}
                        spinner={<BeatLoader size={8} color='blue' />}
                    >
                        {btText}{btText === "Check delivery date" ? <FaChevronRight /> : ""}
                    </Button>
                </div>

                <h3> {name} </h3>
            </div>
        </Link>
    )
}

export default Productbox
