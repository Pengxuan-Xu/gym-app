import React from 'react';
import ReactDOM from 'react-dom';
import Planner from './planner.js'

class App extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div>
				<Planner />
			</div>
		)
	}
}

export default App;