import './App.css';
import ATM from './components/ATM'
import { useDispatch, useSelector } from "react-redux";
import {showATM} from './redux/counterSlice'

function App() {
  let dispatch = useDispatch();
  const isATMOpen = useSelector((state) => state.counter.showATM)

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => {dispatch(showATM())}} className="btnATM">{isATMOpen ? "Close ATM" : "Open ATM"}</button>
      <ATM />
      </header>
    </div>
  );
}

export default App;
