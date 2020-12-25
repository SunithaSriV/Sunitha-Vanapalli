import React, { useState } from 'react';
import { makeStyles, useTheme, TextField } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
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
import TestimonialCard from '../components/TestimonialCard';

import cricMeImg from '../assets/cricme.png';
import mLabsImg from '../assets/m-labs.png';
import githubImg from '../assets/github.jpg';
import danielImg from '../assets/daniel.jpg';
import deborahImg from '../assets/deborah.jpg';
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

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  homeSection: {
    paddingBottom: '2rem',
    background:
      "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url('https://images.creativemarket.com/0.1.0/ps/345860/2417/1608/m1/fpnw/wm0/desk_flat-01-.jpg?1423485279&s=cdfc475b24746cda698158f18f55b8c5') no-repeat center center fixed",
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundPositionX: '50%',
    backgroundPositionY: '0%',
    maxHeight: '100vh',
    color: '#fff',
    opacity: 0.8,
    position: 'relative'
  },
  homeContainer: {
    textAlign: 'center',
    paddingTop: '2rem'
  },
  homeTextContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
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
  testimonialsContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: '52rem',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  contactContainer: {
    marginTop: theme.spacing(2),
    paddingBottom: '2rem',
    maxWidth: '52rem'
  },
  formInput: {
    marginBottom: theme.spacing(2)
  },
  my1: {
    margin: '1rem 0'
  },
  backgroundAttachmentScroll: {
    backgroundAttachment: 'scroll'
  },
  submitBtn: {
    width: '100%'
  },
  vh50: {
    height: '50vh !important'
  }
}));

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
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
      name: 'Github Repos Timeline Generator',
      description:
        "A web app made with React and React-Router that generates a nicely formatted timeline for a given user's Github repos.",
      imgUrl: githubImg,
      srcUrl: 'https://github.com/Rohin1212/github-timeline',
      liveUrl: 'https://hopeful-bartik-f386d3.netlify.app',
      tech: ['React', 'Material-Ui', 'Netlify']
    }
  ];

  return (
    <main className={classes.root}>
      <Section
        className={` ${classes.homeSection}  ${isMobile ? classes.backgroundAttachmentScroll : ''}`}
        id="home"
        style={{ height: isMobile ? '50vh' : '80vh' }}
      >
        <Container className={`${classes.homeContainer} `} fixed>
          <div className={classes.homeTextContainer}>
            <Typography variant="h6" component="h3">
              Hi👋, I'm
            </Typography>
            <Typography variant="h4" component="h2" style={{ fontFamily: "'Caveat', cursive" }}>
              Rohin Chopra
            </Typography>
            <Typography variant="subtitle2" component="h2" gutterBottom>
              Software Developer
            </Typography>
          </div>
        </Container>
      </Section>
      <Section id="about-me" className={classes.my1}>
        <Container style={{ maxWidth: '52rem', margin: '0px auto' }}>
          <div>
            <Typography variant="h5" component="h3" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" gutterBottom>
              I am an aspiring software developer who is currently studying computer science at
              Swinburne University of Technology.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I am in love developing cloud based web apps with React and Node.js through which I
              can provide value to businesses.
            </Typography>
            <Typography variant="body1" gutterBottom>
              If I am not coding or Netflixing I am most likely playing with my dog (Shadow) or in
              the gym or making coffee.
            </Typography>
          </div>
        </Container>
      </Section>
      <Section id="projects">
        <Container style={{ maxWidth: '52rem', margin: '0px auto' }}>
          <Typography variant="h5" gutterBottom>
            My Projects
          </Typography>
          <div className={classes.projectContainer}>
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                imgUrl={project.imgUrl}
                className={classes.projectCard}
                srcUrl={project.srcUrl}
                liveUrl={project.liveUrl}
                tech={project.tech}
              />
            ))}
          </div>
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

      <Section id="testimonials">
        <Container className={classes.testimonialsContainer}>
          <Typography variant="h5" component="h3" gutterBottom>
            What other people are saying ?
          </Typography>
          <Grid container spacing={3} direction="row" alignItems="flex-start">
            <Grid item xl={6} lg={6} md={6} xs={12}>
              <TestimonialCard
                content="Over the past few months, Rohin has continued to demonstrate incredible resolve in learning not only how to write code, but how to architect solutions that continue to meet and exceed his peers."
                name="Daniel Ferguson"
                subtitle="Software Engineer"
                imgSrc={danielImg}
              />{' '}
            </Grid>
            <Grid item xl={6} lg={6} md={6} xs={12}>
              <TestimonialCard
                content="Rohin has been fantastic to work with in building my website. He was very prompt in responding to all feedback and processing any changes. He listened to what I needed and came up with great ideas so I was able to achieve what I need from my website. I would have no hesitation in recommending him."
                name="Deborah Eddy"
                subtitle="Owner, Margembie Labradors"
                imgSrc={deborahImg}
              />
            </Grid>
          </Grid>
        </Container>
      </Section>
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
                className={classes.submitBtn}
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
    </main>
  );
};

export default HomePage;
