import actions from "../actions";


export const getEmployes = (store) => (next) => (action) => {
  if (action.type == "GET_ALL_EMPLOYES") {
    fetch(`https://localhost:3001/getAllEmployed`, { "method": "GET" })
    .then(response => response.json())
    .then(result =>{
        store.dispatch(actions.setAllEmployes(result));
        debugger
    })
    .catch(error => console.log ('error', error));
}
return next(action)

};



export const setDetails = (store) => (next) => (action) => {

    if(action.type == "GET_DETAILS"){
        debugger
        let id= action.payLoad;
            
    fetch(`https://localhost:3001/getEmployeById/${id}/`, {"method":"GET"})
        .then(response => response.json())
        .then(result =>{
            store.dispatch(actions.setName(result));
            store.dispatch(actions.setPassword(result));
            store.dispatch(actions.setMail(result));
            store.dispatch(actions.setStatus(result));
        })
        .catch(error => console.log ('error', error));
    }
    return next(action)
}