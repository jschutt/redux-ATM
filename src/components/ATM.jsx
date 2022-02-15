import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, showATM} from '../redux/counterSlice'

const ATM = () => {
    let dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    const changeSpecificAmount = (num, operator) => {
        console.log(num)
        if(operator === "-"){
            console.log("decrease")
            dispatch(decrement(num));
        } else if (operator === "+") {
            dispatch(increment(num))
        }
    }

  return (
    <div>
      <h1>Current amount: {count}</h1>
      <h3>Withdrawal</h3>
      <label htmlFor="inputValue">Amount: </label>
      <input type="number" id="inputValue" />
      <button>Withdraw</button>
      <div>
        <button onClick={() => {changeSpecificAmount(100, "-")}}>-100</button>
        <button onClick={() => {changeSpecificAmount(200, "-")}}>-200</button>
        <button onClick={() => {changeSpecificAmount(500, "-")}}>-500</button>
        <button onClick={() => {changeSpecificAmount(1000, "-")}}>-1000</button>
      </div>
    <br/>
      <h3>Deposit</h3>
      <label htmlFor="inputValue">Amount: </label>
      <input type="number" id="inputValue" />
      <button>Deposit</button>
      <div>
        <button onClick={() => {changeSpecificAmount(100, "+")}}>+100</button>
        <button onClick={() => {changeSpecificAmount(200, "+")}}>+200</button>
        <button onClick={() => {changeSpecificAmount(500, "+")}}>+500</button>
        <button onClick={() => {changeSpecificAmount(1000, "+")}}>+1000</button>
      </div>
    </div>
  );
};

export default ATM;
