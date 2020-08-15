import React from 'react';
import './ActionsButton.css';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReplayIcon from '@material-ui/icons/Replay';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const ActionsButton = () => {
  return (
    <div className="actionsButton">
      <IconButton className="replay">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default ActionsButton;
