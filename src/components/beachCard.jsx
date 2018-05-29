import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const BeachCard = ( { location, conditionDetails, day, forecast, swells, tide, waveHeight } ) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom color="primary" variant="headline" component="h1">
            {location + " beach"}
          </Typography>

          <Typography color="secondary" component="h3">
            {day}
          </Typography>
          <br/>

          <Typography className="title" component="h3">
            Condition Details
          </Typography>
          <Typography color="primary" component="h3">
            {conditionDetails}
          </Typography>
          <br/>

          <Typography className="title" color="textSecondary" component="h3">
            Wave Height (ft)
          </Typography>
          <Typography color="primary" component="h3">
            {waveHeight}
          </Typography>
          <br/>

          <Typography className="title" color="textSecondary" component="h3">
            Swells
          </Typography>
          <Typography color="primary" component="h3">
            {swells}
          </Typography>
          <br/>

          <Typography className="title" color="textSecondary" component="h3">
            Forecast
          </Typography>
          <Typography color="primary" component="h3">
            {forecast}
          </Typography>
          <br/>

          <Typography className="title" color="primary" component="h3">
            {tide}
          </Typography>

        </CardContent>
        <CardActions>
          {/*<Button size="small" color="primary">*/}
            {/*Send As Text*/}
          {/*</Button>*/}
        </CardActions>
      </Card>
      <br/><br/>
    </div>
  )
}




export default BeachCard;
