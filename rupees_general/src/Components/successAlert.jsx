import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

const SuccessAlert = () => {
  return (
    <div>
      <Alert status='success'>
    <AlertIcon />
      You are Register Successfull
  </Alert>
    </div>
  );
}

export default SuccessAlert;
