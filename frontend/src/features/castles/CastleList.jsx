import React from 'react'
import { useSelector } from 'react-redux'
import AddCastleForm from './AddCastleForm'
import Castles from './Castles'

const CastleList = () => {
    const castles = useSelector((state) => state.castles.entities)
  return (
    <div>CastleList
       
      </div>
  )
}

export default CastleList