import React from 'react';
import ReactDOM from 'react-dom';
import {PlanList,StartButton} from './elements/plan.js'
import {CurrentExercise,Control} from './elements/exercise.js'
import { connect } from 'react-redux'
import {Link, Route} from 'react-router-dom'

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

class Planitem extends React.Component{
  constructor(props){
    super(props);
    this.state({
      showexc:false,
    })
  }

  render(){
    <div>
      <div>this.props</div>
    </div>
  }
}

class Main extends React.Component{
  constructor(props){
    super (props);
    const defaultKey = Object.keys(props.plan);
    this.state = {
      current : defaultKey[0],
      timer : 0 ,
      stop : undefined
    }
  }
  
  choosePlan(e){
    this.setState( {current : e.target.childNodes[0].nodeValue});
  }
  
  timer(){

    const cancle = setInterval(() =>{ 
      if(this.state.timer !== 0){
        this.setState ({timer: this.state.timer-1});
      }
    }, 1000);
    this.setState ( {stop: cancle});
  }
  
  startPlan(){
    this.props.startPlan(this.state.current);
   }
   
  completePlan(){
    this.setState( {timer: 0});
    this.props.completePlan();}
  
  nextSet() {
    this.setState( {timer: [this.props.current[0].rest]});
    this.props.nextSet();
    clearInterval(this.state.stop);
    this.timer();
  }
  
  
  render(){

    return (
    <div className="container">
      <section>
        <PlanList plans ={Object.keys(this.props.plan)} 
              current = {this.state.current}
              choosePlan = {(e) => this.choosePlan(e)}
              />
        <StartButton startPlan = {( ) => {
          this.startPlan()
        } }/>
      </section>

      <section>
        <CurrentExercise exercise={this.props.current}/>
        <Control timer={this.state.timer}
          nextSet = {()=>this.nextSet()}
          completePlan = { ()=>this.completePlan()}
        />
      </section>
      

    </div>
  )}
}





const MainApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)



export default MainApp;