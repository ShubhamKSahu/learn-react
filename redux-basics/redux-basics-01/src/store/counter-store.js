
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

const authSlice = createSlice({
    name: 'Authentication',
    initialState : {isAuthenticated: false},
    reducers : {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }

    }
})

const store = configureStore({
    reducer: {
        counter : counterSlice.reducer,
        auth : authSlice.reducer
    }
})
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store