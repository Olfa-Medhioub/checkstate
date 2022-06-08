import React from 'react'

class PersonT extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count : 0,
        }   
       
    }
    componentDidMount(){
        setInterval( ()=> this.setState({count:this.state.count+1}), 1000);
    }
    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                 <h2  style={{color : 'blue', textDecoration :'underline'}}>My name is {this.props.Person.fullName},</h2>
                 <h3>  {this.props.Person.profession}</h3>
                 <h4>I'm a {this.props.Person.bio},I make horrible websites with react js</h4>
                 <img src={this.props.Person.imgSrc}/>
            </div>
        )
    }
}
export default PersonT