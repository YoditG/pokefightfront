import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PokeProperties from './PokeProperties';



const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 140,
  },
});

export default function BattleCards(props) {
  const classes = useStyles();
  // const handleSelection = props.handleSelection
  // const handleEnemy = props.handleEnemy

  return (
    <Card className={classes.root}>
      <CardActionArea>
    
        <CardMedia
          className={classes.media}
          image={props.pokemon.image}
          title={props.pokemon.name.english}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.pokemon.name.english}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Properties
            <PokeProperties pokemon={props.pokemon} opponent={props.opponent}/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


//  <PokeProperties pokemon={props.pokemon} opponent={props.opponent}/>