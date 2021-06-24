import { Container } from '@material-ui/core';
import React from 'react';
import BarApp from '../../Components/BarApp';
import Search from '../../Components/Search';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    content:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',        
    }
})


const SearchPage = () =>{

    const classes = useStyles();
    const onSearch=(value)=>{
        console.log(value)
    }

    return(
    <div>
        <BarApp/>
            <Container className={classes.content}>
            <div>
                <Search onSearch={(value)=>onSearch(value)}/>
            </div>
        
        </Container>
    </div>
    )
}

export default SearchPage;