import { Link } from "react-router-dom";
import Item from "./Item";
import useNavigationStore from "../../stores/useNavigationStore";

interface Props {
  icon: string;
  text: string;
  path: string;
};

function SidebarItem({ icon, text, path }: Props) {
  const { setActive, setExpanded, expanded } = useNavigationStore();

  const clickHandler = () => {
    setActive(text)
    if (expanded && window.innerWidth < 770) setExpanded();
  };

  return (
    <Link to={path} onClick={clickHandler}>
      <Item icon={icon} text={text}></Item>
    </Link>
  );
};

export default SidebarItem;