import useNavigationStore from "@stores/useNavigationStore";

import LogoLetters from "@assets/imgs/pets-and-paws-letters.png";

function Sidebar() {
  const { expanded } = useNavigationStore();

  return (
    <div className="h-screen border-r-2">
      <div className="h-full flex flex-col gap-2 p-4">
        <div className="px-6">
          <img src={LogoLetters} className={`${expanded ? "w-44" : "w-0"} transition-all mx-auto`} />
        </div>

        <div className="cursor-pointer">

        </div>
      </div>
    </div>
  );
};

export default Sidebar;