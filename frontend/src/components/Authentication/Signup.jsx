import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [form, setForm] = useState({
      name: '',
      country: '',
      password: '',
      username: ''
    })

    // const [ errors, setErrors] = useState([])
    const navigate = useNavigate()


    const handleChange = (e) =>{
        setForm({...form,
      [e.target.name]:e.target.value})
    }



  return (
    < div style={{ textAlign: "center", fontFamily: 'cursive', color: 'black' }}>
    <h1 style={{ textAlign: "center", fontSize: 40}}>Create Account</h1>
    {/* <form onSubmit={ handleSubmit } style={{ textAlign: "center"}} > */}
    <form>
        <div >
           <input style={{width: '500px', fontFamily: 'cursive', fontSize: 28}}
           type="text" 
           id='inputID'
           placeholder='Name:'
           name="name" 
           value={ form.name }
           onChange={handleChange}
           autoFocus={true}/>
        </div>
        <br></br>
        <div>
           <input style={{width: '500px', fontFamily: 'cursive', fontSize: 28, color: 'black'}}
           type="text" 
           id='inputID'
           placeholder='Country:'
           name="country" 
           value={ form.country }
           onChange={handleChange}
           autoFocus={true}/>
        </div>
        <br></br>
        <div>
           <input style={{ width: '500px', fontFamily: 'cursive', fontSize: 28}}
           type="password" 
           id='password'
           placeholder='Password:'
           name="password" 
           value= {form.password}
           onChange= {handleChange}/>
        </div>
        <br></br>
        <div>
           <input style={{width: '500px', fontFamily: 'cursive', fontSize: 28, textAlign: 'center'}}
           type="integer" 
           id='inputID'
           placeholder='Create Your Username'
           name="username"
           value={ form.username}
           onChange={handleChange}
           autoFocus={true}/>
        </div>
        <br></br>
        <input style={{fontFamily: 'cursive', fontSize: 18}}type="submit" value="signup"/>
    </form>
    
     {/* { errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null } */}
</div>
  )
}

export default Signup