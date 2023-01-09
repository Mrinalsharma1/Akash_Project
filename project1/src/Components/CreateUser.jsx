import React, { useState } from 'react'
import { json } from 'react-router-dom'
import NavBar from './NavBar'




function CreateUser() {

    const [user, setuser] = useState({
        name: "",
        email: "",
        usertype: "",
        password: ""
    })
    const onchangehandler = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }


    const createuser = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/admin/createuser', {
            method: "post",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(user)
        }).then(res => { return res.json() })
            .then((result) => {
                alert(result.msg)
                console.log(result)
            })
            .catch(error => { console.log(error) })
    }
    return (
        <>
            <NavBar />
            <div className='container-fluid bg-light'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 mt-4 bg-white p-4 shadow-lg mb-4 rounded'>
                        <div className='customerData'></div>
                        <div className='formHeading'>
                            <h2>Create User <span className='text-danger'>:</span></h2>
                        </div>
                        <form onSubmit={createuser}>
                            <div className="mb-3 mt-4">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" onChange={onchangehandler} placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3 mt-4">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" onChange={onchangehandler} placeholder="Enter Your Email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> User Type</label>
                                <select className="form-select" name="usertype" onChange={onchangehandler} aria-label="Default select example">
                                    <option>Select User</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="mb-3 mt-4">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" onChange={onchangehandler} placeholder="Enter Your Password" />
                            </div>
                            <button type="submit" className="btn btn-success">Create User</button>
                        </form>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </>
    )
}

export default CreateUser