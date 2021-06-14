

import produce from "immer";
import execHandler from "./reducerUtils";

const initialState = {
  AllEmployes:[],
  employe:{
      name:"",
      password:"",
      mail:"",
      status:""
  }
};

const user = {

    setAllEmployes(state, action){
        action.payLoad.forEach(element => {
            state.AllEmployes.push(element);
        });
    },

    setName(state,action){
        state.employe.name= action.payLoad.name;
    },
    setMail(state,action){
        state.employe.mail= action.payLoad.mail;
    },

    setPassword(state,action){
        state.employe.password= action.payLoad.password;
    },
    setStatus(state,action){
        state.employe.status= action.payLoad.status;
    },

};

export default produce((state, action) => {
  execHandler(state, action, user);
}, initialState);
