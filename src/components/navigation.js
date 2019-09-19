import React from 'react';
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


/* material */
// import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

/* svg */
import { ReactComponent as Home } from '../assets/images/icons/home.svg';
import { ReactComponent as Menu } from '../assets/images/icons/menu.svg';
import { ReactComponent as Bookmark } from '../assets/images/icons/bookmark.svg';
import { ReactComponent as Setting } from '../assets/images/icons/settings.svg';
import { ReactComponent as Users } from '../assets/images/icons/users.svg';
import { ReactComponent as Direct } from '../assets/images/icons/direct.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);

  return (
    <div className='main-navigation'>
      <nav className='navigation'>
        <MenuList className='navigation--unordered-list'>
          <MenuItem className='navigation--list-item'><Menu /></MenuItem>
          <MenuItem className='navigation--list-item'><Link to="/"><Home /></Link></MenuItem>
          <MenuItem className='navigation--list-item'><Link to="/settings/"><Users /></Link></MenuItem>
          <MenuItem className='navigation--list-item'><Link to="/"><Direct /></Link></MenuItem>
          <MenuItem className='navigation--list-item'><Link to="/"><Bookmark /></Link></MenuItem>
          <MenuItem className='navigation--list-item'><Link to="/"><Setting /></Link></MenuItem>
        </MenuList>
      </nav>
    </div>
  );
}

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>

  <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer">
  Learn React
  </a>
</header>
*/