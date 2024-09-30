import { Link } from "react-router-dom";
import Item from "./Item";

interface Props {
  icon: string;
  text: string;
  route: string;
};

function SidebarItem({ icon, text, route }: Props) {
  return (
    <Link to={route}>
      <Item icon={icon} text={text}></Item>
    </Link>
  );
};

export default SidebarItem;