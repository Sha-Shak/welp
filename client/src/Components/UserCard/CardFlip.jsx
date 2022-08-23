import { useState } from 'react';
import './CardFlip.css';
import CardFront from './CardFront';
import CardBack from './CardBack';
import CardBackBasic from './CardBackBasic';

const CardFlip = ({ loggedInUser, user }) => {
  const [front, setFront] = useState(true);

  const toggleCard = () => {
    setFront(!front);
  }
  
  const type = loggedInUser.type;
  const admin = type === 'admin';
  console.log(front);
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <CardFront currentUser={loggedInUser} user={user}/>
        </div>
        {admin ?
          <div class="flip-card-back">
            <CardBack loggedInUser={loggedInUser} user={user}/>
          </div> :
          <div class="flip-card-back">
            <CardBackBasic loggedInUser={loggedInUser} user={user}/>
          </div>
        }
      </div>
    </div> 
    
  )
}

export default CardFlip
