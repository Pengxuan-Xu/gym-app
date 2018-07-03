import React from 'react';
import ReactDOM from 'react-dom';

export class ExcerciseList extends React.Component{
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
		let excercise;
		if(this.props.excercise !== undefined) {
			excercise = this.props.excercise.map((item,index) =>{
					let highlight="null"
					if(this.state.index == index) highlight="highlight"
					return <li key={item.name.toString()} 
								className={highlight} 
								index={index}
								onClick = { (e)=>this.onClick(e)}>
						<strong>{item.sets}</strong> sets of <strong>{item.name}</strong> with <strong>{item.rest}s</strong> rest
					</li>
					}
				);
			} else {
			excercise = null;
		}
				
		
		return (
		<div className="excercise">
			<h1> Excercise in the Plan </h1>
			<div className="item-list">
				<ul>
					{excercise}
				</ul>
			</div>
			
			<div>
				<input type="button" value="↑" onClick={() => alert('To be implemented')}/>
				<input type="button" value="↓" onClick={() => alert('To be implemented')}/>
				<input type="button" value="X" onClick={() => this.props.deleteExcercise(this.state.index)}/>
			</div>
		</div>
	)}
}

export class ExcerciseAdd extends React.Component{
	constructor(props){
		super (props);
		this.state = {
			excercise:'',
			sets:0,
			rest:0
		}
	}
	
	excerciseOnChange(e){
		this.setState( {excercise : e.target.value});
	}
	setsOnChange(e){
		this.setState( {sets: e.target.value});
	}
	restOnChange(e){
		this.setState( {rest : e.target.value});
	}
	
	render(){
		return (
		<div className="excercise">
			<div>
				<fieldset>
					<legend>Exercise</legend>
					<input type="text" 
							value={this.state.excercise} 
							onChange ={(e)=>this.excerciseOnChange(e)} />
				</fieldset>
			</div>
			
			<div>
				<fieldset>
					<legend>No. of Sets</legend>
					<input type="text" 
							value={this.state.sets} 
							onChange ={(e)=>this.setsOnChange(e)} />
				</fieldset>
			</div>

			<div>
				<fieldset>
					<legend>Sec of Rest</legend>
					<input type="text" 
							value={this.state.rest} 
							onChange ={(e)=>this.restOnChange(e) }/>
				</fieldset>
			</div>
			
			<div>
				<input type="button" 
						value="+" 
						onClick={() => this.props.addExcercise(this.state.excercise,
																this.state.sets,
																this.state.rest)}/>
			</div>
		</div>
	)}
}