import React, {Component} from 'react';
import './App.css';



class App extends Component{

constructor(props){
  super(props);


  this.state ={
    hora:0,
    minutos:0,
    segundos:0,
    botao:'Começar',
    milissegundos:0
  }

  this.timer = null;
  this.comecar = this.comecar.bind(this);
  this.limpar = this.limpar.bind(this);


}


comecar(){
  let state = this.state;

  if(this.timer !== null){
    clearInterval(this.timer);
    this.timer = null;
    state.botao = 'Começar';
  }
  else{
    this.timer = setInterval(()=>{
      state.milissegundos+=1;

      if(state.milissegundos === 59){
        state.segundos+=1;
        state.milissegundos =0;
      }

      if(state.segundos === 59){
        state.minutos +=1;
        state.segundos =0;
      }
      if(state.minutos === 60){
        state.hora+=1;
        state.minutos = 0;
      }
      
      this.setState(state);
    },100)
    state.botao = 'Pausar';
  }
  
 this.setState(state);

 
}

limpar(){
  let state = this.state;

  if(this.timer !== null){
    clearInterval(this.timer);
    this.timer = null;

  }
  state.hora = 0;
  state.minutos = 0;
  state.segundos = 0;
  state.milissegundos =0;

  state.botao ="Começar";

  this.setState(state);

}



  render(){
    return(
      <div className="container">
        <h1>Cronometro</h1>
        <div className="box-timer">

          <div className="timer-single">
            <h2>{this.state.hora}</h2>
            <p>Hora</p>
          </div>{/* timer-single */}
          <div className="timer-single">
            <h2>{this.state.minutos}</h2>
            <p>Minutos</p>
          </div>{/* timer-single */}
          <div className="timer-single">
            <h2>{this.state.segundos}</h2>
            <p>Segundos</p>
          </div>{/* timer-single */}

          <div className="timer-single">
            <h2>{this.state.milissegundos}</h2>
            <p>milissegundos</p>
          </div>{/* timer-single */}

        </div>{/*box-timer*/}

        <div className="btn">
            <button onClick={this.comecar}>{this.state.botao}</button>
            <button onClick={this.limpar}>Limpar</button>
        </div>

      </div>
    )
  }
}


export default App;