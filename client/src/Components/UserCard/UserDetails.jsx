import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOtherProfile } from "../../actions/users.action.js";

const UserDetails = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfile = async (id) => {
    dispatch(getOtherProfile(id));
    navigate("/profile");
  };

  return (
    <div className="py-3">
      <div className="flex flex-row justify-between">
        <p
          onClick={(e) => handleProfile(user.id)}
          className="card-title w-full text-center text-2xl ml-3 font-bold border-b-2 border-gray-light mb-1 "
        >
          {user.firstname}
          {user.type === "admin" ? (
            <span className="bg-indigo/50 text-gray-dark text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              Admin
            </span>
          ) : null}
        </p>
      </div>
      <div className="py-2">
        <p className="mb-2 ml-5 text-xs font-bold text-indigo">Bio</p>
        <p className="mb-1 ml-5 text-xs">
          {user.bio ? user.bio : "You know, I'm kind of a private person"}
        </p>
        {
          //  <p className="mb-1 ml-5 text-xs font-bold">Location</p>
          // <p className="mb-1 ml-5 text-xs">{user.location ? user.location : 'Earth'}</p>
        }
        <p className="mb-3 mt-1 ml-5 text-xs font-bold text-indigo">
          Interests
        </p>
        <p className="mb-1 ml-5 text-xs">
          {user.interests.length
            ? user.interests.map((interest, i) => (
                <span className="mx-2 my-2 bg-indigo w-auto text-gray-xlight rounded-full py-1 px-2 mr-1">
                  {interest}
                </span>
              ))
            : //user.interests.slice(0, 3).join

              "Some stuff, you wouldn't understand"}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
