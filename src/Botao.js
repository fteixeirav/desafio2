import React from 'react';
import './App.css';

const Botao = (props) => (
  <button class="buttons-cron" onClick={props.onClick}>{props.label}</button>
)

export default Botao