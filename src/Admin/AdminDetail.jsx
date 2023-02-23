import { Button } from '@chakra-ui/react';
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import style from "./AdminDetail.module.css"

const AdminDetail = ({ detail, pageon, handleDelete }) => {

    return (
        <div className={style.coverbox}>
            {detail.map((e) => (
                <div key={e.id} className={style.box}>
                    <div className={style.imgbox}>
                        <img className={style.proimg || <Skeleton count={1} />} src={e.image} alt="product-img" />
                    </div>
                    <div>
                        <h3> {e.name || <Skeleton count={1} />} </h3>
                        <div className={style.pricebox}>
                            <h2>₹{e.price || <Skeleton count={1} />}</h2>
                            <p>₹{e.strikePrice || <Skeleton count={1} />}</p>
                        </div>
                        <h2> Ring size:{e.ringsize} </h2>
                        <h2> Rating: {e.rating} </h2>
                        <h2> Type of: {e.type} </h2>
                        <div className={style.edbtn}>
                            <Button colorScheme='twitter' w="100%" variant='outline'>
                                <Link to={`/`}>
                                    Edit
                                </Link>
                            </Button>
                            <Button colorScheme='twitter' w="100%" onClick={() => handleDelete(e.id, pageon)} variant='outline'>
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminDetail