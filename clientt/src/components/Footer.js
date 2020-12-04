import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useClasses = makeStyles((theme) => ({
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
  return (
    <div
      style={{
        height: '100px',
        width: '100%',
        backgroundColor: '#3f51b5',
        textAlign: 'center',
        color: '#fff',
        paddingTop: '1rem'
      }}
    >
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
  );
};

export default Footer;
