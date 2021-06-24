import { Card, TextField, CardHeader, CardContent, Button, CardActions } from '@material-ui/core';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    content:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',        
    },
    searchContent:{
        width:'400px',
        height:'200px',
        padding:10,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:'20px',

    }
})

const Search=({onSearch})=>{

    const classes = useStyles();

    const [ value, setValue ] = useState('')

    const clear=()=>{
        setValue('');
    }

    const search=()=>{
        onSearch(value);
    }

    return(
        <Card className={classes.searchContent}>
            <CardHeader title="BUSCAR HEROE"/>
            <CardContent>
                    <TextField
                        value={value}
                        onChange={ev=>{setValue(ev.target.value)}}
                        variant="outlined"
                        InputProps={{
                            endAdornment:(<MovieCreationIcon />)
                        }}
                    />
            </CardContent>
            <CardActions>
                <Button onClick={search}>Buscar</Button>
                <Button onClick={clear}>Limpiar</Button>
            </CardActions>
        </Card>
    )
}

export default Search;