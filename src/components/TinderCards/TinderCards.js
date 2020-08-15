import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import { db } from '../../firebase';

const TinderCards = () => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection('person')
      .onSnapshot(data => {
        setPerson(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
    return () => {
      // clean up function
      unsubscribe();
    }
  }, []);
  return (
    <div className="tinderCards__container">
      {
        person.map(p => (
          <TinderCard className="swipe"
            key={p.id}
            preventSwipe={['up', 'down']}>
            <div
              className="card"
              style={{
                backgroundImage: `url('${p.url}')`,
              }}>
              <h1 className="card__name">
                {p.name}
              </h1>
            </div>
          </TinderCard>
        ))
      }
    </div>
  );
}
export default TinderCards;
