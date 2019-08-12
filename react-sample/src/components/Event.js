import React, {Component} from 'react'


class Event extends Component{
    event = () =>{
        console.log('Thank you for clicking me')
    }

    render(){
        return (
            <button onClick={this.event}>Just Click Here!</button>
        )
    }
}

export default Event