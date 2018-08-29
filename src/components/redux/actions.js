import {db} from '../elements/firestore.js'
//Action types
export const ADD_PLAN = 'ADD_PLAN';
export const DELETE_PLAN ='DELETE_PLAN';
export const ADD_EXERCISE='ADD_EXERCISE'
export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const START_PLAN = 'START_PLAN';
export const NEXT_SET = 'NEXT_SET';
export const COMPLETE_PLAN = 'COMPLETE_PLAN';
export const LOAD_USER_PLAN= 'LOAD_USER_PLAN';


//Action creators

export function addPlan(planName) {
  return {type:ADD_PLAN, planName}
}

export function deletePlan(planName) {
  return {type:DELETE_PLAN, planName}
}

export function addExercise(planName,exerciseName,sets,rest){
  return {type:ADD_EXERCISE, planName, exerciseName, sets, rest}
}

export function deleteExercise(planName,index){
  return {type:DELETE_EXERCISE, planName, index}
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

export const loadUserPlan = (username)=>{
  return (dispatch,getState) =>{
    let initial;
    db.collection("State").doc(username).get().then((doc) => {
      initial={
        user: username,
        current:[],
        plan:{},
      }
      if(!doc.exists){
        db.collection("State").doc(username).set(initial)
        dispatch(initialState(initial));
      }else{
        initial = doc.data();
        dispatch(initialState(initial));
      }
    }).then(
      
    )
  }
}

export const initialState = (initial)=>{
  return {
    type:LOAD_USER_PLAN,
    exist:false,
    state:initial
  }
}