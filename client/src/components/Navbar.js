import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import GitHubIcon from '@material-ui/icons/GitHub';
import DarkModeIcon from '@material-ui/icons/Brightness4';
import LightModeIcon from '@material-ui/icons/Brightness7';
import { animateScroll as scroll, scroller } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.primary.main
  },
  title: {
    flexGrow: 1
  },

  navItem: {
    verticalAlign: 'middle',
    margin: `0 ${theme.spacing(1)}px`,
    cursor: 'pointer'
  }
}));

const NavLinks = ['Projects', 'Skills', 'Contact'];

const Navbar = ({ prefersDarkMode, handleThemeChange }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 50,
      activeClass: 'active'
    });
    setAnchorEl(null);
  };
  const ElevationScroll = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  };
  const renderGithubAndDarkModeIcons = () => (
    <Fragment>
      <a
        href="https://github.com/Rohin1212/personalPortfolioWebsite"
        target="_blank"
        rel="noreferrer"
        title="View Source"
        style={{ color: '#fff', marginRight: '0.5rem' }}
      >
        <GitHubIcon className={classes.navItem} />
      </a>
      {prefersDarkMode ? (
        <LightModeIcon className={classes.navItem} onClick={handleThemeChange} />
      ) : (
        <DarkModeIcon className={classes.navItem} onClick={handleThemeChange} />
      )}
    </Fragment>
  );
  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Rohin Chopra
            </Typography>
            <div>
              {isMobile ? (
                <Fragment>
                  {renderGithubAndDarkModeIcons()}
                  <IconButton
                    edge="start"
                    className={classes.navItem}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorReference="none"
                    PaperProps={{
                      style: {
                        right: '5px'
                      }
                    }}
                    MenuListProps={{
                      style: {
                        padding: 0
                      }
                    }}
                    open={open}
                    className={classes.menu}
                    onClose={() => setAnchorEl(null)}
                  >
                    {NavLinks.map((nl) => (
                      <MenuItem key={nl} onClick={() => handleMenuClick(nl.toLowerCase())}>
                        {nl}
                      </MenuItem>
                    ))}
                  </Menu>
                </Fragment>
              ) : (
                <Fragment>
                  {NavLinks.map((nl) => (
                    <Button
                      key={nl}
                      className={classes.navLink}
                      disableElevation
                      onClick={() => handleMenuClick(nl.toLowerCase())}
                      style={{ color: '#fff' }}
                    >
                      {nl}
                    </Button>
                  ))}
                  {renderGithubAndDarkModeIcons()}
                </Fragment>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};
export default Navbar;
