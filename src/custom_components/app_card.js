import React from 'react';
import './css/app_card.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export default function AppCard(props) {
  const classes = useStyles();
  const item_description = "This is placeholder text for the card's content. Typically this section of content would consist of a quick description of the main content of the card.";

  return (
    <Card id="app_card" raised>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent className="card_content">
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="action_button" size="small" color="primary">
            <a className="card_link" href={props.url} target="_blank" rel="noreferrer">Go To Profile</a>
        </Button>
      </CardActions>
    </Card>
  );
}