import React,{createContext,useContext,useReducer} from "react";

// prepare the datalayer
export const StateContext=createContext();

// Wrap our app and provide the datalayer
// Build a provider component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );


//pull information from data layer
export const useStateValue=()=>useContext(StateContext);

// go to index.js