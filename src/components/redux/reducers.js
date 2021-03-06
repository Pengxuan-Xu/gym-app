import {ADD_PLAN,
  DELETE_PLAN,
  ADD_EXERCISE,
  DELETE_EXERCISE,
  START_PLAN,
  NEXT_SET,
  COMPLETE_PLAN,
  LOAD_USER_PLAN} from './actions.js'
import { initializeApp } from 'firebase';

let initialValue = {
  plan:{},
  current:[]
}



function gymApp (state=initialValue, action) {
  switch (action.type){
    case LOAD_USER_PLAN:
      return {...action.state}
    case ADD_PLAN:
    case DELETE_PLAN:
    case ADD_EXERCISE:
    case DELETE_EXERCISE:
      return {...state, plan: planUpdate(state.plan, action)};

    case START_PLAN:
      console.log(action.planName);
      return {...state, current: [...state.plan[action.planName]] }

    case NEXT_SET:
      if (state.current.length === 0) {
        return state;

      } else if (state.current[0].sets === 1){
        return { ...state, current: state.current.slice(1) }
      } else {
        const current = state.current.map((planItem,index) => {
          const newItem = {...planItem};
          if (index === 0) newItem.sets--;
          return newItem;
        });
        return { ...state, current };
      }

    case COMPLETE_PLAN:
      return { ...state, current: [] };

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
      console.log(state[action.planName], action);
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









  
