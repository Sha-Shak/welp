import { useState } from "react";
import { useLocation } from "react-router";
import CardBack from "./CardBack";
import "./CardFlip.css";
import CardFront from "./CardFront";

const CardFlip = ({ loggedInUser, user }) => {
  const [front, setFront] = useState(true);
  const location = useLocation();
  const isDashboard = location.pathname.includes("/dashboard");
  const toggleCard = () => {
    setFront(!front);
  };

  const type = loggedInUser.type;
  const admin = type === "admin";
  return (
    <div
      className={(isDashboard ? "w-1/4 " : "w-full ") + " flip-card mx-2 h-48"}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <CardFront currentUser={loggedInUser} user={user} />
        </div>
        {admin ? (
          <div class="flip-card-back">
            <CardBack loggedInUser={loggedInUser} user={user} />
          </div>
        ) : (
          <div class="flip-card-back">
            <CardBack loggedInUser={loggedInUser} user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardFlip;
