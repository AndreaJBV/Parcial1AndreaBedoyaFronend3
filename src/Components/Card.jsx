import React from 'react'
import './Card.css'

const Card = ({user}) => {
  return (
    <div className='card' style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      <h4>¡Usuario registrado!</h4>
      <h4>Indetificación: {user.identificacion}</h4>
      <h4>Email: {user.email}</h4>
      <h4>Teléfono: {user.telefono}</h4>
    </div>
  )
}

export default Card