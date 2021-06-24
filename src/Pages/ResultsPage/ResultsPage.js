import { Container } from '@material-ui/core';
import React from 'react';
import BarApp from '../../Components/BarApp';
import Item from '../../Components/Item';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    content:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap'      
    }
})
  

const ResultsPage = () =>{

    const history = useHistory();

    const back=()=>{
        history.push('/search');
    }

    const classes = useStyles();

    return(
    <div>
        <BarApp/>
            <Container>
                <div className={classes.content}>
                <Item result={[]} onBack={back}/>
                </div>
        
        </Container>
    </div>
    )
}

export default ResultsPage;