import React, {Component} from "react"
import styled from 'styled-components';

const Contador = styled.section`
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
  width: 50vh;
  height: 80vh;
  background-color: tomato;
  border-radius: 5%;
  h1{
     font-size: 90px;
     color: #ffff;
  }
`
const Botoes = styled.div`
display: flex;
gap: 60px;
`
const Btn = styled.button`
border-radius: 100%;
width: 80px;
height: 80px;
font-size: 30px;
border-style: none;
color: tomato;
`

class App extends Component {
  state={
    contador:0
}

Soma = () =>{
    this.setState({
        contador: this.state.contador < 10 ? this.state.contador + 1:this.state.contador
    })
}
Diminuir = () =>{
    this.setState({
        contador: this.state.contador > 0 ? this.state.contador - 1:0
    })
}

render(){
    return(
        <>
        <Contador>
            <h1>{this.state.contador}</h1>
            <Botoes>
            <Btn onClick={this.Soma}>+</Btn>
            <Btn onClick={this.Diminuir}>-</Btn>
            </Botoes>
        </Contador>

        </>
    )
}
}
export default App;