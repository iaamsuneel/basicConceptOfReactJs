import React, { useEffect, useState } from "react";
const Home = () => {
    const [count, setCount] = useState(0)
    const [pop, SetPop] = useState(false)
    const [name, setName] = useState("SparxIT")
    const [user, setUser] = useState({
        1: "Suneel",
        2: "B.Tech",
        3: " Noida"
    });
    useEffect(() => {
        setTimeout(()=>{
            setCount(count+1)
        },4000)
        
    },[])
    const changed = () => {
        setName("SparxIT Solutions")

    }
    // var x = [1,2,3]
    // var y=x
    // var z = [...x]
    // console.log("z",z)
    // x.pop()
    // console.log("y",y)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}> ClickMe</button>
            <p>
                {user[count]}
            </p>

            <button onClick={() => SetPop(true)}> ClickForForm </button>
            {pop ? <div >Popup
                <button onClick={() => SetPop(false)}> Close </button>
            </div> : null}

            <h3>Name of {name}</h3>
            <button onClick={changed}>Magic</button>
        </div>


    )
}
export default Home;