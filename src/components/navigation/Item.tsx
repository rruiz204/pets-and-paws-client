import { useContext } from "react";
import { SidebarContext } from "./Sidebar";

interface Props {
  icon: string;
  text: string;
};

function Item({ icon, text }: Props) {
  const { expanded } = useContext(SidebarContext);

  return (
    <div className="p-2 text-seconday hover:bg-hover-beige rounded-md duration-200">
      <div className={`flex items-center gap-2 ${expanded ? null : "justify-center"}`}>
        <img src={icon} height={30} width={30} />
        {expanded && <p className="font-semibold">{text}</p>}
      </div>
    </div>
  );
};

export default Item;