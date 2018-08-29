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

class Current extends React.Component{
    constructor(props){
      super (props);
      const defaultKey = Object.keys(props.plan);
      this.state = {
        current : defaultKey[0],
        timer : 0 ,
        stop : undefined,
        redirect:false,
      }
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/main' />
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
      this.props.completePlan();
      this.setState(this.setState({
        redirect:true
      }))
    }

    
    nextSet() {
      if(this.props.current.length > 0){
        this.setState( {timer: [this.props.current[0].rest]});
        this.props.nextSet();
        clearInterval(this.state.stop);
        this.timer();
      }else {
        this.setState(this.setState({
          redirect:true
        }))
      }
      
    }
    
    
    render(){
  
      return (
      <div className="container">
      {this.renderRedirect()}
        <section className='current'>
          <CurrentExercise exercise={this.props.current}/>
          <Control timer={this.state.timer}
            nextSet = {()=>this.nextSet()}
            completePlan = { ()=>this.completePlan()}
          />
        </section>
        
  
      </div>
    )}
  }
  
  
  
  
  
  const CurrentApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Current)
  
  
  
  export default CurrentApp;