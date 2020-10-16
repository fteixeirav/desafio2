import React, { Component } from 'react'

export default class Temporizador extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            name: 'Temporizador',
            horas : 0,
            minutos: 0,
            segundos: 0,
            stop: true,
            nameStop: "Start"
        }        
    }

    decrementarMinuto(state) 
    {
        this.setState(() => { 
            if(this.state.minutos > 0)
            { 
              return {
                  minutos: state.minutos - 1 
                }
            }
        })
    }

    decrementarHora(state) 
    {
      this.setState(() => { 
          if(state.horas > 0)
          { 
            return {
                horas: state.horas - 1 
              }
          }
      })
    }

    timeLose(){ 
        setTimeout(function() { 
            alert("Seu tempo terminou!"); 
        }, 1000);
    }

    start()
    {
        if (this.state.stop === false){
            this.setState(function (state, props) {

                if(this.state.horas === 0 && this.state.minutos === 0 && this.state.segundos === 0) {
                    this.setState({
                        stop: true
                    })
                    return (
                        this.timeLose()
                    )
                }

                if (state.segundos === 0)
                {
                    this.setState({ 
                        segundos: 59,
                    })
                    this.decrementarMinuto(state);

                    if(state.minutos === 0)
                    {
                        this.setState({ 
                            minutos: 59,
                        })
                        this.decrementarHora(state)
                    } 
                } 

                return({ 
                    segundos: state.segundos - 1
                })
            })
        }
    }

    //change input
    alterarHoras = (event) => {
        this.setState({
            horas: event.target.value
        })
    }
    //change input
    alterarMinutos = (event) => {
        this.setState({
            minutos: event.target.value
        })
    }
    //change input
    alterarSegundos = (event) => {
        this.setState({
            segundos: event.target.value
        })
    }

    componentDidMount() 
    {
      this.timer = setInterval(() => this.start(), 1000)
    }

    handleSubmit = (e) => {
        this.setState({
            stop: !this.state.stop
        })

        if (this.state.stop)
        {
            this.setState({ 
                nameStop: "Start"
            })
        }
        else
        {
            this.setState({ 
                nameStop: "Stop"
            })
        }
        
        e.preventDefault()
    }

    render() {
        return (
            <div className="App-temp">
                <h1>{this.state.name}</h1>
                <p>Informe o tempo utilizando o formato <strong>HH:mm:ss</strong> abaixo:</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="number" name="horas" placeholder="2h" onChange={this.alterarHoras} />
                        <input type="number" name="minutos" placeholder="7min" onChange={this.alterarMinutos} />
                        <input type="number" name="segundos" placeholder="11s" onChange={this.alterarSegundos} />
                    </div>
                    <button type="submit">{this.state.nameStop}</button>
                    <h1>{this.state.horas}h:{this.state.minutos}m:{this.state.segundos}s</h1>
                </form>
            </div>
        )   
    }
}

