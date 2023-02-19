import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { castleAdded } from './castlesSlice'



const AddCastleForm = () => {
  const [ form, setForm ] = useState({
    name: '',
    image_url: '',
    location: '',
    short_description: '',
    hours_of_operation: '',
    website: ''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({...form,
      [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(castleAdded(form))
    setForm('')
  }

  return (
    <div className='new-castle-container' style={{ textAlign: "center", fontFamily: 'cursive' }}>
         <div>
      <h1 style={{fontSize: 40}}>Add a Castle</h1>
      <form onSubmit={ handleSubmit }>
      <div>
        <input  style={{fontFamily: 'cursive', fontSize: 28, width: '500px'}}
          type='text'
          id='inputID'
          placeholder='Name of Castle:'
          name='name'
          value={form.name}
          onChange={handleChange}></input>
      </div>
      <br></br>
      <div>
        <input  style={{fontFamily: 'cursive', fontSize: 28, width: '500px'}}
          type='text'
          id='inputID'
          placeholder='Image:'
          name='image_url'
          value={form.image_url}
          onChange={handleChange}></input>
      </div>
      <br></br>
      <div>
        <input  style={{fontFamily: 'cursive', fontSize: 28, width: '500px'}}
          type='text'
          id='inputID'
          placeholder='Location:'
          name='location'
          value={form.location}
          onChange={handleChange}></input>
      </div>
      <br></br>
      <div>
        <textarea  style={{fontFamily: 'cursive', fontSize: 28, width: '500px'}}
          type='text'
          id='inputID'
          rows='2'
          columns='40'
          placeholder='Short Description:'
          name='short_description'
          value={form.short_description}
          onChange={handleChange}></textarea>
      </div>
      <br></br>
      <div>
        <input  style={{fontFamily: 'cursive', fontSize: 28, width: '500px'}}
          type='text'
          id='inputID'
          placeholder='Hours of Operation:'
          name='hours_of_operation'
          value={form.hours_of_operation}
          onChange={handleChange}></input>
      </div>
      <br></br>
      <div>
        <input  style={{fontFamily: 'cursive', fontSize: 28, width: '500px'}}
          type='text'
          id='inputID'
          placeholder='Website Link:' 
          name='hours_of_operation'
          value={form.website}
          onChange={handleChange}></input>
      </div>
      <br></br>
      <input style={{ fontFamily: 'cursive', fontSize: 18}}type="submit" value="submit"/>
      </form>
    </div>
    </div>
  )
}

export default AddCastleForm