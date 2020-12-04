import React, { Fragment, useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import isemail from 'isemail';
import isEmpty from '../utils/isEmpty';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

import cricMeImg from '../assets/cricme.png';
import mLabsImg from '../assets/m-labs.png';
import toDoImg from '../assets/todo.png';
import { ReactComponent as JavaScriptLogo } from '../assets/javascript.svg';
import { ReactComponent as PythonLogo } from '../assets/python-5.svg';
import { ReactComponent as ReactLogo } from '../assets/react.svg';
import { ReactComponent as BootstrapLogo } from '../assets/bootstrap-5-1.svg';
import { ReactComponent as NodeLogo } from '../assets/nodejs.svg';
import { ReactComponent as ExpressLogo } from '../assets/express-109.svg';
import { ReactComponent as FlaskLogo } from '../assets/flask.svg';
import { ReactComponent as MongoDBLogo } from '../assets/mongodb.svg';
import { ReactComponent as MySQLLogo } from '../assets/mysql.svg';
import { ReactComponent as PostGreSQLLogo } from '../assets/postgresql.svg';
import { ReactComponent as WebpackLogo } from '../assets/webpack-icon.svg';
import { ReactComponent as AWSLogo } from '../assets/aws-2.svg';
import { ReactComponent as GitHubLogo } from '../assets/github-icon-1.svg';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  bgPrimary: { backgroundColor: '#1D2D50', color: '#FFFFFF' },
  homeContainer: { textAlign: 'center', paddingTop: '2rem' },
  homeSection: { paddingBottom: '2rem' },
  projectContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  projectCard: {
    marginTop: theme.spacing(2)
  },
  SkillLogo: {
    height: '50px',
    width: '50px',
    borderRadius: '8px',
    marginLeft: theme.spacing(2)
  },
  skillContainer: {
    marginTop: theme.spacing(2),
    maxWidth: '52rem'
  },
  contactContainer: {
    marginTop: theme.spacing(2),
    paddingBottom: '2rem',
    maxWidth: '52rem'
  },
  formInput: {
    marginBottom: theme.spacing(2)
  }
}));

