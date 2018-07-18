import React from 'react';
import ReactDOM from 'react-dom';
import {PlanList,PlanAdd} from './plan.js'
import {ExcerciseList,ExcerciseAdd} from './excercise.js'

class Planner extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      current : "Chest",
      plan : {
        Chest : [ {name: "Bench Press", sets: 5, rest : 60},
              {name: "Push Up", sets: 5, rest : 60}],
        Leg :   [ {name: "Squat", sets: 5, rest : 60},
              {name: "Leg Extension", sets: 5, rest : 60}],
        Shoulder : [ {name: "Shoulder Press", sets: 5, rest : 60},
              {name: "Lateral Rise", sets: 5, rest : 60},
              {name: "Front Rise", sets: 5, rest : 60}]
      }
    }
  }
  
  choosePlan(e){
    this.setState( {current : e.target.childNodes[0].nodeValue});
  }
  
  addPlan(planName){
    this.setState (
      {plan : Object.assign({},this.state.plan,{ [planName] : []})}
    )
  }
  
  deletePlan() {
    let newPlan = Object.assign({},this.state.plan);
    delete newPlan[this.state.current];
    let defaultKey = Object.keys(newPlan);
  
    this.setState ( {current: defaultKey[0], plan: newPlan});
  }
  
  updateExcercise (newExcercise) {
    let newPlan = Object.assign ({},this.state.plan, {[this.state.current]:newExcercise});

    this.setState ( {plan : newPlan});
  }
  
  deleteExcercise(excerciseIndex){
    let newExcercise = this.state.plan[this.state.current].slice(0);
    newExcercise.splice(excerciseIndex,1);
    this.updateExcercise (newExcercise);
  }
  
  addExcercise(name, sets, rest){
    let newExcercise = this.state.plan[this.state.current].slice(0);
    newExcercise.push({name, sets, rest});
    this.updateExcercise (newExcercise);
  }
  

    
  
  render(){
    
    return (
    <div className="container">
      <section>
        <PlanList plans ={Object.keys(this.state.plan)} 
              current = {this.state.current}
              choosePlan = {(e) => this.choosePlan(e)}
              deletePlan = {( ) => this.deletePlan()}/>
        <p className="legend"> Add New Plan:</p>
        <PlanAdd  addPlan = {(plan) => this.addPlan(plan)}/>
      </section>
      
      <section>
        <ExcerciseList excercise={this.state.plan[this.state.current]}
                deleteExcercise = { (excerciseIndex)=>this.deleteExcercise(excerciseIndex)}/>
        <p className="legend"> Add New Excercise:</p>
        <ExcerciseAdd addExcercise = {(name, sets,rest)=> this.addExcercise(name,sets,rest)}/>
      </section>
    </div>
  )}
}

export default Planner;