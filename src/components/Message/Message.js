import React from 'react';
import './Message.css';

const Message = ({ name, text, timestamp, avatar }) => {
  return (
    <div className="message">
      <div className="message__left">
        <img className="message__avatar" src={avatar} alt={name} />
        <div className="message__info">
          <h5>
            {name}
          </h5>
          <p>
            {text}
          </p>
        </div>
      </div>
      <div className="message__right">
        {timestamp}
      </div>
    </div>
  )
}

export default Message;
