import React from 'react';
import './App.css';
import PersonT from './Components/PersonT';

class App extends React.Component{
    constructor(){
      super()
      this.state={
        Person : {fullName :'Olfa Médhioub', profession : 'Computer engineer', bio : 'Developer full stack js', imgSrc : '/imageReact.png', },
        show : false,
      }
    }
    handleShow=()=> this.setState({show : !this.state.show})
    render(){
      return(
        <div>
          <h1>Hi,</h1>
          <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
          {
            this.state.show &&  <PersonT Person={this.state.Person}/>
          }
         
        </div>
      )
    }
}

export default App
