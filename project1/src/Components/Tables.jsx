import React, { useState } from 'react'
import Data from './Data';

function Tables(props) {
    const [search, setsearch] = useState([])
    const [active, setActive] = useState([])
    const [params, setParams] = useState('');
    const [page, setPage] = useState({
        currentpage: 0,
        nextpage: 100
    })
   

    const clickhandle = (ele) => {
        setActive([])
        if (ele.target.checked === false) return 0;
        let newArray = []
        props.mydata.map((e) => {
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
        props.mydata.map((e) => {
            
            if (e.Component === params.trim() || e.Customer === params.trim() || e.Features === params.trim()) {
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
    var count = 0;
    let propsdata = props.mydata;
    let activedata = active;

    let searchdata = search;
    let currentdata = propsdata.slice(page.currentpage, page.nextpage)
    activedata = activedata.slice(page.currentpage, page.nextpage)
    searchdata = searchdata.slice(page.currentpage, page.nextpage)
    count = page.currentpage;

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'>

                    </div>
                    <div className='col-md-10 mx-auto'>
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
                                    Result found : {active.length?active.length:search.length}
                                </p>
                            </div>
                            {
                                search.length?
                            <div className='form-check form-check-inline'>
                                <button onClick={() => checkactive(false)} className='btn btn-danger text-light mx-2'>
                                    Inactive
                                </button>
                                <button onClick={() => checkactive(true)} className='btn btn-success text-light'>
                                    Active
                                </button>
                            </div>
                            :''
                            }
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
                                    {search.length === 0 ? currentdata.map((e, i) => {
                                        return <tr key={i}>
                                            <th scope="row">{count + i + 1}</th>
                                            <td>{e.Component}</td>
                                            <td>{e.Customer}</td>
                                            <td>{e.Features}</td>
                                            <td>{e.Status ? <p className='text-success'>Active</p> : <p className='text-danger'>Inactive</p>}</td>
                                        </tr>
                                    }) : active.length === 0 ?
                                        searchdata.map((e, i) => {
                                            return <tr key={i}>
                                                <th scope="row">{count + i + 1}</th>
                                                <td>{e.Component}</td>
                                                <td>{e.Customer}</td>
                                                <td>{e.Features}</td>
                                                <td>{e.Status ? <p className='text-success'>Active</p> : <p className='text-danger'>Inactive</p>}</td>
                                            </tr>
                                        }) : <Data cpage={page.currentpage} activeData={activedata} />
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
                                    
                                    {active.length===0 && search.length===0?
                                    
                                    <button disabled={
                                    page.nextpage > props.mydata.length 
                                    } className="page-link" onClick={() => changePage('next')} >Next</button>
                                 : active.length===0?
                                 <button disabled={
                                    page.nextpage > search.length
                                   } className="page-link" onClick={() => changePage('next')} >Next</button>   
                                 
                                 :  <button disabled={
                                     page.nextpage > active.length
                                    } className="page-link" onClick={() => changePage('next')} >Next</button>   
                                }
                                    </li>
                            </ul>
                            
                            for better under standing
                            {props.mydata.length },
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