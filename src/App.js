import { useDispatch, useSelector } from "react-redux";
import { incrementCreator, decrementCreator } from "./redux/counterActions";
import { loginCreator, logoutCreator } from "./redux/loginActions";

let App = () => {

  //useSelector is a hook that takes a callback function with a paramter of ALL STATES IN THE STORE/REDUCER
  //which can be used in many ways other than updatation
  let { count, logged } = useSelector((state) => state)

  console.log(count)

  //useDispatch is a hook which returns dispatch method that...
  let dispatch = useDispatch()
  return (
    <>
    <button onClick={()=>{
      dispatch(loginCreator())
    }}>Login</button>

    <button onClick={()=>{
      dispatch(logoutCreator())
    }}>Logout</button>
    <br></br>
    <br></br>
      {logged ? (
        <>
          <button onClick={() => {
            dispatch(incrementCreator(1))
            // ...is used to dispatch action on the store which is wrapping the component
            //incrementCounter is returning an action object that is being sent to the store
            //store gives the object to the reducer
            //reducer has the previous state
            //action object that was passed to reducer via store updated the state
            //returned the updated state to store (that is binding our app completely)
            //store ne updated state App Component ko diya
            //App component ne rerender krdiya
          }
          }>+1</button>

          <button onClick={() => {
            dispatch(incrementCreator(10))
          }
          }>+10</button>

          <br></br>
          <br></br>
          <button onClick={() => {
            dispatch(decrementCreator())
            // ...is used to dispatch action on the store which is wrapping the component
          }
          }>-1</button>
          <p>{count}</p>
        </>) : ""}
    </>
  );
}

// when the button is clicked 
//action ka obj is bein g dispatched on the store
//store gives the object to the reducer
//reducer has the previous state
//action object that was passed to reducer via store updated the state
//returned the updated state to store (that is binding our app completely)
//store ne updated state App Component ko diya
//App component ne rerender krdiya

export default App;
