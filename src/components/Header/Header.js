import React from 'react';
import logo from '../../assets/tinder-logo.png';
import './Header.css';
import ForumIcon from '@material-ui/icons/Forum';
import FaceIcon from '@material-ui/icons/Face';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = ({ backButton }) => {
  return (
    <div className="header">
      {
        backButton ? <Link to={backButton} >
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </Link> :
          <IconButton>
            <FaceIcon />
          </IconButton>
      }
      <Link to="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </Link>
      <Link to="/chat" >
        <IconButton>
          <ForumIcon />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
