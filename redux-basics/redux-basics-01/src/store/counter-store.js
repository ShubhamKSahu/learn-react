import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {count: 0, isCounterShow: true},
    reducers: {
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        increase(state, action){
            state.count = state.count + action.payload;
        },
        toggleCounter(state){
            state.isCounterShow = !state.isCounterShow
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})
const counterActions = counterSlice.actions;
export {counterActions}
export default store