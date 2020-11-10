import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PokeCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.pokemon.image}
          title={props.pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.pokemon.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Eigenschaften
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to="/battle" >
        <Button onClick={(e)=>props.handleSelection(props.pokemon) } size="small" color="primary">
          Select
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
