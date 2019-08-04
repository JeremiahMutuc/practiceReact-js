import React from 'react'

 const Hello = () => {
//     return(
//         <div>
//             <h1>Hello JSX</h1>
//             <p>this is jsx version</p>
//         </div>
//     )"this is used by JSX"

 return React.createElement(
     'div', 
     {id : 'hello', className : 'helloClass'}, 
     React.createElement('h1', null, 'Hello jeje this is used by JSX'));
 } 



export default Hello