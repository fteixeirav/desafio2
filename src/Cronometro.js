import React, { Component } from 'react'
import Contador from './Contador'
import Botao from './Botao'

import './App.css'

export default class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segundos: 0,
      milisegundos: 0,
      minutos: 0,
      hora: 0,
      stop: true,
      nameStop: "Iniciar",
      name: "Cronômetro", 
      parcial: ""
    };
  }

    zerarCronometro() 
    {
      this.setState({
        milisegundos: 0,
        hora: 0,
        minutos: 0,
        segundos: 0,
        parcial: ""
      })
    }
    
    parcial() 
    {
      let p = this.state.hora + "h:" + this.state.minutos + "m:" + this.state.segundos + "s:" + this.state.milisegundos + "\n" + "\n"

      this.setState({
        parcial: this.state.parcial + p,
      })
    }
    
    pararTempo() 
    {
      this.setState({ 
        stop: !this.state.stop 
      })

      if (this.state.stop)
      {
        this.setState({ 
          nameStop: "Parar"
        })
      }
      else
      {
        this.setState({ 
          nameStop: "Iniciar"
        })
      } 
    }

    incrementarHora(state) 
    {
      this.setState(() => { 
        return {
          hora: state.hora + 1 
        }
      })
    }

    incrementarMinuto(state) 
    {
      this.setState(() => { 
        return {
          minutos: state.minutos + 1 
        }
      })
    }

    functionMilisegundos()
    {
      if (this.state.stop === false)
      {
       this.setState(function (state, props) {
        if(state.milisegundos >= 999)
        {
          this.setState({ 
            milisegundos: 0
          })
        }
          return({
            milisegundos: state.milisegundos + 10 
          })
        })
      }
    }

    incrementar() 
    {
      if (this.state.stop === false)
      {
        this.setState(function (state, props) 
          {
            if (state.segundos >= 60)
            {
              this.setState({ 
                segundos: 0
              })
              this.incrementarMinuto(state);
            } 

            if(state.minutos >= 60)
            {
              this.setState({ 
                minutos: 0
              })
              this.incrementarHora(state)
            }

            return({ 
              segundos: state.segundos + 1
            })
          }
        )
      }
    }

    componentDidMount() 
    {
      this.timer1 = setInterval(() => this.incrementar(), 1000)

      this.timer2 = setInterval(() => this.functionMilisegundos(), 10)
    }

  render() 
  {
    return (
      <div className="App-cron"> 
          <h1>{this.state.name}</h1>
          <Contador horas={this.state.hora} minutos={this.state.minutos} segundos={this.state.segundos} milisegundos={this.state.milisegundos}/>
          <div class="div-buttons">
            <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
            <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
            <Botao onClick={() => this.parcial()} label={"Parcial"} />
          </div>
          <h1>{this.state.parcial}</h1>
      </div>
    )
  }
}

