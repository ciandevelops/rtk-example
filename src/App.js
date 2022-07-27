import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount, reset} from "./redux/features/counter/counterSlice";

function App() {

  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container">
        {/* Counter */}
        {value}

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment 10</button>
        <button onClick={() => dispatch(decrementByAmount(10))}>Decrement 10</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        
      </div>
    </div>
  );
}

export default App;
