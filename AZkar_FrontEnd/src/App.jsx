import {Route,Switch,Redirect} from 'react-router-dom'
import React from 'react';

import './App.css';

import NavBar from './components/NavBar'
import User from './components/User'
import MainAzkar from './components/MainAzkar'
import Footer from './components/footer'
import PlayAzkarButton from './components/PlayAzkarButton'
import Notfound from './components/Notfound'




function App() {
  return (<React.Fragment>
            
            <NavBar />

            <Switch className="App">
                <Route path="/"        exact  component= { ()=>{ return <Redirect to="/home" /> }} />
                <Route path="/home"    exact  component={ props => { return <PlayAzkarButton class="btn btn-primary" props={props} name='paly azkar'/>}}/>
                <Route path="/index"   exact  component={ props =>{ return (<div props={props}>index</div> )}} />
                <Route path="/profile" exact  component= {User} />
                <Route path="/azkar"   exact  component= { MainAzkar}  />
                <Route path="*"               component={Notfound} />

              
            </Switch> 
            
            <Footer />

          </React.Fragment>
  );
}

export default App;
