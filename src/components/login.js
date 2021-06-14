import { useState } from "react"
import { useHistory } from "react-router-dom";


export default function Login (){

    const [mail, setMail]= useState();
    const [password, setPassword]= useState();
    const history= useHistory();

    function check(){
        if(mail=="admin@workers.com"&& password=="admin2765")
        history.push('/ADMIN');
        else
        history.push('/USER');
    }

    return(
        <>
        <br></br><br></br>
        <input type="email" placeholder="mail" onChange={v => setMail(v.target.value)}/>
        <input type="password" placeholder="password" onChange={v => setPassword(v.target.value)}/>
        <br></br><br></br>
        <button onClick={check}>sing in</button>
        </>
    )
}