import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.user);

  function getEmployes() {
    dispatch(actions.getAllEmployes());
  }

  return (
    <>
      <br></br>
      <br></br>
      <button onClick={getEmployes}>get empoleys</button>
      {Data.AllEmployes.map((employe, index) => {
        <p>
          employe number {index + 1}:<br></br>
          {employe.name}
          <br></br>
          {employe.password}
          <br></br>
          {employe.mail}
        </p>;
      })}
    </>
  );
}
