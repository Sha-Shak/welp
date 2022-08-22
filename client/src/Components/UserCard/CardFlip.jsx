import { useState } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

const CardFlip = ({ loggedInUser, user }) => {
  const [front, setFront] = useState(true);

  const toggleCard = () => {
    setFront(!front);
  }
  
  const type = loggedInUser.type;
  const admin = type === 'admin';
  console.log(front);
  return (
    <button onClick={toggleCard}>
      {!admin ? 
        <CardFront currentUser={loggedInUser} user={user}/>
        : 
        (!front ? <CardBack loggedInUser={loggedInUser} user={user}/> :
        <CardFront currentUser={loggedInUser} user={user}/>)
      }
    </button>
  )
}

export default CardFlip