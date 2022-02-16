import { useDispatch, useSelector } from "react-redux";
import {increment, decrement } from '../redux/counterSlice'
import styles from './css/ATM.module.css'

const ATM = () => {
    let dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    const isATMOpen = useSelector((state) => state.counter.showATM)

    const changeSpecificAmount = (num, operator) => {
        console.log(num)
        if(operator === "-"){
            console.log("decrease")
            dispatch(decrement(num));
        } else if (operator === "+") {
            dispatch(increment(num))
        }
    }

    const changeInputAmount = (operator) => {
      let withdraw = +document.querySelector("#withdrawValue").value;
      let deposit = +document.querySelector("#depositValue").value;
      if(operator === "-"){
        dispatch(decrement(withdraw))
      } else if (operator === "+"){
        dispatch(increment(deposit))
      }
    }

  return (
    <div className={isATMOpen ? styles.ATMContainer : styles.ATMContainerHide}>
      <h1>Current amount: {count}</h1>
      <h3>Withdrawal</h3>
      <label htmlFor="inputValue">Amount: </label>
      <input type="number" id="withdrawValue" />
      <button onClick={() => {changeInputAmount("-")}}>Withdraw</button>
      <div>
        <button onClick={() => {changeSpecificAmount(100, "-")}}>-100</button>
        <button onClick={() => {changeSpecificAmount(200, "-")}}>-200</button>
        <button onClick={() => {changeSpecificAmount(500, "-")}}>-500</button>
        <button onClick={() => {changeSpecificAmount(1000, "-")}}>-1000</button>
      </div>
    <br/>
      <h3>Deposit</h3>
      <label htmlFor="inputValue">Amount: </label>
      <input type="number" id="depositValue" />
      <button onClick={() => {changeInputAmount("+")}}>Deposit</button>
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
