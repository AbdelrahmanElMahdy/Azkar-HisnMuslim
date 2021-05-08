import React from 'react'

const NotFound=(props) =>{
    var handleClick =()=> {
        props.history.replace('/home')
    }    
    return(
    <React.Fragment>
        <div className="Centered ">
            <h2>page not-found</h2>
            <button className="btn btn-danger lg" onClick={handleClick}>redirect to home</button>            
            
        </div>            

    </React.Fragment>)
                }

export default NotFound 