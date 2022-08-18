import { Link } from "react-router-dom";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  
  return (
    <div className="h-screen flex flex-col items-center p-3 justify-between shadow-lg border-r-2">
      <div className="avatar placeholder">
        <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
          <Link to="/" className="text-xl text-black cursor-pointer">
            W!
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="my-3 avatar placeholder">
          <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            {user ? (
              <Link
                to={`/${user.id}/dashboard`}
                className="text-xl text-black cursor-pointer"
              >
                H
              </Link>
            ) : (
              <Link to="/" className="text-xl text-black cursor-pointer">
                H
              </Link>
            )}
          </div>
        </div>
        <div className="my-3 avatar placeholder">
          <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <Link to="/messaging" className="text-xl text-black cursor-pointer">
              M
            </Link>
          </div>
        </div>
        <div className="my-3 avatar placeholder">
          <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <Link to="/messaging" className="text-xl text-black cursor-pointer">
              V
            </Link>
          </div>
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
          <span className="text-xl text-black cursor-pointer">D</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
