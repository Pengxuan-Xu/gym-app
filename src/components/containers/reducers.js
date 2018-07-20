import {ADD_PLAN,
  DELETE_PLAN,
  ADD_EXERCISE,
  DELETE_EXERCISE,
  START_PLAN,
  NEXT_SET,
  COMPLETE_PLAN} from './actions.js'


//initial state


function gymApp (state, action) {
  let newState;
  switch (action.type){
    case ADD_PLAN:
    case DELETE_PLAN:
    case ADD_EXERCISE:
    case DELETE_EXERCISE:
      newState = Object.assign({},state, {plan: planUpdate(state.plan, action)});
      return newState;
    
    case START_PLAN:
      newState = Object.assign({},state, {current: state.plan[action.planName]});
      return newState;
    
    case NEXT_SET:
      if (state.current.length === 0) {
        return state;
      }else if (state.current[0].sets === 1){
        let newCurrent = state.current.slice(0);
        newCurrent.shift();
        newState = Object.assign({},state, {current: newCurrent});
        return newState;
      }else {
        let newCurrent = state.current.slice(0);
        newCurrent[0].sets = newCurrent[0].sets -1;
        newState = Object.assign({},state, {current: newCurrent});
        return newState;
      }
    
    case COMPLETE_PLAN:
      newState = Object.assign({},state, {current: []});
      return newState;
    
    default:
      return state;
  }
      
}

function planUpdate (state, action) {
  switch (action.type){
    case ADD_PLAN:
      return Object.assign({},state,{ [action.planName] : []})
      
    case DELETE_PLAN:
      let newPlan1 = Object.assign({},state);
      delete newPlan1[action.planName];
      return newPlan1;
      
    case ADD_EXERCISE:
    case DELETE_EXERCISE:
      let newExercise = exerciseUpdate(state[action.planName], action);
      let newPlan2 = Object.assign({},state, {[action.planName]:newExercise});
      return newPlan2;
      
    default:
      return state;
  }
}

function exerciseUpdate (state,action) {
  switch (action.type){
    case ADD_EXERCISE:
      let newExercise1 = state.slice(0);
      newExercise1.push({name: action.exerciseName, sets: action.sets, rest: action.rest});
      return newExercise1;
      
    case DELETE_EXERCISE:
      let newExercise2 = state.slice(0);
      newExercise2.splice(action.index,1);
      return newExercise2;
      
    default:
      return state;
  }
}

export default gymApp;









  