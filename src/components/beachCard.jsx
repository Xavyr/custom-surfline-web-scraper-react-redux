import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



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

          <Typography className="another" component="h3">
            Condition Details
          </Typography>
          <Typography color="primary" component="h3">
            {conditionDetails}
          </Typography>

          <Typography color="textSecondary" component="h3">
            Wave Height (ft)
          </Typography>
          <Typography color="primary" component="h3">
            {waveHeight}
          </Typography>

          <Typography color="textSecondary" component="h3">
            Swells
          </Typography>
          <Typography color="primary" component="h3">
            {swells}
          </Typography>

          <Typography color="textSecondary" component="h3">
            Forecast
          </Typography>
          <Typography color="primary" component="h3">
            {forecast}
          </Typography>
          <Typography color="primary" component="h3">
            {tide}
          </Typography>

        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            See Map
          </Button>
          <Button size="small" color="primary">
            ?{/*? hover over map and show info*/}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}




export default BeachCard;
