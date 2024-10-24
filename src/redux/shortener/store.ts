import urlReducer from './reducer';
import {combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({url: urlReducer});
// Function to load state from local storage
const loadState = () => {
    try {
      const serializedState = localStorage.getItem("reduxState");
      if (serializedState === null) {
        return undefined; // Return undefined to let Redux initialize with default state
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined; // Return undefined in case of errors
    }
  };

// Function to save state to local storage
const saveState = (state: RootState) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("reduxState", serializedState);
    } catch (err) {
      // Handle errors if needed
    }
  };
  
  // Load initial state from local storage
  const preloadedState = loadState();
  
  export const store = configureStore({
    reducer: rootReducer,
    preloadedState, // Use preloaded state if available
  }); 
  
  // Subscribe to store changes and save state on every update
  store.subscribe(() => {
    saveState(store.getState());
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  // Typed versions of useDispatch and useSelector
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  