const HomePage = () => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({});
  const [inputErrors, setInputErrors] = useState({});
  const [areInputsValid, setAreInputsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [apiResponse, setApiResponse] = useState('');

  const inputValidationConfig = {
    name: (el) => {
      const isEmptyMessage = isEmpty(el, 'Name');
      if (isEmptyMessage) {
        return isEmptyMessage;
      } else if (el.length < 2) {
        return 'Name has to be more than 2 chars';
      }
    },
    email: (el) => (isemail.validate(el) ? '' : 'Invalid Email'),
    message: (el) => isEmpty(el, 'Message')
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setInputErrors({ [name]: inputValidationConfig[name](value) });
    for (let key in inputErrors) {
      if (inputErrors[key] !== '') {
        setAreInputsValid(false);
        return;
      }
    }
    setAreInputsValid(true);
  };

  const handleSubmit = () => {
    setLoading(true);
    fetch('https://mighty-beyond-83175.herokuapp.com/api/v1/contact', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(inputs)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setShowSnackbar(true);
        setApiResponse({ ...data });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log('sent');
  };

  const projects = [
    {
      name: 'CricMe',
      description:
        'A website for cricket enthusiasts to satisfy their cricketing needs with cricket scores, news and player stats.',
      imgUrl: cricMeImg,
      srcUrl: 'https://github.com/Rohin1212/cric-me',
      liveUrl: 'https://rohin-cricme.netlify.app',
      tech: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'React-Router',
        'React-Bootstrap',
        'Bootstrap',
        'Netlify'
      ]
    },
    {
      name: 'Margembie Labradors',
      description:
        'A MERN full stack website for a client who is a dog breeder. This website invloved CRUD operations in the admin panel and also displaying those reseources in the frontend.',
      imgUrl: mLabsImg,
      srcUrl: 'https://github.com/Rohin1212/cric-me',
      liveUrl: 'https://www.margembielabradors.com.au',
      tech: ['React', 'React-Router', 'React-Bootstrap', 'Bootstrap', 'Netlify']
    },
    {
      name: 'To Do App',
      description:
        'A React website that allows you to achieve productivity by keeping on top of your tasks.',
      imgUrl: toDoImg,
      srcUrl: 'https://github.com/Rohin1212/toDoApp',
      liveUrl: 'https://rohin-to-do.netlify.app',
      tech: ['React', 'React-Bootstrap', 'Bootstrap', 'Netlify']
    }
  ];

  return (
    <Fragment>
      <Section className={`${classes.bgPrimary} ${classes.homeSection}`} id="home">
        <Container className={classes.homeContainer} fixed>
          <Typography variant="h5" component="h2">
            Hey i'm Rohin Chopra
          </Typography>
          <Typography variant="subtitle1" component="h2" gutterBottom>
            Software Developer
          </Typography>
          <div style={{ maxWidth: '35em', margin: '0px auto' }}>
            <Typography variant="body1" gutterBottom>
              I am an aspiring software developer who is currently studying computer science at
              Swinburne University of Technology.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I am in love with React and Node.js through which I can provide value to businesses
              with my programming skills.
            </Typography>
            <Typography variant="body1" gutterBottom>
              If I am not coding or Netflixing I am most likely in the gym or making coffee.
            </Typography>
          </div>
        </Container>
      </Section>
      <Section id="projects">
        <Container className={classes.projectContainer}>
          <Typography variant="h5">My Projects</Typography>
          {projects.map((project) => (
            <ProjectCard
              name={project.name}
              description={project.description}
              imgUrl={project.imgUrl}
              className={classes.projectCard}
              srcUrl={project.srcUrl}
              liveUrl={project.liveUrl}
              tech={project.tech}
            />
          ))}
        </Container>
      </Section>
      <br />

      <Section id="skills">
        <Container className={classes.skillContainer}>
          <Typography variant="h5" component="h2">
            Skills
          </Typography>
          <Typography variant="h6" component="h3">
            Languages and Frameworks
          </Typography>
          <div>
            <JavaScriptLogo className={classes.SkillLogo} />
            <ReactLogo className={classes.SkillLogo} />
            <NodeLogo style={{ verticalAlign: 'middle' }} className={classes.SkillLogo} />
            <ExpressLogo className={classes.SkillLogo} />{' '}
            <PythonLogo className={classes.SkillLogo} />
            <FlaskLogo className={classes.SkillLogo} />
            <BootstrapLogo className={classes.SkillLogo} />{' '}
          </div>
          <Typography variant="h6" component="h3">
            Technologies
            <div>
              <MongoDBLogo className={classes.SkillLogo} />{' '}
              <MySQLLogo className={classes.SkillLogo} />{' '}
              <PostGreSQLLogo className={classes.SkillLogo} />
              <WebpackLogo className={classes.SkillLogo} />
            </div>
          </Typography>
          <Typography variant="h6" component="h3">
            Services
          </Typography>
          <div>
            <AWSLogo className={classes.SkillLogo} /> <GitHubLogo className={classes.SkillLogo} />{' '}
          </div>
        </Container>
      </Section>
      <br />
      <Section id="contact">
        <Container className={classes.contactContainer}>
          <Typography variant="h5" component="h3">
            Contact Me
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : (
            <form>
              <TextField
                className={classes.formInput}
                fullWidth
                name="name"
                label="Name"
                onChange={handleInputChange}
                error={Boolean(inputErrors.name)}
                helperText={inputErrors.name}
              />
              <TextField
                className={classes.formInput}
                fullWidth
                name="email"
                label="Email"
                onChange={handleInputChange}
                error={Boolean(inputErrors.email)}
                helperText={inputErrors.email}
              />
              <TextField
                className={classes.formInput}
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                onChange={handleInputChange}
                error={Boolean(inputErrors.message)}
                helperText={inputErrors.message}
              />
              <Button
                disabled={!areInputsValid}
                style={{ width: '100%' }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </form>
          )}
          <Snackbar
            open={showSnackbar}
            autoHideDuration={6000}
            onClose={() => setShowSnackbar(false)}
          >
            <Alert
              onClose={() => setShowSnackbar(false)}
              severity={apiResponse.status === 'success' ? 'success' : 'error'}
            >
              {apiResponse.message}
            </Alert>
          </Snackbar>
        </Container>
      </Section>
    </Fragment>
  );
};

export default HomePage;
