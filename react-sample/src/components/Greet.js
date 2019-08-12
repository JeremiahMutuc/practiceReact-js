import React from 'react';
const colorhead = {
    color: 'orange'
}

var Greet = (props) => <html><h1 style={colorhead}>Hello Jeremiah and {props.alias}</h1><p>This is a Funtional Component</p></html>

export default Greet
