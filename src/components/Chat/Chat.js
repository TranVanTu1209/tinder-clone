import React, { useState, useEffect } from 'react';
import './Chat.css';
import Message from '../Message/Message';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [chat, setChat] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection('chat').onSnapshot(data => {
      setChat(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => {
      unsubscribe();
    }
  }, []);
  return (
    <div className="chat">
      {
        chat.map(msg => (
          <Link to={`/message/${msg.id}`} key={msg.id}>
            <Message
              name={msg.name}
              text={msg.text}
              timestamp={msg.timestamp}
              avatar={msg.avatar}
            />
          </Link>
        ))
      }
    </div>
  )
}

export default Chat;
