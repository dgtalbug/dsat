import { HStack, useNumberInput, Button, Input, FormControl, FormLabel, Center } from '@chakra-ui/react';
import React from 'react';
import { TOHContext } from '../context/context';

function DiskBox() {
  const { state: { isStart }, dispatch } = React.useContext(TOHContext)
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 3,
    min: 3,
    max: 9,
    precision: 2,
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps() as any
  const handleDiskInput = () => {
    let _disk = Math.trunc(input.value);
    dispatch({
      type: 'SET_DISK',
      payload: _disk
    });
    dispatch({
      type: 'START',
      payload: true
    })
  }
  return (
    <>
      { !isStart ?
        <>
          <Center>
            <FormControl>
              <FormLabel>Enter the Number of Disks</FormLabel>
            </FormControl>
          </Center>
          <HStack maxW="320px">
            <Button {...inc} colorScheme="blue">+</Button>
            <Input {...input} />
            <Button {...dec} colorScheme="red">-</Button>
          </HStack>

          <Center paddingTop="10">
            <FormControl>
              <Button colorScheme="green" onClick={handleDiskInput}>Go</Button>
            </FormControl>
          </Center>
        </>
        : " "}
    </>
  )
}

export default DiskBox;