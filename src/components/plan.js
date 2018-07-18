import React from 'react';
import ReactDOM from 'react-dom';

export class PlanList extends React.Component{
  constructor(props){
    super (props);
  }
  
  render(){
    let current = this.props.current;
    const plans = this.props.plans.map((item) => {
      let highlight = null;
      if(item.toString() === this.props.current) {
        highlight = "highlight";
      }
      return  (<li key={item.toString()} 
            className = {highlight}
            onClick = {this.props.choosePlan}>{item}</li>);
    });
      
    return (
    <div className="plan">
      
      <h1> Training Plan </h1>
      <div className="item-list">
        <ul>
        {plans}
        </ul>
      </div>
      
      <div>
        <input type="button" value="X" onClick={() => this.props.deletePlan()}/>
      </div>
      
    </div>
  )}
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
        <input type="button" value="+" onClick={() => this.props.addPlan(this.state.plan)}/>
      </div>
  )}
}
