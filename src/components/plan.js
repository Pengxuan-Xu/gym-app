import React from 'react';
import {Link, Route} from 'react-router-dom'

export class PlanList extends React.Component{
  constructor(props){
    super (props);
  }
  
  render(){
    const plans = this.props.plans.map((item) => {
      return  (
        <li key={item.toString()} 
          className={item.toString() === this.props.current ? "highlight" : ""}
          onClick= {this.props.choosePlan}
        >
          {item}
        </li>);
    });
      
    return (
    <div className="plan">
      
      <h1> Training Plan </h1>
      <div className="item-list">
        <ul>
        {plans}
        </ul>
      </div>
      

      
    </div>
  )}
}

export class DeleteButton extends React.Component{
  constructor(props){
    super (props);
  }
  
  render(){
  return (
  <div className="row">
    <div className="col-sm-4">
    <input type="button" className = "ctr btn btn-primary btn-sm" value="X" onClick={() => this.props.deletePlan()}/>
    </div>
  </div>
  )
  }
}

export class StartButton extends React.Component{
  constructor(props){
    super (props);
  }
  
  render(){
  return (
  <div className="row">
    <div className="col-sm-4">
    
      <Link className="link" to ='/planner'><input type="button" className = "ctr btn btn-primary btn-sm" value ="Edit Plan" /></Link>

    </div>
  
    <div className="col-sm-4">
    <input type="button" className = "ctr btn btn-primary btn-sm" value="StartPlan" onClick={() => this.props.startPlan()}/>
    </div>
  </div>
  )
  }
}


export class PlanAdd extends React.Component{
  constructor(props){
    super (props);
    this.state = {plan : ''};
  }
  
  onChange(e){
    this.setState( {plan : e.target.value});
  }
  
  render(){
    return (
      <div className="plan">
        <input type="text" value={this.state.plan} onChange = {(e)=>this.onChange(e)} />
        <input type="button" className = "add btn btn-primary btn-sm" value="+" onClick={() => this.props.addPlan(this.state.plan)}/>
      </div>
  )}
}
