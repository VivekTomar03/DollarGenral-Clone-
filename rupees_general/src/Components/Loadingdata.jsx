import { Backdrop , CircularProgress} from '@mui/material';

import React from 'react';

const Loadingdata = () => {
  return (
    <div>
      <Backdrop  open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Loadingdata;
