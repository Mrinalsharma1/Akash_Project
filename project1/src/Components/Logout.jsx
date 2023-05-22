import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Logout() {
    const item = JSON.parse(localStorage.getItem('item'));
    const navigate = useNavigate();
    var count
    if (item) {
        localStorage.removeItem("item");
        count = 1
    }
    useEffect(() => {
        navigate('/')
    }, [count])
    // console.log("count is ", count)
    return (
        <>
            {console.log(count)}

        </>
    )
}

export default Logout