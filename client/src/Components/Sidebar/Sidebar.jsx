import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const location = useLocation();

  return (
    <div className="h-screen sticky flex flex-col items-center p-3 justify-between shadow-lg border-r-2 border-gray-xlight">
      <div className="avatar placeholder">
        <div className="bg-gray-light text-neutral-content w-14 shadow-xl">
          <Link to="/" className="text-xl text-black cursor-pointer">
            <img
              src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
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
                ? "bg-indigo"
                : "shadow-xl"
            }`}
          >
            {user ? (
              <Link
                to={`/${user.id}/dashboard`}
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
              <Link to="/" className="text-xl text-black cursor-pointer">
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
                ? "bg-indigo text-white"
                : "shadow-xl"
            }`}
          >
            <Link to="/chat" className="text-xl text-black cursor-pointer">
              <img
                src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852523/message_gfibrm.png"
                height="50px"
                width="50px"
                alt="messaging"
              />
            </Link>
          </div>
        </div>
        <div className="my-3 placeholder">
          <div
            className={`bg-gray-xlight p-2 text-neutral-content rounded-full w-12 ${
              location.pathname.includes("/random")
                ? "shadow-black shadow"
                : "shadow-xl"
            }`}
          >
            <Link to="/random" className=" text-black cursor-pointer">
              <img
                src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660852522/dice_ptda6e.png"
                height="30px"
                width="30px"
                alt="random"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="my-3 placeholder">
        <div className="bg-gray-xlight p-2 text-neutral-content rounded-full w-12 shadow-xl">
          <span className="text-xl text-black cursor-pointer">D</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
