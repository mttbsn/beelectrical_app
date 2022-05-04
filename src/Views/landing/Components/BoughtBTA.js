import React from 'react';
import {Heading,
  InputGroup,
  Box,
  Input,
  InputRightAddon,
  InputRightElement,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  } from '@chakra-ui/core';

const BoughtBTA = () => {
  return (
  <>
    <Heading mt={20} textAlign= "centrer" as="h1" seze "2xl > decentrlaice the sum  </Heading>
    <Heading textAling="centrer" as="h2" size ="xl" > BUY BEEL <Heading>
    <Box as="form" mx ="auto" maxwidth={500} px= {10} > 
      <InputGruop> 
        <NumberInput width="100%" defaultValue={100} mt={10}>
          <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
           </NumberInputStepper 
         </NumberInput>
      </InputGruop>
     </Box>
  </>
  );
};
export default BoughtBTA;
