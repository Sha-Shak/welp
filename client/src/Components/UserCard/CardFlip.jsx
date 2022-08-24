import { useState } from "react";
import CardBack from "./CardBack";
import "./CardFlip.css";
import CardFront from "./CardFront";

const CardFlip = ({ loggedInUser, user }) => {
  const [front, setFront] = useState(true);

  const toggleCard = () => {
    setFront(!front);
  };

  const type = loggedInUser.type;
  const admin = type === "admin";
  return (
    <div className="flip-card w-64 mx-2 ">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <CardFront currentUser={loggedInUser} user={user} />
        </div>
        {admin ? (
          <div className="flip-card-back">
            <CardBack loggedInUser={loggedInUser} user={user} />
          </div>
        ) : (
          <div className="flip-card-back">
            <CardBack loggedInUser={loggedInUser} user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardFlip;
