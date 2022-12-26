import React, { useState, useEffect } from 'react'

function Tables(props) {
    const [search, setsearch] = useState([])
    const [status, setStatus] = useState([])
    const [statustrue, setStatusture] = useState([])
    const [params, setParams] = useState('');
    // console.log(props.mydata)
    const clickhandle = (ele) => {
        let newArray = []
        props.mydata.map((e) => {
            if (e.Component === ele) {
                newArray.push(e)
            } else {

            }
        })
        setsearch(newArray)

    }
    const onchange = (ele) => {
        setParams(ele.target.value)
    }
    const handleClick = () => {
        let newArray = []
        props.mydata.map((e) => {
            if (e.Component === params.trim() || e.Customer === params.trim() || e.Features === params.trim()) {
                newArray.push(e)
            } else {

            }
        })
        setsearch(newArray)
    }


    const checkInactive = () => {
        setStatus([])
        let newArray = []
        search.map((e) => {
            if (e.Status === false) {
                newArray.push(e)
            } else {

            }
        })
        setStatus(newArray)
        console.warn('inactive', status)
    }
    const checkactive = () => {
        setStatusture([])
        let newArray = []
        search.map((e) => {
            if (e.Status === true) {
                newArray.push(e)
            } else {

            }
        })
        setStatusture(newArray)
        console.warn('active', status)
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <h2 className='text-success mt-4 text-center'>Data Search Through Given Filter</h2>
                        <div className="input-group mb-3 mt-3">
                            <input type="text" className="form-control" onChange={onchange} placeholder="Search By Keyword" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn fw-bold btn-outline-dark" type="button" onClick={handleClick} id="button-addon2">Search</button>
                        </div>
                        <div className='checkBox'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" onClick={() => clickhandle("HALO Mobile")} id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">HALO Mobile</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" onClick={() => clickhandle("HALO Portal")} id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">HALO Portal</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" onClick={() => clickhandle("HALO Server")} id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">HALO Server</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <p className='py-2 px-2 bg-success text-light rounded'>
                                    Result found : {search.length}
                                </p>



                            </div>
                            <div className='form-check form-check-inline'>
                                <button onClick={checkInactive} className='btn btn-danger text-light mx-2'>
                                    Inactive
                                </button>
                                <button onClick={checkactive} className='btn btn-success text-light'>
                                    Active
                                </button>
                            </div>


                        </div>
                        <div className='userData mt-4'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th className='text-danger' scope="col">#</th>
                                        <th scope="col">Component</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Features</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {search.length === 0 ? props.mydata.map((e, i) => {
                                        return <tr key={i}>
                                            <th scope="row">{i}</th>
                                            <td>{e.Component}</td>
                                            <td>{e.Customer}</td>
                                            <td>{e.Features}</td>
                                            <td>{e.Status ? <p className='text-success'>Active</p> : <p className='text-danger'>Inactive</p>}</td>
                                        </tr>
                                    }) : search.map((e, i) => {
                                        return <tr key={i}>
                                            <th scope="row">{i}</th>
                                            <td>{e.Component}</td>
                                            <td>{e.Customer}</td>
                                            <td>{e.Features}</td>
                                            <td>{e.Status ? <p className='text-success'>Active</p> : <p className='text-danger'>Inactive</p>}</td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </>
    )
}

export default Tables