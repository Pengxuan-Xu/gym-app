import React from 'react';
import ReactDOM from 'react-dom';
import {PlanList,StartButton} from './elements/plan.js'
import {CurrentExercise,Control} from './elements/exercise.js'
import { connect } from 'react-redux'
import {Link, Route,Redirect} from 'react-router-dom'

import {addPlan,
  deletePlan,
  addExercise,
  deleteExercise,
  startPlan,
  nextSet,
  completePlan} from './redux/actions.js'
  
const mapStateToProps = state => {
  return {
    current: state.current,
    plan: state.plan
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startPlan: (planName) => {
      dispatch(startPlan(planName));
    },
    
    nextSet: () => {
      dispatch(nextSet());
    },
    
    completePlan: () => {
      dispatch(completePlan());
    }

    
  }
}


class Main extends React.Component{
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

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/current' />
    }
  }
  
  startPlan(){
    this.props.startPlan(this.state.current);
    this.setState(this.setState({
      redirect:true
    }))
   }
  
  
  
  render(){
    
    return (
    
    <div className="container">
    {this.renderRedirect()}
      <section>
        <PlanList plans ={Object.keys(this.props.plan)} 
              current = {this.state.current}
              choosePlan = {(e) => this.choosePlan(e)}
              />
        <StartButton startPlan = {() => {
          this.startPlan()
        } }/>
      </section>
      

    </div>
  )}
}





const MainApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)



export default MainApp;