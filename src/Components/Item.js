import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

const Items=({result, onBack})=>{

    return(
        <Card>
            {
                result!==undefined && result!=='Hero Not Found' && result.length>0?
                result.map((item)=>{
                    return(
                        <div key={Math.random()}>
                            <CardHeader
                                title={item.name}
                            />
                            <CardContent>
                                <CardMedia
                                    style={{height:'200px'}} 
                                    image={item.images.sm}
                                    title={item.name}
                                />
                            </CardContent>
                        </div>
                    )
                })
                    
                :
                <div>
                    <CardHeader
                        title="Sin Resultados"
                    />
                    <CardContent>
                        <Typography>
                            No se encontraron resultados
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                        <Button onClick={()=>onBack()}>Regresar</Button>
                    </CardActions>
                </div>
            }
        </Card>
    )
}

export default Items;