
import { createContext } from "react";
import { TOHContextType, TOHStateType } from './action';
import { diskColors } from '../../../helpers/colors';

export type Disk = {
  dno: number
  color: string
}

const colorIndex = (): number[] => {
  let idx: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let i = idx.length - 1
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = idx[i]
    idx[i] = idx[j]
    idx[j] = temp
  }
  // console.log(idx);
  return idx;
}

const prepDisk = (): Disk[] => {
  let disk: Disk[] = [];
  colorIndex().forEach((index, value) => {
    disk.push({
      dno: value + 1,
      color: diskColors[index]
    })
  })
  return disk;
}

const tohDisk = prepDisk();
export const initialState: TOHStateType = {
  diskVal: 3,
  isStart: false,
  tohDisk: tohDisk,
  aTower: tohDisk,
  bTower: [],
  cTower: [],
  isVisualize: false,
  stepDesc: []

}

export const TOHContext = createContext<TOHContextType>({ state: initialState, dispatch: () => undefined });

export default TOHContext;