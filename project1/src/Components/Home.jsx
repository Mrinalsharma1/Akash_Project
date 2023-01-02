import { React, useEffect, useState } from 'react'
import Tables from './Tables'
import axios from "axios"
import NavBar from './NavBar';

function Home() {
  const [data, setdata] = useState([])
  useEffect(() => {
    return () => {
      axios.post(`http://localhost:5000/data/fetchdata`)
        .then(res => {
          const result = res.data;
          setdata(result);
        })
    }
  }, [])

  const token = localStorage.getItem('auth-token-project1')
  return (
    <>
      <NavBar />
      {
        data ? ' ' : 'loding....'
      }
      {
        token ? <Tables mydata={data} /> : 'Page Not Found 404'
      }

    </>

  )
}

export default Home