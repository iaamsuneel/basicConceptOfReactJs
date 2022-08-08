import React, { useState, useEffect } from "react";
const Forms = () => {
    const [user, setUser] = useState({})
    const HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var userName = user.name
        var count = 0;
        for (var i = 0; i < userName.length; i++) {
            if (userName.charAt(i) != ' ') {
                count++
            }
        }
        if (count > 7) {
            alert("Congratuations Dude!")
        }
        else {
            alert("Can not Proceed Because you name Strength less than 8 Digit!")
        }
        /* console.log(count)
        console.log(userName)
        console.log(user) */
        if (localStorage.getItem('user')) {
            const userLocal = JSON.parse(localStorage.getItem("user"));
            localStorage.setItem('user', JSON.stringify([...userLocal, user]))
        }
        else {
            localStorage.setItem('user', JSON.stringify([user]));

        }
    }

    /*  useEffect(() => {
         localStorage.setItem('user', JSON.stringify(user))
     }, [user]) */

    return (
        <>
            <h2>Form Page!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Enter Your Name"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={HandleChange} />
                <br /><br />
                <input placeholder="Enter Your Email"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={HandleChange} />
                <br /><br />
                <button type="submit"> Login</button>
                <div>

                </div>
            </form>
        </>
    )
}
export default Forms;