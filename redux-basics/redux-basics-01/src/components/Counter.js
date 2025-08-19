import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const count = useSelector(state => state.count);
  const show = useSelector(state => state.isCounterShow);
  const dispatch = useDispatch()
   
  const incrementHandler = ()=>{
    dispatch({type: 'increment'})
  }
  const handleIncrease = () =>{
    dispatch({type: 'increase', value: 5})
  }
  const decrementHandler = ()=>{
    dispatch({type: 'decrement'})
  }

   const handleToggleCounter = () =>{
    dispatch({type: 'toggleCounter'})
   }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={handleIncrease}>increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
