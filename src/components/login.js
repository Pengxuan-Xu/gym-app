import React from 'react'
import { connect } from 'react-redux'
import {loadUserPlan} from './redux/actions.js'
import { Redirect } from 'react-router-dom'

const mapDispatchToProps = dispatch => {
  return {
    loadUserPlan: (planName) => {
      dispatch(loadUserPlan(planName));
    }
    
  }
}

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName:"",
            redirect:false,
        }
    }

    changeUserName(e){
        this.setState({
            userName:e.target.value,
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/main' />
        }
    }

    login(){
        this.props.loadUserPlan(this.state.userName)
        this.setState(this.setState({
            redirect: true
          }))
    }

    render(){
        return (
            <div>
                {this.renderRedirect()}
                <div className="showcase">
                    <h1 className='logo'><i class="fas fa-dumbbell"></i> Gym Planner</h1>
                    <h1 className='slogan'>Get Focus</h1>
                    <h1 className='slogan'>and</h1>
                    <h1 className='slogan'>Start Training</h1>
                    <div>
                        <div className="form-group username">
                            <input className='form-control' type='text' placeholder="Rocky" 
                                onChange={(e)=>this.changeUserName(e)}/>
                        </div>
                        <div className='wrapper'>
                            <input type='button' class="btn btn-outline-secondary loginbtn" onClick={()=>this.login()} value = "Start"/>
                        </div>
                    </div>

                    <div className='intro'>
                        <h1 className='introtitle'>Workout Plan and Time Control</h1>
                        <h2 className='slogan'>Simplified interface to achieve minimium actions.</h2>
                    </div>
                </div>
                
                
                

            </div>
        )
    }
}

export const LoginApp = connect(
    null,
    mapDispatchToProps
)(Login)