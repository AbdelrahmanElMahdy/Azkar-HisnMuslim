import React,{Component} from 'react'
import HadeethContainer from './HadeethContainer'
import axios from 'axios'
class MainAzkar extends Component {
    url="https://www.hisnmuslim.com/api/ar/27.json"
    state = {hadeeth:[] }
    async componentDidMount(){
        try {
            const hadeeth=await axios.get(this.url)
            //this.setState({hadeeth: hadeeth['data'] })
            console.log(hadeeth)              
        } catch (error) {
            console.log(error)
        }
  
}
    render() { 
        return ( 
            <div className="container text-center">
                {// <HadeethContainer hadeethText={this.state.hadeeth[0]['body']} /> 
                }
            </div>

         );
    }
}
 
export default MainAzkar;