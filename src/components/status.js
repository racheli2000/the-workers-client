
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
  

export default function Status(){
    
    const Data= useSelector(state => state.user.employe);
    const dispatch= useDispatch();

    
    function save (id){
        dispatch(actions.getDetails(id))
    }
    return(
        <>
        <br></br><br></br>
         <label>id:</label>
            <input type="text" onChange={(e) => save(e.target.value)}></input>

            <h2>
                <label>name: {Data.name}</label>
            </h2>
            <h2>
                <label>password: {Data.password}</label>
            </h2>
            <h2>
                <label>mail: {Data.mail}</label>
            </h2>
            <h2>
                <label>status: {Data.status}</label>
            </h2>
        </>
    )
}