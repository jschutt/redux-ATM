import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, showATM } from '../redux/counterSlice'
import styles from './css/ATM.module.css'
import keypad from '../dial.png'

const ATM = () => {
    let dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    const isATMOpen = useSelector((state) => state.counter.showATM)

    const changeSpecificAmount = (num, operator) => {
        if(operator === "-"){
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
    <div>
      <div className={!isATMOpen ? styles.ATMContainer : styles.ATMContainerHide}>
      <button onClick={() => {dispatch(showATM())}} className="startATMBtn">Start ATM</button>
      <div className={styles.welcomeContainer}>
      <h1 className={styles.welcomeTitle}>Welcome<br/> to React ATM</h1>
      <img src={keypad} alt="keypad" className={styles.keypadImg}/>
      </div>
      <p className={styles.byMe}>By jschutt</p>
      </div>
      <div className={isATMOpen ? styles.ATMContainer : styles.ATMContainerHide}>
      <button onClick={() => {dispatch(showATM())}} className="closeATMBtn">Close ATM</button>
      <h1 className={styles.currentAmount}>Current amount: {count}:-</h1>
      <div className={styles.amountContainers}>
        <h2 className={styles.amountTitles}>Withdrawal</h2>
        <label htmlFor="inputValue">Amount: </label>
        <input type="number" id="withdrawValue" />
        <button onClick={() => {changeInputAmount("-")}} className={styles.inputValueBtn}>Withdraw</button>
        <div className={styles.specificBtnContainer}>
          <button onClick={() => {changeSpecificAmount(100, "-")}}>-100</button>
          <button onClick={() => {changeSpecificAmount(200, "-")}}>-200</button>
          <button onClick={() => {changeSpecificAmount(500, "-")}}>-500</button>
          <button onClick={() => {changeSpecificAmount(1000, "-")}}>-1000</button>
        </div>
      </div>
    <br/>
    <div className={styles.amountContainers}>
      <h2 className={styles.amountTitles}>Deposit</h2>
      <label htmlFor="inputValue">Amount: </label>
      <input type="number" id="depositValue" />
      <button onClick={() => {changeInputAmount("+")}}  className={styles.inputValueBtn}>Deposit</button>
      <div className={styles.specificBtnContainer}>
        <button onClick={() => {changeSpecificAmount(100, "+")}}>+100</button>
        <button onClick={() => {changeSpecificAmount(200, "+")}}>+200</button>
        <button onClick={() => {changeSpecificAmount(500, "+")}}>+500</button>
        <button onClick={() => {changeSpecificAmount(1000, "+")}}>+1000</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ATM;
