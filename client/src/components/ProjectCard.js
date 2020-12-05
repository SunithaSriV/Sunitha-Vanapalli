import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import Chip from '@material-ui/core/Chip';

const useClasses = makeStyles((theme) => ({
  card: {
    maxWidth: '50rem'
  },
  cardBody: {
    display: 'flex',
    padding: '1rem',
    alignItems: 'unset'
  },
  cardImg: {
    height: '180px',
    width: '180px',
    borderRadius: '10px'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  justifyContentCenter: {
    justifyContent: 'center'
  },
  icon: {
    verticalAlign: 'middle',
    marginLeft: '0.1rem'
  },
  pill: {
    margin: theme.spacing(0.5)
  },
  textLeft: {
    textAlign: 'left'
  },
  textCenter: {
    textAlign: 'center'
  },
  centerEl: {
    margin: '0 auto'
  }
}));

const ProjectCard = ({ name, description, imgUrl, srcUrl, liveUrl, tech, className }) => {
  const classes = useClasses();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Card raised className={`${classes.card} ${className}`}>
      <CardActionArea className={`${classes.cardBody} ${isMobile ? classes.flexColumn : ''}`}>
        <img
          className={`${classes.cardImg} ${isMobile ? classes.centerEl : ''}`}
          alt="as"
          src={imgUrl}
        />
        <CardContent
          onClick={() => window.location.assign(srcUrl)}
          className={`${isMobile ? classes.textCenter : classes.textLeft}`}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {description}
          </Typography>
          {tech.map((t) => (
            <Chip className={classes.pill} size="small" label={t} />
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions className={isMobile ? classes.justifyContentCenter : ''}>
        <Button
          component="button"
          href={liveUrl}
          target="_blank"
          rel="noopener"
          variant="contained"
          color="primary"
        >
          View Live
          <LanguageIcon className={classes.icon} />
        </Button>
        <Button
          href={srcUrl}
          target="_blank"
          rel="noopener"
          size="small"
          variant="contained"
          color="secondary"
        >
          View Source
          <GitHubIcon className={classes.icon} />
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProjectCard;
