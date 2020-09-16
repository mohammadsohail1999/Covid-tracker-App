import './Card.css';


import React from 'react';
import {Card, CardContent,Typography,Grid} from '@material-ui/core'
import CountUp from 'react-countup'

const Cards = ({data})=>{

    console.log(data);
if(!data.confirmed){
    return 'loading...'
}
return (<div className="container">

<Grid container spacing={3} justify="center">

<Grid item component={Card} xs={12} md={3} className="card infected">
<CardContent>

<Typography color="textSecondary" gutterBottom>


Infected


</Typography>
<Typography variant="h5">
    <CountUp start={0}
    end={data.confirmed.value}
    duration={2.5}
    seperator=','
    />
    
</Typography>
<Typography colr="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
<Typography variant="body2">number of active cases of COVID-19</Typography>
</CardContent>





</Grid>
<Grid item component={Card}  xs={12} md={3} className="card recovered">
<CardContent>

<Typography color="textSecondary" gutterBottom>


Recovered


</Typography>
<Typography variant="h5">
<CountUp start={0}
    end={data.recovered.value}
    duration={2.5}
    seperator=','
    />
</Typography>
<Typography colr="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
<Typography variant="body2">number of recoveries from COVID-19</Typography>
</CardContent>





</Grid>
<Grid item component={Card}  xs={12} md={3} className="card deaths">
<CardContent>

<Typography color="textSecondary" gutterBottom>


Deaths


</Typography>
<Typography variant="h5">
<CountUp start={0}
    end={data.deaths.value}
    duration={2.5}
    seperator=','
    />
</Typography>
<Typography colr="textSecondary">{new Date(data.lastUpdate).toDateString() }</Typography>
<Typography variant="body2">number of deaths caused by COVID-19</Typography>
</CardContent>





</Grid>







</Grid>





</div>)





}



export default Cards;