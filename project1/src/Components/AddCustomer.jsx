import React, { useState } from 'react'
import NavBar from './NavBar'

function AddCustomer() {
    const [data, setdata] = useState({
        cname: "",
        environment: "",
        component: "",
        features: "",
        Status: ""
    })
    const onchangehandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }


    const addCustomer = (e) => {
        e.preventDefault()
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
                        <div className="mb-3 mt-4">
                            <label className="form-label">Customer Name</label>
                            <input type="text" className="form-control" name="cname" onChange={onchangehandler} aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Environment</label>
                            <input type="text" className="form-control" name='environment' onChange={onchangehandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Component</label>
                            <input type="text" className="form-control" name='component' onChange={onchangehandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Features</label>
                            <input type="text" className="form-control" name='features' onChange={onchangehandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <input type="text" className="form-control" name='Status' onChange={onchangehandler} />
                        </div>
                        <button type="submit" onClick={addCustomer} className="btn btn-success">Submit</button>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>

        </>
    )
}

export default AddCustomer