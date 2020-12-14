import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Divider } from '@material-ui/core';

const useClasses = makeStyles((theme) => ({
  root: {
    height: '100px',
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    paddingTop: '1rem',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.primary.main
  },
  footerIcon: {
    height: '30px',
    width: '30px',
    color: '#fff',
    marginRight: '0.5rem'
  },
  linkedInIcon: {
    '&:hover': {
      color: '#0077B5'
    }
  },
  gitHubIcon: {
    '&:hover': {
      color: '#040204'
    }
  }
}));

const Footer = () => {
  const classes = useClasses();
  const theme = useTheme();
  return (
    <Fragment>
      <Divider />
      <div className={classes.root}>
        <p>
          <a href="https://github.com/Rohin1212" target="_blank" rel="noreferrer">
            <GitHubIcon className={`${classes.footerIcon} ${classes.gitHubIcon}`} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohin-chopra-2b38791a0/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={`${classes.footerIcon} ${classes.linkedInIcon}`} />
          </a>
        </p>
        <p>
          © 2020 <span style={{ fontWeight: 'bold' }}>Rohin Chopra.</span> All rights reserved
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
