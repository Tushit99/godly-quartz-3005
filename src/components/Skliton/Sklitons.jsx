import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Sklitons = () => {
    return (
        <div>
            <Skeleton highlightColor="" height={280} />
            <h1><Skeleton height={30} /></h1>
            <h1><Skeleton height={30} /></h1>
            <p><Skeleton height={30} /></p>
        </div>
    )
}

export default Sklitons