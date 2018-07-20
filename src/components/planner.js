import React from 'react';
import {PlanList,DeleteButton,PlanAdd} from './plan.js'
import {ExerciseList,ExerciseAdd} from './exercise.js'
import { connect } from 'react-redux'
import {Link, Route} from 'react-router-dom'

import {addPlan,
  deletePlan,
  addExercise,
  deleteExercise} from './containers/actions.js'

const mapStateToProps = state => {
  return {
    plan: state.plan
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlan: (planName) => {
      dispatch(addPlan(planName));
    },
    
    deletePlan: (planName) => {
      dispatch(deletePlan(planName));
    },
    
    addExercise: (planName,exerciseName,sets,rest) => {
      dispatch(addExercise(planName,exerciseName,sets,rest));
    },
    
    deleteExercise: (planName,index) => {
      dispatch(deleteExercise(planName,index));
    }
    
  }
}
    


class Planner extends React.Component{
  constructor(props){
    super (props);
    const defaultKey = Object.keys(props.plan);
    this.state = {
      current : defaultKey[0]
    }
  }
  
  choosePlan(e){
    this.setState( {current : e.target.childNodes[0].nodeValue});
  }
  
  addPlan(planName){this.props.addPlan(planName);}
  
  deletePlan() {
    this.props.deletePlan(this.state.current);
    this.setState ( {current: ''});
  }
  
  addExercise(name,sets,rest){
    this.props.addExercise(this.state.current,name,sets,rest);
  }
  
  
  deleteExercise(index){
    this.props.deleteExercise(this.state.current,index);
  }
  
  
  render(){
    
    return (
    <div className="container">
      <section>
        <PlanList plans ={Object.keys(this.props.plan)} 
              current = {this.state.current}
              choosePlan = {(e) => this.choosePlan(e)}/>
        <DeleteButton deletePlan = {( ) => this.deletePlan()} />
        <p className="legend"> Add New Plan:</p>
        <PlanAdd  addPlan = {(plan) => this.addPlan(plan)}/>
      </section>
      
      <section>
        <ExerciseList exercise={this.props.plan[this.state.current]}
                deleteExercise = { (index)=>this.deleteExercise(index)}/>
        <p className="legend"> Add New Exercise:</p>
        <ExerciseAdd addExercise = {(name,sets,rest)=> this.addExercise(name,sets,rest)}/>
      </section>
      
      <section>
        <button className = "btn btn-primary btn-sm"><Link className ="link" to="/">Save Changes</Link></button>
      </section>
    </div>
  )}
}

const PlannerApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Planner)



export default PlannerApp;