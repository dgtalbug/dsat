import { HStack, Center, Box, Stack, Button, Table, Tbody, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import TOHContext from '../context/context';
function Towers() {
  const {
    state: { isStart, diskVal, aTower, bTower, cTower, tohDisk, isVisualize, stepDesc }, dispatch
  } = React.useContext(TOHContext);

  const popDisk = (from: string, disk: number) => {
    switch (from) {
      case 'A':
        dispatch({
          type: 'POP_DISK',
          payload: {
            from: 'A',
            disk: disk
          }
        })
        break;
      case 'B':
        dispatch({
          type: 'POP_DISK',
          payload: {
            from: 'B',
            disk: disk
          }
        })
        break;
      case 'C':
        dispatch({
          type: 'POP_DISK',
          payload: {
            from: 'C',
            disk: disk
          }
        })
        break;
      default:
        break;
    }
  }

  const pushDisk = (to: string, disk: number) => {
    let _disk = tohDisk.filter((tDisk) => {
      return tDisk.dno === disk
    })
    switch (to) {
      case 'A':

        dispatch({
          type: 'PUSH_DISK',
          payload: {
            to: 'A',
            disk: _disk
          }
        })
        break;
      case 'B':

        dispatch({
          type: 'PUSH_DISK',
          payload: {
            to: 'B',
            disk: _disk
          }
        })
        break;
      case 'C':

        dispatch({
          type: 'PUSH_DISK',
          payload: {
            to: 'C',
            disk: _disk
          }
        })
        break;
      default:
        break;
    }
  }

  const sleep = (milliseconds: number) => {
    return new Promise(resolve => setInterval(resolve, milliseconds))
  }

  const moveDisk = async (from: string, to: string, disk: number) => {
    await sleep(1000);
    popDisk(from, disk);
    pushDisk(to, disk);
    return []
  }

  const stepDes = (from: string, to: string, disk: number) => {
    dispatch({
      type: 'STEP_DESC',
      payload: []
    })
  }

  const TOH = async (n: number, from: string, to: string, temp: string) => {
    let _from = from;
    let _temp = temp;
    let _to = to;


    if (n === 1) {
      console.log(`Moving Disk ${n} _from ${_from} _to ${to}..`);
      moveDisk(_from, _to, n);
      stepDes(_from, _to, n);
      return
    }
    TOH(n - 1, _from, _temp, _to);
    console.log(`Moving Disk ${n} _from ${_from} _to ${to}`);
    moveDisk(_from, _to, n);
    stepDes(_from, _to, n);
    TOH(n - 1, _temp, to, _from);
  }

  const handleVisualize = () => {
    dispatch({
      type: 'VISUALIZE',
      payload: true
    })
    TOH(diskVal, 'A', 'C', 'B');
  }


  return (
    <>
      {isStart ?
        <>
          <HStack spacing="20px">
            <Center>
              <Box background="white" borderRadius="10" h="300px" w="300px" alignItems="baseline" p="5">
                <Stack alignItems="center" paddingTop='5' mb='10'>
                  {aTower.map((disk) => {
                    return <div key={disk.dno * 7 + 1} style={{
                      width: `${disk.dno * 30}px`,
                      height: '25px',
                      background: disk.color,
                      borderRadius: '3px',
                      marginTop: '0px',
                    }}>
                    </div>
                  })}
                </Stack>
              </Box>
            </Center>
            <Center>
              <Box background="white" borderRadius="10" h="300px" w="300px" alignItems="baseline" p="5">
                <Stack alignItems="center" paddingTop='5' mb='10'>
                  {bTower.map((disk) => {
                    return <div key={disk.dno * 4 + 0} style={{
                      width: `${disk.dno * 30}px`,
                      height: '25px',
                      background: disk.color,
                      borderRadius: '3px',
                      marginTop: '0px',
                    }}>
                    </div>
                  })}
                </Stack>
              </Box>
            </Center>
            <Center>
              <Box background="white" borderRadius="10" h="300px" w="300px" alignItems="baseline" p="5">
                <Stack alignItems="center" paddingTop='5' mb='10'>
                  {cTower.map((disk) => {
                    return <div key={disk.dno * 2} style={{
                      width: `${disk.dno * 30}px`,
                      height: '25px',
                      background: disk.color,
                      borderRadius: '3px',
                      marginTop: '0px',
                    }}>
                    </div>
                  })}
                </Stack>
              </Box>
            </Center>
          </HStack>
          <Center mt="10">
            {!isVisualize ?
              <Button colorScheme="blue" onClick={handleVisualize}>Start</Button>
              :
              <Stack h="150px" overflow="scroll">
                <Table variant="striped" colorScheme="whiteAlpha" size="sm" border="2px solid #353840">
                  <Tbody>
                    {(stepDesc.length > 0) ? 
                    stepDesc.map((step) => {
                      return (
                        <Tr>
                          <Td></Td>
                        </Tr>
                      )
                    })
                    : "" }
                  </Tbody>
                </Table>
              </Stack>
            }
          </Center>
        </>
        : ""}
    </>
  )
}

export default Towers;