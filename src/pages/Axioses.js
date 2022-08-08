import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, getProduct, getProductByCategory } from "../API/api";

const Axioses = () => {
    const [post, setPost] = useState();
    const [allData, setAllData] = useState();
    const [gets, setGets] = useState();
    const [countItem, setCountItem] = useState()
    useEffect(() => {
        //axios.get(baseURL)
        if (!post) {
            getProduct()
                .then((res) => {
                    setPost(res.data);
                    setAllData(res.data)
                    //console.log(setPost)
                    //console.log(res)
                    console.log(res.data);
                })
            getCategories()
                .then((res) => {
                    setGets(res.data);
                    //console.log(setPost)
                    //console.log(res)
                    console.log(res.data);
                })
        }
        var userId = JSON.parse(localStorage.getItem('id'))
        setCountItem(Object.entries(userId).length)
    }, [post, countItem])
    const selectCategories = (e) => {
        console.log(e.target.value)
        getProductByCategory(e.target.value)
            .then((res) => {
                setPost(res.data);
                console.log(res.data);
            })
    }
    const searchItems = (searchValues) => {
        if (searchValues) {
            const filteredData = allData.filter((item) => {
                return item.title.toLowerCase().includes(searchValues.toLowerCase())
            })
            setPost(filteredData)
            // setFilteredResult(filteredData)
        }
        else { setPost(allData) }
    }
    //console.log(filtredResult)
    // console.log(filteredData)
    const sorting = (e) => {
        var copyPost = [...post]
        if (e.target.value === 'ascending') {
            copyPost.sort((a, b) => (a.price > b.price) ? 1 : -1)
            setPost(copyPost)
        }
        if (e.target.value === 'descending') {
            console.log(e.target.value)
            copyPost.sort((a, b) => (a.price < b.price) ? 1 : -1)
            setPost(copyPost)
        }
        if (e.target.value === 'default') {
            console.log(e.target.value)
            copyPost.sort((a, b) => (a.id > b.id) ? 1 : -1)
            setPost(copyPost)
        }
    }
    // add cart id in localStorage

    const addCartButton = (id) => {
        // console.log(id)
        if (localStorage.getItem('id')) {
            const userId = JSON.parse(localStorage.getItem('id'))
            console.log("userId", userId);
            if (!userId.includes(id)) {
                localStorage.setItem('id', JSON.stringify([...userId, id]))
            }
        }
        else {
            localStorage.setItem('id', JSON.stringify([id]))
        }
        // count for object id
        var userId = JSON.parse(localStorage.getItem('id'))
        setCountItem(Object.entries(userId).length)
        // console.log(countItem)
    }
    const RemoveCartButton = (id) => {
        let items = JSON.parse(localStorage.getItem('id'))
        items.forEach((item) => {
            if (item === id) {
                items.splice(items.indexOf(id), 1)
            }

        });
        localStorage.setItem('id', JSON.stringify(items))
        var userId = JSON.parse(localStorage.getItem('id'))
        setCountItem(Object.entries(userId).length)
    }
    const addCartCount = () => {

    }
    return (

        <>  <div style={{ float: "right", margin: "10px" }}>
            <Link to="/cart"><button onClick={addCartCount}>AddCart<br />{countItem ? countItem : null}</button></Link>
        </div>
            <input name="search" onChange={(e) => searchItems(e.target.value)} type="search" placeholder="Search" />
            <div> < select onChange={selectCategories}>
                <option value="All">All</option>
                {gets ? gets.map((e, index) => {
                    return (<option key={index} value={e}>{e}</option>)

                }) : null
                }
            </select>
                <select onChange={sorting}>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>descending</option>
                    <option value='default'>default</option>
                </select>
            </div>
            {
                post ? post.map(item => {
                    return <div key={item.id} >
                        <Link to={`/product/${item.id}`}>
                            <h4>ID : {item.id}</h4>
                            <h3>Title : {item.title}</h3>
                            <h4>Price Rs: {item.price} </h4>
                            <h5>Category: {item.category}</h5>
                            <h5>rating: {item.rating.rate}</h5> </Link>
                        {
                            JSON.parse(localStorage.getItem('id'))?.includes(item.id) ?
                                <button onClick={() => RemoveCartButton(item.id)}>RemoveItem</button> : <button onClick={() => addCartButton(item.id)}>AddItem</button>
                        }
                        <img style={{ width: '100px' }} src={item.image} alt="Image" />
                    </div>
                }) : null
            }
        </>
    )
}
export default Axioses;