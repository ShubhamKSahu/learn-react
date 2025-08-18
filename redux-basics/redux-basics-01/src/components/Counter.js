import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {};
   
  const incrementHandler = ()=>{
    dispatch({type: 'increment'})
  }
  const decrementHandler = ()=>{
    dispatch({type: 'decrement'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
