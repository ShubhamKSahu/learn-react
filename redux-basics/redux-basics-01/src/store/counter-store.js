import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";


createSlice({
    name: 'counter',
    initialState: {count: 0},
    reducer: {
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        increase(state, action){
            state.count = state.count + action.value;
        },
        toggleCounter(state){
            state.isCounterShow = !state.isCounterShow
        }
    }
})
const counterReducer = (state={count : 0, isCounterShow: true}, action) =>{
    if(action.type === 'increment'){
        return {
            count: state.count + 1,
            isCounterShow: state.isCounterShow
        }
    }
    if(action.type === 'increase'){
        return {
            count : state.count + action.value,
            isCounterShow: state.isCounterShow
        }
    }

    if(action.type === 'decrement'){
        return {
            count: state.count - 1,
            isCounterShow: state.isCounterShow
        }
    }

    if(action.type === 'toggleCounter'){
        return {
            count: state.count,
            isCounterShow : !state.isCounterShow
        }
    }

    return state;
}
const store = createStore(counterReducer);

export default store