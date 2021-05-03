import {Route} from 'react-router-dom'

import './App.css';

import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
       <Route path="/" component={NavBar}/>
       <Route path="/index"    component= { props =>{ return (<div>index</div> )}} />
       <Route path="/profile"  component= { props =>{ return (<div>Profile</div>  )}} />
       <Route path="/home"     component= { props =>{ return (<div>Home</div>  )}}  />
    </div>
  );
}

export default App;
