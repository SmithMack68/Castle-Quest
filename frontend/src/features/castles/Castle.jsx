import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Castle = () => {
    const [castle, setCastle] = useState({})
    const navigate = useNavigate()


    // useEffect(() => {
    //     fetch(`/spells/${params.id}`)
    //     .then(resp => resp.json())
    //     .then(spell => setSpell(spell))
    //   }, [params.id])

    const handleNavigate = () => {
        navigate()
    }



  return (
    <div className='castle-card-container'>
      <h2 style={{fontFamily: "cursive", fontSize: 40}}>{ castle.name }</h2>
      <img src={ castle.image_url } alt="A spell" height={300} width={400}/> 
      <p style={{fontFamily: "cursive", fontSize:30}}><>Description:</> { castle.short_description }</p>
      <p style={{fontFamily: "cursive", fontSize:30}}>Location: { castle.location }</p>
      <h2 style={{fontFamily: "cursive", fontSize:30}}>Hours of Operation: { castle.hours_of_operation }</h2>
      <h2 style={{fontFamily: "cursive", fontSize:30}}>Website: { castle.website }</h2>
      <h2 style={{fontFamily: "cursive", fontSize:30}}>Reviews:</h2>
      <h3 style={{fontFamily: "cursive", fontSize:20}} >
        {/* {castle.reviews ? (castle.reviews.map((review, index) =><ReviewCard key={index} deleteReview={deleteReview} review={review} index={index}/> )) : ""} */}
      </h3>
      <br></br>
      <button  style={{fontFamily: "cursive", fontSize:15}} onClick={ handleNavigate } />
    </div>
  )
}

export default Castle