/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

const timeframeReducer = (state, action) => {
  console.log('state: ', state);
  switch (action.type) {
    case 'DAILY':
      console.log(action.type);
      return 'daily';
    case 'WEEKLY':
      console.log(action.type);
      return 'weekly';
    case 'MONTHLY':
      console.log(action.type);
      return 'monthly';
    default:
      return state;
  }
};

const TimeframeContext = createContext();

export const TimeframeContextProvider = (props) => {
  const [timeframe, timeframeDispatch] = useReducer(timeframeReducer, 'weekly');

  return (
    <TimeframeContext.Provider value={[timeframe, timeframeDispatch]}>
      {props.children}
    </TimeframeContext.Provider>
  );
};

export const useTimeframeValue = () => {
  const timeframeAndDispatch = useContext(TimeframeContext);
  return timeframeAndDispatch[0];
};

export const useTimeframeDispatch = () => {
  const timeframeAndDispatch = useContext(TimeframeContext);
  return timeframeAndDispatch[1];
};
