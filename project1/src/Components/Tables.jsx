import React, { useState, useEffect } from 'react'
import * as XLSX from 'xlsx';

function Tables(props) {
    const [maindata, setMaindata] = useState([])
    const [search, setsearch] = useState([])
    const [active, setActive] = useState([])
    const [params, setParams] = useState('');

    const [update, setUpdate] = useState(
        { _id: '', Customer: '', Envi: '', Component: '', Features: '', Status: '' }
    )
    useEffect(() => {
        setMaindata(props.mydata)
    }, [props.mydata])


    const addpersistent = (e) => {
        setUpdate(e)
    }

    const updateCustomer = (e) => {
        e.preventDefault()

        // api call 
        const data = maindata;
        fetch(`http://localhost:5000/admin/updatecustomer/${update._id}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(update)
        }).then(res => { return res.json() })
            .then((result) => {
                if (result.success === false) {
                    return 0
                } else {
                    return 0
                }
            })
            .catch(error => { return console.log(error) })

        //update data from front end
        let newArray = []
        data.map((e) => {
            if (e._id !== update._id) {
                newArray.push(e)
            } else { 
                let upd_index = data.findIndex((obj => obj._id ===e._id));
                data[upd_index]._id = update._id
                data[upd_index].Component = update.Component
                data[upd_index].Customer = update.Customer
                data[upd_index].Envi = update.Envi
                data[upd_index].Features = update.Features
                if(update.Status==="true")
                {
                    data[upd_index].Status = true

                }else{
                    data[upd_index].Status = false

                }
                newArray.push(e)
            }
        })
        setMaindata(newArray)
    }

    const onchangeupdatehandler = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value.trim() })
    }

    const [page, setPage] = useState({
        currentpage: 0,
        nextpage: 100
    })

    const clickhandle = (ele) => {
        setActive([])
        if (ele.target.checked === false) return 0;
        let newArray = []
        maindata.map((e) => {
            if (e.Component === ele.target.name) {
                newArray.push(e)
            }
        })
        setsearch(newArray)
    }
    const onchange = (ele) => {
        setParams(ele.target.value)
    }
    const handleClick = () => {
        setActive([])
        let newArray = []
        maindata.map((e) => {
            if (e.Component === params.trim() || e.Customer === params.trim() || e.Features === params.trim()
                || e.Envi === params.trim()
            ) {
                newArray.push(e)
            }
        })
        setsearch(newArray)
    }

    const checkactive = (status) => {
        let newArray = []
        search.map((e) => {
            if (e.Status === status) {
                newArray.push(e)
            }
        })
        setActive(newArray)
    }

    const changePage = (e) => {
        const currentpage = page.currentpage;
        const nextpage = page.nextpage;

        if (e === 'next') {
            setPage(
                {
                    currentpage: currentpage + 100,
                    nextpage: nextpage + 100
                }
            )
        } else {
            setPage(
                {
                    currentpage: currentpage - 100,
                    nextpage: nextpage - 100
                }
            )
        }
    }
    // delete data from db
    const deleteData = (id) => {
        const data = maindata;

        fetch(`http://localhost:5000/admin/deletecustomer/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        }).then(res => { return res.json() })
            .then((result) => {
                if (result.success === false) {
                    return alert("not deleted")
                }
            })
            .catch(error => { return console.log(error) })

        //delete data from front end
        let newArray = []
        data.map((e) => {
            if (e._id !== id) {
                newArray.push(e)
            }
        })
        console.log(newArray)
        setMaindata(newArray)

    }

    // archive data

    const archiveData = (id, body) => {
        const data = maindata;
        fetch(`http://localhost:5000/admin/archivedcustomer/${id}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body)
        }).then(res => { return res.json() })
            .then((result) => {
                if (result.success === false) {
                    return alert("not deleted")
                } else {
                    return alert("archved")
                }
            })
            .catch(error => { return console.log(error) })

        //delete data from front end
        let newArray = []
        data.map((e) => {
            if (e._id !== id) {
                newArray.push(e)
            } 
        })
        setMaindata(newArray)

    }

    //end function
    var count = 0;

    let propsdata = maindata;
    let activedata = active;

    let searchdata = search;
    let currentdata = propsdata.slice(page.currentpage, page.nextpage)
    activedata = activedata.slice(page.currentpage, page.nextpage)
    searchdata = searchdata.slice(page.currentpage, page.nextpage)
    count = page.currentpage;

    const onDownload = (data) => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "DataSheet.xlsx");
    };

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Customer</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={updateCustomer}>
                            <div className="modal-body">
                                <input style={{ display: 'none' }} type="text" onChange={onchangeupdatehandler} value={update._id} name="_id" />
                                <div className="mb-3 mt-4">
                                    <label className="form-label">Customer Name</label>
                                    <input value={update.Customer} type="text" className="form-control" name="Customer" onChange={onchangeupdatehandler} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Environment</label>
                                    <input value={update.Envi} type="text" className="form-control" name='Envi' onChange={onchangeupdatehandler} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Component</label>
                                    <input value={update.Component} type="text" className="form-control" name='Component' onChange={onchangeupdatehandler} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Features</label>
                                    <input value={update.Features} type="text" className="form-control" name='Features' onChange={onchangeupdatehandler} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"></label>
                                    <select value={update.Status} className="form-select" name="Status" onChange={onchangeupdatehandler} aria-label="Default select example">
                                        <option>Select Status</option>
                                        <option value="true">true</option>
                                        <option value="false">false</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                   
                    <div className='col-md-12 '>
                        <h2 className='text-success mt-4 text-center'>Data Search Through Given Filter</h2>
                        <div className="input-group mb-3 mt-3">
                            <input type="text" className="form-control" onChange={onchange} placeholder="Search By Keyword" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn fw-bold btn-outline-dark" type="button" onClick={handleClick} id="button-addon2">Search</button>
                        </div>
                        <div className='checkBox'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name='HALO Mobile' onChange={clickhandle} id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">HALO Mobile</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="HALO Portal" onChange={clickhandle} id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">HALO Portal</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="HALO Server" onChange={clickhandle} id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">HALO Server</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <p className='py-2 px-2 bg-success text-light rounded'>
                                    Result found : {active.length ? active.length : search.length}

                                </p>
                            </div>

                            <div className='form-check form-check-inline'>
                                {
                                    search.length ? <>
                                        <button onClick={() => checkactive(false)} className='btn btn-danger text-light mx-2'>
                                            Inactive
                                        </button>
                                        <button onClick={() => checkactive(true)} className='btn btn-success text-light'>
                                            Active
                                        </button>
                                    </>
                                        : ''
                                }
                                <button className='btn btn-secondary text-light ms-2' onClick={() => onDownload(active)}> Export excel </button>
                            </div>
                        </div>
                        <div className='userData mt-4'>
                            <table className="table table-striped" >
                                <thead>
                                    <tr>
                                        <th className='text-danger' scope="col">#</th>
                                        <th scope="col">Component</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Features</th>
                                        <th scope='col'>Environment</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {search.length === 0 ? currentdata.map((e, i) => {
                                        return <tr key={i}>
                                            <th scope="row">{count + i + 1}</th>
                                            <td>{e.Component}</td>
                                            <td>{e.Customer}</td>
                                            <td>{e.Features}</td>
                                            <td>{e.Envi}</td>
                                            <td>{e.Status===true ? <p className='text-success'>Active</p> : <p className='text-danger'>Inactive</p>} </td>
                                            <td>
                                                <button onClick={() => addpersistent(e)} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-primary me-2'>
                                                    Edit
                                                </button>
                                                <button onClick={() => archiveData(e._id, e)} className='btn btn-warning text-light me-2'>
                                                    Archived
                                                </button>
                                                <button onClick={() => deleteData(e._id)} className='btn btn-danger'>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    }) : active.length === 0 ?
                                        searchdata.map((e, i) => {
                                            return <tr key={i}>
                                                <th scope="row">{count + i + 1}</th>
                                                <td>{e.Component}</td>
                                                <td>{e.Customer}</td>
                                                <td>{e.Features}</td>
                                                <td>{e.Envi}</td>
                                                <td>{e.Status ===true ? <p className='text-success'>Active</p> : <p className='text-danger'>Inactive</p>}</td>
                                                <td>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-primary me-2'>
                                                        Edit
                                                    </button>
                                                    <button onClick={() => archiveData(e._id, e)} className='btn btn-warning text-light me-2'>
                                                        Archived
                                                    </button>
                                                    <button onClick={() => deleteData(e._id)} className='btn btn-danger'>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        }) : //<Data cpage={page.currentpage} activeData={activedata}
                                        activedata.map((e, i) => {
                                            return <tr key={i}>
                                                <th scope="row">{count + i + 1}</th>
                                                <td>{e.Component}</td>
                                                <td>{e.Customer}</td>
                                                <td>{e.Features}</td>
                                                <td>{e.Envi}</td>
                                                <td>{e.Status ===true ? <p className='text-success'>Active</p> : <p className='text-danger'>Inactive</p>}</td>
                                                <td>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-primary me-2'>
                                                        Edit
                                                    </button>
                                                    <button onClick={() => archiveData(e._id, e)} className='btn btn-warning text-light me-2'>
                                                        Archived
                                                    </button>
                                                    <button onClick={() => deleteData(e._id)} className='btn btn-danger '>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-md-1'>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 mx-auto">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><button disabled={page.currentpage < 1} className="page-link" onClick={() => changePage('prev')} >Previous  </button></li>

                                <li className="page-item">

                                    {active.length === 0 && search.length === 0 ?

                                        <button disabled={
                                            page.nextpage > maindata.length
                                        } className="page-link" onClick={() => changePage('next')} >Next</button>
                                        : active.length === 0 ?
                                            <button disabled={
                                                page.nextpage > search.length
                                            } className="page-link" onClick={() => changePage('next')} >Next</button>

                                            : <button disabled={
                                                page.nextpage > active.length
                                            } className="page-link" onClick={() => changePage('next')} >Next</button>
                                    }
                                </li>
                            </ul>

                            {/* for better under standing */}
                            {maindata.length},
                            {search.length}  ,
                            {active.length} === {page.nextpage}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tables