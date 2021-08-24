import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "./redux/actions";

let App = () => {

  //useSelector is a hook that takes a callback function with a paramter of ALL STATES IN THE STORE/REDUCER
  //which can be used in many ways other than updatation
  let states = useSelector((state) => state)

  //useDispatch is a hook which returns dispatch method that...
  let dispatch = useDispatch()
  return (
    <>
      <button onClick={()=>{
        dispatch(incrementCounter())
        // ...is used to dispatch action on the store which is wrapping the component
        }
      }>+</button>
      <p>{states}</p>
    </>
  );
}

// when the button is clicked 
//action ka obj is being dispatched on the store
//store gives the object to the reducer
//reducer had the previous state
//action object that was passed to reducer via store updated the state
//returned the updated state to store (that is binding our app completely)
//store ne updated state App Component ko diya
//App component ne rerender krdiya


export default App;
