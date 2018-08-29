import React from 'react';
import PlannerApp from './planner.js'
import MainApp from './main-page.js'
import CurrentApp from './current-session.js'
import {Link, Route} from 'react-router-dom'
import {LoginApp} from './login.js'

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
           <Route path="/planner" component={PlannerApp}/>
           <Route path="/main"  component={MainApp}/>
           <Route path="/current"  component={CurrentApp}/>
           <Route path="/" exact = {true} component={LoginApp}/>
      </div>
    )
  }
}

export default App;