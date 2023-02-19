import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    // const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const {username, password} = form

    const handleChange = (e) => {
        const { name, value } = e.target 
        setForm({ ...form, [name]: value})
       }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
              username,
              password
            }
            navigate('/')
        }        

  return (
    <div style={{ textAlign: "center", fontFamily: 'cursive' }} className='login-container'>
          <h1 style={{fontSize: 40}}>Login</h1>
          <form onSubmit={ handleSubmit }>
              <div>
                 <input style={{width: "500px", fontFamily: 'cursive', fontSize: 28}}
                 type="text" 
                 id='inputID'
                 placeholder='Username:'
                 name="username" 
                 value={ username } 
                 onChange={ handleChange }
                 autoFocus={true}/>
              </div>
              <br></br>
              <div>
                 <input style={{width: '500px', fontFamily: 'cursive', fontSize: 28}}
                 type="password" 
                 id='password'
                 placeholder='Password:'
                 name="password" 
                 value= { password } 
                 onChange= { handleChange }
                 autoFocus={true}/>
              </div>
              <br></br>
              <input style={{ fontFamily: 'cursive', fontSize: 18}}type="submit" value="submit"/>
          </form>
          {/* {errors? <div>{errors}</div>:null} */}
      </div>
  )
}

export default Login