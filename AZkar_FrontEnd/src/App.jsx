import './App.css';
import {Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <Route path="/index"    component= { props =>{ return (<div>index</div> )}} />
       <Route path="/profile"  component= { props =>{ return (<div>Profile</div>  )}} />
       <Route path="/home"     component= { props =>{ return (<div>Home</div>  )}}  />
    </div>
  );
}

export default App;
