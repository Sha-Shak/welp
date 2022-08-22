import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const user = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <aside className="h-screen sticky top-0 flex flex-col items-center p-3 justify-between shadow-lg border-r-2 border-x-gray-light">
      <div className="avatar placeholder">
        <div className="rounded-full text-neutral-content w-12 shadow-xl">
          <Link to="/dashboard" className="text-xl text-black cursor-pointer">
            <img
              src="https://res.cloudinary.com/dgn4bscl4/image/upload/v1661151765/cover-modified_g7i5cz.png"
              height="50px"
              width="50px"
              alt="home"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="my-3 placeholder">
          <div
            className={`bg-gray-xlight p-2 text-neutral-content rounded-full w-12 ${
              location.pathname.includes("/dashboard")
                ? "border-2  border-indigo shadow-lg"
                : "shadow-xl"
            }`}
          >
            {user ? (
              <Link
                to={`/dashboard`}
                className="text-xl text-black cursor-pointer"
              >
                <img
                  src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852521/home_a9omko.png"
                  height="30px"
                  width="30px"
                  alt="home"
                />
              </Link>
            ) : (
              <Link to="/login" className="text-xl text-black cursor-pointer">
                <img
                  src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852521/home_a9omko.png"
                  height="50px"
                  width="50px"
                  alt="home"
                />
              </Link>
            )}
          </div>
        </div>
        <div className="my-3 placeholder">
          <div
            className={`bg-gray-xlight p-2 text-neutral-content rounded-full w-12 ${
              location.pathname.includes("/chat")
                ? "border-2  border-indigo shadow-lg"
                : "shadow-xl"
            }`}
          >
            {user && (
              <Link to="/chat" className="text-xl text-black cursor-pointer">
                <img
                  src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852523/message_gfibrm.png"
                  height="50px"
                  width="50px"
                  alt="messaging"
                />
              </Link>
            )}
          </div>
        </div>
        <div className="my-3 placeholder">
          <div
            className={`bg-gray-xlight p-2 text-neutral-content rounded-full w-12 ${
              location.pathname.includes("/random")
                ? "border-2  border-indigo shadow-lg"
                : "shadow-xl"
            }`}
          >
            {user && (
              <Link to="/random" className=" text-black cursor-pointer">
                <img
                  src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852522/dice_ptda6e.png"
                  height="30px"
                  width="30px"
                  alt="random"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="my-3 placeholder">
        <div className="bg-gray-xlight p-2 text-main rounded-full w-12 shadow-xl">
          <span className="text-xl text-black cursor-pointer">D</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
