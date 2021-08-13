import {Component} from 'react'

class PlayAzkarButton extends Component {
    state = {  }
    
    
    handleClick=()=>{
      this.props.props.history.push("/azkar")
    }

    render() {
        return (
          <div className="Centered">
           <button className="btn btn-primary" onClick={()=>this.handleClick()} >{this.props.name}</button>
          </div>
          );
}
}

 
export default PlayAzkarButton;