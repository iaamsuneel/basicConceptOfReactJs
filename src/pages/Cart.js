import React, { useEffect, useState } from "react";
import { getProductById } from "../API/api";
const Cart = () => {
    const [getProd, setGetProd] = useState([])
    const [count, setCount] = useState();
    var getIdProduct = []
    useEffect(() => {
        var x = JSON.parse(localStorage.getItem('id'))
        x.forEach((item) => {
            getProductById(item)
                .then((res) => {
                    console.log(res.data)
                    getIdProduct.push(res.data);
                    setGetProd([...getIdProduct]);
                }
                )
        })
        const userId = JSON.parse(localStorage.getItem('id'))
        //console.log("userId=" +userId)
        setCount(Object.entries(userId).length)
    }, [count])
    const RemoveCartButton = (id) => {
        console.log(id)
        let items = JSON.parse(localStorage.getItem('id'))
        items.forEach((e) => {
            if (e === id) {
                items.splice(items.indexOf(id), 1)
            }
        });
        localStorage.setItem('id', JSON.stringify(items))
        var userId = JSON.parse(localStorage.getItem('id'))
        setCount(Object.entries(userId).length)
        setGetProd([...getIdProduct]);
    }
    return (
        <>
            <h5>Add Product Cart </h5>
            <button>AddCart<br />{count}</button>
            {
                getProd ? getProd.map((e, index) => {
                    return <div key={index}>
                        <h4>ID: {e.id}</h4>
                        <h4>Title: {e.title}</h4>
                        <h4>Price Rs: {e.price}</h4>
                        <h4>Category : {e.category}</h4>
                        <h4>Rating : {e.rating.rate}</h4>
                        <img style={{ width: '100px' }} src={e.image} alt="Image" />
                        <button onClick={() => { RemoveCartButton(e.id) }}>RemoveItem</button>
                    </div >
                }) : null
            }
        </>
    )
}
export default Cart;