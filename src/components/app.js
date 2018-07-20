import React from 'react';
import PlannerApp from './planner.js'
import MainApp from './main.js'
import {Link, Route} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
           <Route path="/planner" component={PlannerApp}/>
           <Route path="/" exact = {true} component={MainApp}/>
      </div>
    )
  }
}

export default App;