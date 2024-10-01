import { Link } from "react-router-dom";
import Item from "./Item";

interface Props {
  icon: string;
  text: string;
  path: string;
  expanded: boolean;
};

function BarItem({ icon, text, path, expanded }: Props) {
  return (
    <Link to={path}>
      <Item icon={icon} text={text} expanded={expanded}></Item>
    </Link>
  );
};

export default BarItem;