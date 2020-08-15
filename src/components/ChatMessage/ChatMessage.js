import React, { useEffect, useState } from 'react';
import './ChatMessage.css';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';

const ChatMessage = () => {
  const id = useParams().id;
  const [message, setMessage] = useState([]);
  useEffect(() => {
    db.doc(`/chat/${id}`).get()
      .then(doc => {
        setMessage(doc.data())
      }).catch(err => console.log(err));

  }, [id]);

  return (
    <div className="chatMessage">
      {message && <React.Fragment>
        <h4>
          You matched with {message.name} {message.timestamp}
        </h4>
        <div className="msg">
          <img src={message.avatar} alt={message.name} />
          <p>
            {message.text}
          </p>
        </div>
        <div className="msg">
          <img src={message.avatar} alt={message.name} />
          <p>
            {message.text}
          </p>
        </div>
      </React.Fragment>
      }
      <div className="chatMessage__response">
        <p>
          Wow. That's great to see you {message && message.name}
        </p>
      </div>
    </div>
  )
}

export default ChatMessage;
