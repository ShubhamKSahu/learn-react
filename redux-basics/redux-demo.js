const redux = require('redux');

const countReducer = (state={count: 0}, action)=> {
    if (action.type === 'increment') {
      return {
        count: state.count + 1
      };
    }

    if(action.type === 'decrement'){
        return {
            count: state.count-1
        }
    }
    return state;

}

const store = redux.createStore(countReducer);
console.log("Initial state: ", store.getState())
const countSubscribe = () =>{
    const latestState = store.getState();
    console.log("Updated state: ", latestState);
}

store.subscribe(countSubscribe);
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});