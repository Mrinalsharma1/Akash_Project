import React from 'react'

function Tables() {
  return (
    <>
                <div className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <h2 className='text-success mt-4 text-center'>Data Search Through Given Filter</h2>
                        <div className="input-group mb-3 mt-3">
                            <input type="text" className="form-control" placeholder="Search By Keyword" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn fw-bold btn-outline-dark" type="button" id="button-addon2">Search</button>
                        </div>
                        <div className='checkBox'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" for="inlineCheckbox1">Bin</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" for="inlineCheckbox2">POE</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" for="inlineCheckbox3">Tasks</label>
                            </div>
                        </div>
                        <div className='userData mt-4'>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th className='text-danger' scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
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