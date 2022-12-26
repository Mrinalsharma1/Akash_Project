import React from 'react'
import Tables from './Tables'

function Home() {
    const token = localStorage.getItem('auth-token-project1')
    return (
        <>
          {
             token?<Tables/>:'Page Not Found 404'
          }

        </>
     
    )
}

export default Home