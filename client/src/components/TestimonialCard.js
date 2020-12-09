import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '2rem',
    maxWidth: '30rem'
  },
  lead: {
    fontSize: '1.25rem',
    fontWeight: '300'
  },
  testimonialImg: {}
}));
const TestimonialCard = ({ content, name, subtitle, imgSrc }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography className={classes.lead} variant="body2" gutterBottom>
        <FormatQuoteIcon />
        {content}
      </Typography>
      <Typography variant="button" component="p">
        {name}
      </Typography>
      <Typography variant="caption">{subtitle}</Typography>
      <Avatar className={classes.testimonialImg} src={imgSrc} alt={name} />
    </Card>
  );
};

export default TestimonialCard;
