import React,{Component} from 'react'
import HadeethContainer from './HadeethContainer'
import axios from 'axios'
class MainAzkar extends Component {
    url="https://jsonplaceholder.typicode.com/posts"
    state = {hadeeth:[{"id":0,"body":""}] }
    async componentDidMount(){
        const hadeeth=await axios.get(this.url)
        this.setState({hadeeth: hadeeth['data'] })
        console.log(this.state.hadeeth[0]['body'])    
}
    render() { 
        return ( 
            <div className="container text-center">
                <HadeethContainer hadeethText={this.state.hadeeth[0]['body']} />
            </div>

         );
    }
}
 
export default MainAzkar;