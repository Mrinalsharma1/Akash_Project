import React from 'react'

const Data = (props) => {
  const data = props.activeData
  var count = props.cpage
  return (
    data.map((e, i) => {
      return <tr key={i}>
        <th scope="row">{count + i + 1}</th>
        <td>{e.Component}</td>
        <td>{e.Customer}</td>
        <td>{e.Features}</td>
        <td>{e.Envi}</td>
        <td>{e.Status ? <p className='text-success'>Active</p> : <p className='text-danger'>Inactive</p>}</td>
        <td>
          <button className='btn btn-primary me-2'>
            Edit
          </button>
          <button className='btn btn-secondary'>
            Delete
          </button>
        </td>
      </tr>
    })

  )
}

export default Data