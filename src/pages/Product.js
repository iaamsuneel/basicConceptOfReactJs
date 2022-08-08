import React, { useEffect, useState } from "react";
import {
    useParams,
} from "react-router-dom";
import { getProductById } from "../API/api";

const Product = () => {
    const [getId, setGetId] = useState()
    var { id } = useParams();
    useEffect(() => {
        getProductById(id)
            .then((res) => {
                setGetId([res.data]);
            }
            )
    }, [])
    console.log(getId)
    return (
        <>
            <div>Product : {id}</div>
            {
                getId ? getId.map((e, index) => {
                    return <div key={index}>
                        <h4>Title: {e.title}</h4>
                        <h4>Price Rs: {e.price}</h4>
                        <h4>Category : {e.category}</h4>
                        <h4>Rating : {e.rating.rate}</h4>
                        <img style={{ width: '100px' }} src={e.image} alt="Image" />
                    </div>
                }) : null
            }
        </>
    )
}
export default Product;