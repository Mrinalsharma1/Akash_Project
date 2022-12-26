import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [details, setdetails] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const onsubmit=(e)=>{
        e.preventDefault()
        const response = async()=>{ 
            const result = await fetch('http://localhost:5000/users/login', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(details)
          });
        
          const json = await result.json();
          console.log(json)
          if(json.token)
          {
            localStorage.setItem('auth-token-project1',json.token)
            return navigate('/home')
          }
          else{
            alert("wrong credentials")
            localStorage.removeItem('auth-token-project1')
          }

        }
        response()
        
     
    }
    const onchange = (e) =>{
        setdetails({...details,[e.target.name]:e.target.value})
        console.log(details)
    }
    return (
        <div className="container-fluid">
          
            <div className="row card-wrapper">
            <h3 >Halo Customer Feature Inventory</h3>
                <div className=" mx-auto login-wrapper rounded">
               
                    <form onSubmit={onsubmit}>
                        <div className="mb-3">
                            <label  >Username</label>
                 
                            <input type="email" onChange={onchange} name="email" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label >Password</label>
                            <input type="password" onChange={onchange} name="password" />
                        </div>
                       
                        <button type="submit" className="login-btn rounded">Submit</button>
                        <small className='text-light bottom-text'>Don't have an account? <span className='text-dark'>Contact DevOps</span></small>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login