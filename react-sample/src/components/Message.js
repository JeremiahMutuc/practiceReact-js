import React, { Component } from 'react'


class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: "Ako maba"
        }
    }
    render(){
        return <html><h1>Welcome Jeremiah</h1><p>This is a Class Component</p><p>{this.state.message}ho</p></html>
    }
}

export default Message