import { useSelector } from "react-redux";

const TopBar = () => {
  const user = useSelector((state) => state.users);

  return (
    <div data-theme="light" className="p-4 flex justify-end items-center">
      <div className=" mr-1 avatar placeholder">
        <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
          <span className="text-xl text-black cursor-pointer">L</span>
        </div>
      </div>
      <div className="ml-1 avatar placeholder">
        <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
          <span className="text-xl text-black cursor-pointer">
            {
              //user ? user.firstname.charAt(0) : "U"
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
