import { Dispatch } from 'react'

export type TOHDisk = {
  dno: number
  color: string
}
export type TOHStateType = {
  diskVal: number
  isStart: boolean
  tohDisk: TOHDisk[]
  aTower: any[]
  bTower: any[]
  cTower: any[]
  isVisualize: boolean
  stepDesc: []
}

export type TOHActionType =
  | {
    type: 'SET_DISK'
    payload: number
  }
  | {
    type: 'START'
    payload: boolean
  }
  | {
    type: 'VISUALIZE'
    payload: boolean
  }
  | {
    type: 'POP_DISK'
    payload: {
      from: string,
      disk: number
    }
  }
  | {
    type: 'PUSH_DISK'
    payload: {
      to: string,
      disk: TOHDisk[]
    }
  }
  | {
    type: 'STEP_DESC'
    payload: []
  }


export type TOHContextType = {
  state: TOHStateType
  dispatch: Dispatch<TOHActionType>
}
