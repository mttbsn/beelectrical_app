import React, {useState} from 'react';
import api from '../api';
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
  useToast;
  } from '@chakra-ui/core';

const BoughtBTA = () => {
  const toast = userToast();
  const [toBuy, setToBuy] =useState(100)
  const [addres, setAddres] =useState()
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // validar que la direccion mida 56 caracteres.
    if(address.lenght !== 56){
      toast({
          title: 'Account invalid.',
          description: "Control your address.",
          status: 'warning',
          duration: 9000,
          isClosable: true,
        });
      return;
    }
    
    try {
      await api.loadAccount(address
    }catch (err){
      toast({
          title: 'Account invalid.',
          description: "This address is not active.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
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
          <NumberInputField 
             onChange={( { target: {value}} ) => setToBuy (value)}  />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
           </NumberInputStepper >
         </NumberInput>
         <InputRightAddon> BEEL </InputRightAddon>
      </InputGruop>
      <InputGruop mt={3}>  
      <InputLeftElement children={<Icon nome="unlock" color='gray.300' />} />
      <Input 
         onChange={( { target: {value}} ) =>setAddress(value)}  placeholder='your wallet address of stellar.'/>
      </InputGruop>
      <Button mt= {10} type= "submit" width= 100% variantColor = "teal"> BUY </Button>
     </Box>
  </>
  );
};
export default BoughtBTA;
