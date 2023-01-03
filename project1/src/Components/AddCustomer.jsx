import React, { useState } from 'react'
import NavBar from './NavBar'

function AddCustomer() {
    const [data, setdata] = useState({
        Customer: "",
        Envi: "",
        Component: "",
        Features: "",
        Status: ""
    })
    const onchangehandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }


    const addCustomer = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/admin/addcustomer`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
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
                    <div className='col-md-8 mt-4 bg-white p-4 shadow-lg mb-4'>
                        <div className='customerData'></div>
                        <div className='formHeading'>
                            <h2>Add Customer <span className='text-danger'>:</span></h2>
                        </div>
                        <form onSubmit={addCustomer}>
                            <div className="mb-3 mt-4">
                                <label className="form-label">Customer Name</label>
                                <input type="text" className="form-control" name="Customer" onChange={onchangehandler} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Environment</label>
                                <input type="text" className="form-control" name='Envi' onChange={onchangehandler} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Component</label>
                                <input type="text" className="form-control" name='Component' onChange={onchangehandler} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Features</label>
                                <input type="text" className="form-control" name='Features' onChange={onchangehandler} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"></label>
                                <select className="form-select" name="Status" onChange={onchangehandler} aria-label="Default select example">
                                    <option>Select Status</option>
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                </select>

                            </div>
                            <button type="submit" className="btn btn-success">Add Customer</button>
                        </form>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>

        </>
    )
}

export default AddCustomer