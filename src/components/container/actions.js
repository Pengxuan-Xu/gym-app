
//Action types
export const ADD_PLAN = 'ADD_PLAN';
export const DELETE_PLAN ='DELETE_PLAN';
export const ADD_EXERCISE='ADD_EXERCISE'
export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const START_PLAN = 'START_PLAN';
export const NEXT_SET = 'NEXT_SET';
export const COMPLETE_PLAN = 'COMPLETE_PLAN';


//Action creators

export function addPlan(planName) {
  return {type:ADD_PLAN, planName}
}

export function deletePlan(planName) {
  return {type:DELETE_PLAN, planName}
}

export function addExercise(planName,excerciseName,sets,rest){
  return {type:ADD_EXERCISE, planName, excerciseName, sets, rest}
}

export function deleteExercise(planName,excerciseName){
  return {type:DELETE_EXERCISE, planName, excerciseName}
}

export function startPlan(planName){
  return {type:START_PLAN, planName}
}

export function nextSet (){
  return {type:NEXT_SET}
}

export function completePlan(){
  return {type:COMPLETE_PLAN}
}

