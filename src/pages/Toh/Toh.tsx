
import { useReducer } from 'react';
import TOHContext, { initialState } from './context/context';
import TOHReducer from './context/reducer';
import DiskBox from './helpers/DiskBox';
import Towers from './helpers/Towers';

function Toh() {
  const [state, dispatch] = useReducer(TOHReducer, initialState)
  return (
    <TOHContext.Provider value={{state,dispatch}}>
      <div className="App Toh">
        <DiskBox />
        <Towers/>
      </div>
    </TOHContext.Provider>
  );
}

export default Toh;