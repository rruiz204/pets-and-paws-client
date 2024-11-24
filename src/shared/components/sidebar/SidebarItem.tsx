import { Link } from "react-router-dom";
import Item from "./Item";

import useNavigationStore from "@stores/useNavigationStore";

interface Props {
  icon: string;
  name: string;
  path: string;
};

function SidebarItem({ path, name, icon }: Props) {
  const { setActive, expanded, setExpanded } = useNavigationStore();
  
  const clickHandler = () => {
    setActive(name);
    if (expanded && window.innerWidth < 770) setExpanded();
  };

  return (
    <Link to={path} onClick={clickHandler}>
      <Item name={name} icon={icon}></Item>
    </Link>
  );
};

export default SidebarItem;