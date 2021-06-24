import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import {
  useHistory
} from "react-router-dom";

const BarApp=()=> {
  const history = useHistory();
  return (
      <AppBar position="static">
          <Toolbar>
            <IconButton onClick={()=>{history.push('/search')}}>
              Buscar
            </IconButton>
            <IconButton onClick={()=>{history.push('/results')}}>
              Resultados
            </IconButton>
          </Toolbar>
        </AppBar>   
  );
}

export default BarApp;
