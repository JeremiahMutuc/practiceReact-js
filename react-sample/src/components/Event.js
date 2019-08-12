import React, {Component} from 'react'


class Event extends Component{
    constructor(props){
        super(props)
        this.state={
            message: 'Hello love'
        }
    }

    event = () =>{
        console.log('Thank you for clicking me')
    }

    bindEvent = () =>{
        this.setState({
            message: 'Goodbye'
        })
    } 

    render(){
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.event}>Event Handler (console output)</button>
                <button onClick={this.bindEvent.bind(this)}>Bind event</button>
            </div>
            
        )
    }
}

export default Event