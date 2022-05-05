import React, {useState} from 'react';
import {Heading,
  InputGroup,
  Box,
  Button,
  Input,
  InputRightAddon,
  InputRightElement,
  InputLeftElement,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Icon,
  } from '@chakra-ui/core';

const BoughtBTA = () => {
  const [toBuy, setToBuy] =useState(100)
  const [addres, setAddres] =useState()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // validar que la direccion mida 56 caracteres.
    if(address.lenght !== 56){
    alert('Incorrect')
      return;
    }
  };
  
  return (
  <>
    <Heading mt= {20} textAlign = "centrer" as = "h1" seze "2xl > decentrlaice the sum  </Heading>
    <Heading textAling= "centrer" as= "h2" size= "xl" > BUY BEEL <Heading>
    <Box onSubmit= "{handleSubmit} as= "form" mx= "auto" maxwidth= {500} px= {10} > 
      <InputGruop mt={10}> 
        <NumberInput width = "100%" defaultValue= {100} > <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
           </NumberInputStepper 
         </NumberInput>
         <InputRightAddon> BEEL </InputRightAddon>
      </InputGruop>
      <InputGruop mt={3}>  
      <InputLeftElement children={<Icon nome="unlock" color='gray.300' />} />
      <Input onChange={( { target: {value}} ) =>setAddress(value)}  placeholder='your wallet address of stellar.'/>
      </InputGruop>
      <Button mt= {10} type= "submit" width= 100% variantColor = "teal"> BUY </Button>
     </Box>
  </>
  );
};
export default BoughtBTA;
