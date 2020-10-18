import React, {createContext, useContext, useReducer} from 'react';
//data layer
export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);