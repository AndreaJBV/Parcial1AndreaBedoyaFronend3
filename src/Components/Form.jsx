import React, { useState } from 'react'
import Card from './Card'
import './Form.css'

const Form = () => {
    const [user, setUser] = useState ({
        identificacion: '',
        email: '',
        telefono: '',
        contraseña: ''
    })
    
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    
    const handleSubmit = (event) =>{

        event.preventDefault()

        if(user.identificacion.length > 3){
            setShow(true)
            setErr(false)
        }else{
            setShow(false)
            setErr(true)
        } 

        if(user.email.length > 6){
            setShow(true)
            setErr(false)
        }else{
            setShow(false)
            setErr(true)
        } 
    }
    
    return (
        
        <>
        <form onSubmit={handleSubmit} className='form' style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <label>Identificación: </label>
            <input className='input' type="text" onChange={(event) => setUser({...user, identificacion: event.target.value})}/>
            {err ? 'Por favor chequea que la información sea correcta' : null}
                
            <label>Email: </label>
            <input className='input' type="email"onChange={(event) => setUser({...user, email: event.target.value})}/>
            {err ? 'Por favor chequea que la información sea correcta' : null}
            
            <label>Teléfono: </label>
            <input className='input' type="text" onChange={(event) => setUser({...user, telefono: event.target.value})}/>
            
            <label>Contraseña: </label>
            <input className='input' type="password" onChange={(event) => setUser({...user, contraseña: event.target.value})}/>
            
            <button className='btn'>Registrar usuario</button>
        </form>
        {show && <Card user={user}/>}
        </>
        


        
    )
}

export default Form