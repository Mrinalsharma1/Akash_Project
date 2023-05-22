import { React, useEffect, useState } from 'react'
import Tables from './Tables'
import axios from "axios"
import NavBar from './NavBar';

function Home() {
  const [data, setdata] = useState([])
  const [user, setuser] = useState([])

  useEffect(() => {
    return () => {
      axios.post(`http://localhost:5000/data/fetchtestdata`)
        .then(res => {
          const result = res.data;
          const newarray = [];
          result.map((e) => {
            if (e.Envi !== "Archived") { newarray.push(e) }
          })
          setdata(newarray);
        })
    }
  }, [])


  useEffect(() => {
    return () => {
      axios.post(`http://localhost:5000/data/fetchcreateusersdata`)
        .then(res => {
          setuser(res.data);
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
        token ? <Tables mydata={data} myuser={user} /> : 'Page Not Found 404'
      }

    </>

  )
}

export default Home