import React, { useState } from 'react'
import Card from './Card';
import style from '../style.module.css'


export default function Formulario() {

    const [nombre , setNombre] = useState('');
    const [auto , setAuto] = useState('');
    const [mensaje, setMensaje] = useState(false)

    const onChangeinput = (event)=>{
        setNombre(event.target.value)
    }

    const onChangeAuto = (event)=>{
        setAuto(event.target.value)
    }

    const onSubmitForm = (event)=>{

        event.preventDefault();
        const nombreValido = nombre.trim();
        const autoValido = auto.trim()

        if(nombreValido.length > 3 && autoValido.length > 5){
            setMensaje(true)
        }
        else{
            setMensaje(false)
            alert('Por favor chequea que la informacion sea correcta')
        }
    }
  return (
    <>
    <h1>Formulario de autos</h1>
    <form className={style.form} onSubmit={onSubmitForm}>
        <input type="text" placeholder='Ingrese su nombre' onChange={onChangeinput} value={nombre}/>
        <br></br>
        <input type="text" placeholder='Ingrese su marca de autos favorita' onChange={onChangeAuto} value={auto}/>
        <button className={style.button}>Enviar</button>
    </form>

    {mensaje ? <Card userName={nombre} auto={auto} /> : null}
    </>

  )
}
