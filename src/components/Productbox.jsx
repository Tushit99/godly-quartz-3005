import { Button, } from '@chakra-ui/react';
import style from "./Productbox.module.css";
import { FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Productbox = ({ image, name, price, strikePrice }) => {
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
        <SkeletonTheme baseColor="#313131" highlightColor="#525252" >
            <div className={style.box}>
                <div className={style.imgbox}>
                    <img className={style.proimg || <Skeleton count={1} />} src={image} alt="product-img" />
                </div>  
                <div className={style.pricebox}>
                    <h2>₹{price || <Skeleton count={1} />}</h2>
                    <p>₹{strikePrice || <Skeleton count={1} />}</p>
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
                        {btText || <Skeleton count={1} />}{btText === "Check delivery date" ? <FaChevronRight /> : ""}
                    </Button>
                </div>

                <h3> {name || <Skeleton count={1} />} </h3>
            </div>
        </SkeletonTheme>
    )
}

export default Productbox
