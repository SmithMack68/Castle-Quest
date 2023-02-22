import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddReviewForm = () => {
    const [state, setState] = useState({
      username:'',
      comment: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setState({...state,
        [e.target.name]:e.target.value})
      }

    //   const handleSubmit =(e) => {
    //     e.preventDefault()
    //     fetch(`/reviews`, {
    //       method: 'POST',
    //       headers,
    //       body: JSON.stringify({
    //         spell_id: parseInt(spell_id),
    //         username: state.username,
    //         comment: state.comment,
    //       })
    //     })
    //     .then(resp => {
    //       if(resp.ok){
    //         resp.json().then(addReview)
    //         navigate(`/castles/${castle_id}`)
    //       }
    //     })
       
    
    //   }

  return (
    <div className='new-review-container' style={{ textAlign: "center", fontFamily: 'cursive' }}>
      <div>
        <h1 style={{fontSize: 40}}>Add a Review</h1>
        {/* <form onSubmit={ handleSubmit }> */}
        <form>
        <div>
          <textarea  style={{fontFamily: 'cursive', fontSize: 28}}
            type='text'
            id='inputID'
            placeholder='Comment:'
            rows='3'
            cols='40'
            name='comment'
            value={state.comment}
            onChange={handleChange}></textarea>
        </div>
        <input style={{ fontFamily: 'cursive', fontSize: 18}}type="submit" value="submit"/>
        </form>
      </div>
    </div>
  )
}

export default AddReviewForm