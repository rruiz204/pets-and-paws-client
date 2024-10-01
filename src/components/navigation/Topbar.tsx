import { useState } from "react";
import routes, { IRoute } from "./routes";
import BarItem from "./BarItem";

import Logo from "../../assets/imgs/pets-and-paws-letters.png";
import MenuIcon from "../../assets/svgs/menu.svg";
import CloseIcon from "../../assets/svgs/close.svg";

function Topbar() {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <div className="w-screen text-seconday border-b-2 relative">
      <div className="w-full flex justify-between items-center p-2">

        <div>
          <img src={Logo} width={120} height={120} />
        </div>

        <div className="hover:bg-hover-beige duration-200 rounded-md" onClick={toggleOpen}>
          <button className="p-2"> {/* possible reusable component */}
            <img src={MenuIcon} width={30} height={30} />
          </button>
        </div>

        <div className={`absolute right-0 top-0 bg-white ${open ? "w-[270px] border-2 p-2" : "w-0"} transition-all`}>
          <div className="flex flex-col gap-3">

            <div>
              <button className="hover:bg-hover-beige duration-200 rounded-md p-2" onClick={toggleOpen}>
                <img src={CloseIcon} width={30} height={30} />
              </button>
            </div>

            {
              [...routes.main, ...routes.secondary].map((route: IRoute) => (
                <BarItem expanded={true} {...route}></BarItem>
              ))
            }
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Topbar;