import React from 'react';
import {PlanList,DeleteButton,PlanAdd} from './elements/plan.js'
import {ExerciseList,ExerciseAdd} from './elements/exercise.js'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import {addPlan,
  deletePlan,
  addExercise,
  deleteExercise,
  savePlan} from './redux/actions.js'

const mapStateToProps = state => {
  return {
    plan: state.plan,
    user:state.user
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
    },

    savePlan: (username) => {
      dispatch(savePlan(username));
    }
  }
}
    


class Planner extends React.Component{
  constructor(props){
    super (props);
    const defaultKey = Object.keys(props.plan);
    this.state = {
      current : defaultKey[0],
      redirect:false,
    }
  }
  
  choosePlan(e){
    this.setState( {current : e.target.getAttribute('planvalue')});
  }
  
  addPlan(planName){this.props.addPlan(planName);}
  
  deletePlan() {
    this.props.deletePlan(this.state.current);
    this.setState ( {current: ''});
  }
  
  addExercise(name,sets,rest){
    console.log(this.state.current, name, sets,rest)
    this.props.addExercise(this.state.current,name,sets,rest);
  }
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/main' />
    }
  }
  
  deleteExercise(index){
    this.props.deleteExercise(this.state.current,index);
  }
  
  save(){
    this.props.savePlan(this.props.user)
    this.setState(this.setState({
        redirect: true
      }))
  }
  
  render(){
    {this.renderRedirect()}
    return (
    <div className="container">
      <h2>Part 1:</h2>
      <section className='edit-plan'>
        <PlanList plans ={Object.keys(this.props.plan)} 
              current = {this.state.current}
              choosePlan = {(e) => this.choosePlan(e)}/>
        <DeleteButton deletePlan = {( ) => this.deletePlan()} />
        <p className="legend"> Add New Plan:</p>
        <PlanAdd  addPlan = {(plan) => this.addPlan(plan)}/>
      </section>
      
      <h2>Part 2:</h2>
      <section className='edit-exc'>
        <ExerciseList exercise={this.props.plan[this.state.current]}
                deleteExercise = { (index)=>this.deleteExercise(index)}/>
        <p className="legend"> Add New Exercise:</p>
        <ExerciseAdd addExercise = {(name,sets,rest)=> this.addExercise(name,sets,rest)}/>
      </section>
      
      <section>
        <input type="button" className = "btn btn-success savebtn" onClick={()=>this.save()} value ="Save Changes" />
      </section>
    </div>
  )}
}

const PlannerApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Planner)



export default PlannerApp;