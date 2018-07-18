import {ADD_PLAN,
  DELETE_PLAN,
  ADD_EXERCISE,
  DELETE_EXERCISE,
  START_PLAN,
  NEXT_SET,
  COMPLETE_PLAN} from './actions.js'


//initial state
initialState = {
  current:{},
  plan:{
      Chest : [ {name: "Bench Press", sets: 5, rest : 60},
            {name: "Push Up", sets: 5, rest : 60}],
      Leg :   [ {name: "Squat", sets: 5, rest : 60},
            {name: "Leg Extension", sets: 5, rest : 60}],
      Shoulder : [ {name: "Shoulder Press", sets: 5, rest : 60},
            {name: "Lateral Rise", sets: 5, rest : 60},
            {name: "Front Rise", sets: 5, rest : 60}]
    }
}

function gymApp (state = initialState, action) {
  switch (action.type){
    case ADD_PLAN:

    
  }
}


function planUpdate (state, action) {
  switch (action.type){
    case ADD_PLAN:
      return Object.assign({},state,{ [action.planName] : []})
      
    case DELETE_PLAN:
      let newPlan = Object.assign({},state);
      delete newPlan[action.planName];
      return newPlan;
      
    case ADD_EXERCISE:
    case DELETE_EXERCISE:
      let newExcercise = excerciseUpdate(state.planName, action);
      let newPlan = Object.assign({},state, {[state.planName]:newExcercise});
      return newPlan;
      
    default:
      return state;
  }
}

function excerciseUpdate (state,action) {
  switch (action.type){
    case ADD_EXERCISE:
      let newExcercise = state.slice(0);
      newExcercise.push({excerciseName, sets, rest});
      return newExcercise;
      
    case DELETE_EXERCISE:
      let newExcercise = state.slice(0);
      let excerciseIndex = 0;
      for(let n =0; n<newExcercise.length;n++){
        if (newExcercise[n] == action.excerciseName)
          excerciseIndex = n;
          break;      
      }
      newExcercise.splice(excerciseIndex,1);
      return newExcercise;
      
    default:
      return state;
  }
}











  