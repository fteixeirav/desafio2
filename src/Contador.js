import React from 'react'
import './App.css';

const Contador = (props) => (
    <h1>{props.horas}h:{props.minutos}m:{props.segundos}s:{props.milisegundos}</h1>
)

export default Contador