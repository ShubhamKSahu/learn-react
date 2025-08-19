import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-store';
const Counter = () => {
  const count = useSelector(state => state.count);
  const show = useSelector(state => state.isCounterShow);
  const dispatch = useDispatch()
   
  const incrementHandler = ()=>{
    dispatch(counterActions.increment())
  }
  const handleIncrease = () =>{
    dispatch(counterActions.increase(5))
  }
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement())
  }

   const handleToggleCounter = () =>{
    dispatch(counterActions.toggleCounter())
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
