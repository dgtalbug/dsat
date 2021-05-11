import { TOHStateType, TOHActionType } from './action';

const TOHReducer = (state: TOHStateType, action: TOHActionType): TOHStateType => {

  switch (action.type) {
    case 'SET_DISK': {
      return {
        ...state,
        diskVal: action.payload,
        aTower: state.aTower.slice(0, action.payload),
        tohDisk: state.tohDisk.slice(0, action.payload),

      }
    }
    case 'START': {
      return {
        ...state,
        isStart: action.payload
      }
    }
     case 'VISUALIZE': {
      return {
        ...state,
        isVisualize: action.payload
      }
    }
    case 'POP_DISK': {
      return {
        ...state,
        aTower: (action.payload.from === 'A') ? state.aTower.filter((aTowerDisk) => { return aTowerDisk.dno !== action.payload.disk }) : state.aTower,
        bTower: (action.payload.from === 'B') ? state.bTower.filter((bTowerDisk) => { return bTowerDisk.dno !== action.payload.disk }) : state.bTower,
        cTower: (action.payload.from === 'C') ? state.cTower.filter((cTowerDisk) => { return cTowerDisk.dno !== action.payload.disk }) : state.cTower,
      }
    }
    case 'PUSH_DISK': {
      return {
        ...state,
        aTower: (action.payload.to === 'A') ? [action.payload.disk[0], ...state.aTower] : state.aTower,
        bTower: (action.payload.to === 'B') ? [action.payload.disk[0], ...state.bTower] : state.bTower,
        cTower: (action.payload.to === 'C') ? [action.payload.disk[0], ...state.cTower] : state.cTower,
      }
    }
    case 'STEP_DESC':{
      console.log(action.payload);
      console.log(state.stepDesc);
      return {
        ...state,
        stepDesc: []
      }
    }
    default:
      return state;
  }
}

export default TOHReducer;