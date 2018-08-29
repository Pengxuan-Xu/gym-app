import React from 'react';

export class ExerciseList extends React.Component{
  constructor(props){
    super (props);
    this.state= {
      index: 0
    }
  }
  
  onClick(e){
    this.setState({index: e.target.getAttribute('index')});
  }
    
  render(){
    let exercise;
    
    if(!(this.props.exercise == undefined)) {
      exercise = this.props.exercise.map((item,index) =>{

          let highlight="null"
          if(parseInt(this.state.index) === parseInt(index)) highlight="highlight"
          return <li key={item.name.toString()} 
                className={highlight} 
                index={index}
                onClick = { (e)=>this.onClick(e)}>
            <strong>{item.sets}</strong> sets of <strong>{item.name}</strong> with <strong>{item.rest}s</strong> rest
          </li>
          }
        );
      } else {
      exercise = null;
    }
        
    
    return (
    <div className="exercise">
      <h1> Exercise in the Plan </h1>
      <div className="item-list">
        <ul>
          {exercise}
        </ul>
      </div>
      
      <div className = "row">
        <div className ="col-xs-4">
          <input type="button" className = "ctr btn btn-primary btn-sm" value="↑" onClick={() => alert('To be implemented')}/>
        </div>
        
        <div className ="col-xs-4">
        
          <input type="button" className = "ctr btn btn-primary btn-sm" value="↓" onClick={() => alert('To be implemented')}/>
        </div>
        
        <div className ="col-xs-4">
          <input type="button" className = "ctr btn btn-primary btn-sm" value="X" onClick={() => {
            this.props.deleteExercise(this.state.index)
            this.setState({index:0})
            }}/>
        </div>
      </div>
    </div>
  )}
}


export class CurrentExercise extends React.Component{
  constructor(props){
    super (props);
    this.state= {
      index: 0
    }
  }
  
  onClick(e){
    this.setState({index: e.target.getAttribute('index')});
  }
    
  render(){
    
    let exercise;
    if(this.props.exercise !== undefined) {
      exercise = this.props.exercise.map((item,index) =>{
          let highlight="null"
          if(this.state.index === index) highlight="highlight"
          return <li key={item.name.toString()} 
                className={highlight} 
                index={index}>
            <strong>{item.sets}</strong> sets of <strong>{item.name}</strong> with <strong>{item.rest}s</strong> rest
          </li>
          }
        );
      } else {
      exercise = null;
    }
        
    
    return (
    <div className="exercise">
      <h1> Current session </h1>
      <div className="item-list">
        <ul>
          {exercise}
        </ul>
      </div>
    </div>
  )}
}

export class Control extends React.Component{
  constructor(props){
    super (props);
  }
  
  render(){

    return (
    <div>
      <div className = "row">
      
        <div className =" col-xs-10 col-xs-offset-1 countdown">
          <div className="alert alert-info countdown">
            <strong>Rest Time:</strong> {this.props.timer}
          </div>
        </div>
      </div>

      <div className = "row">
        <div className ="col-xs-6">
            <input type="button" className = "ctr btn btn-primary btn-sm" value="Next Set" onClick={() => this.props.nextSet()}/>
        </div>
          
      <div className ="col-xs-6">
        
          <input type="button" className = "ctr btn btn-primary btn-sm" value="Complete Session" onClick={() => this.props.completePlan()}/>
      </div>
    </div>
    
    
    
    </div>
  )
  }
  
}

export class ExerciseAdd extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      exercise:'',
      sets:0,
      rest:0
    }
  }
  
  exerciseOnChange(e){
    this.setState( {exercise : e.target.value});
  }
  setsOnChange(e){
    this.setState( {sets: e.target.value});
  }
  restOnChange(e){
    this.setState( {rest : e.target.value});
  }
  
  render(){
    return (
    <div className="exercise">
    <div className ="row">
      <div className ="col-xs-12">
        <fieldset>
          <legend>Exercise</legend>
          <input type="text" 
              className = 'form-control'
              value={this.state.exercise} 
              onChange ={(e)=>this.exerciseOnChange(e)} />
        </fieldset>
      </div>
    </div>

    <div className ='row'>
      <div className ="col-xs-6">
        <fieldset>
          <legend>No. of Sets</legend>
          <input type="text" 
              value={this.state.sets} 
              className = 'form-control'
              onChange ={(e)=>this.setsOnChange(e)} />
        </fieldset>
      </div>

      <div className ="col-xs-6">
        <fieldset>
          <legend>Sec of Rest</legend>
          <input type="text" 
              value={this.state.rest} 
              className = 'form-control'
              onChange ={(e)=>this.restOnChange(e) }/>
        </fieldset>
      </div>
      
    </div>
      <div>
        <input type="button" 
            value="Add Exercise" 
            className = "add btn btn-primary"
            onClick={() => this.props.addExercise(this.state.exercise,
                                this.state.sets,
                                this.state.rest)}/>
      </div>
      
    </div>
  )}
}