import useNavigationStore from "../../stores/useNavigationStore";

interface Props {
  icon: string;
  text: string;
  expanded: boolean;
};

function Item({ icon, text, expanded }: Props) {
  const { active, setActive } = useNavigationStore();
  const bg = active == text ? "bg-hover-beige" : "hover:bg-hover-beige";

  return (
    <div className={`p-2 text-seconday rounded-md duration-200 ${bg}`} onClick={() => setActive(text)}>
      <div className={`flex items-center gap-2 ${expanded ? null : "justify-center"}`}>
        <img src={icon} height={30} width={30} />
        {expanded && <p className="font-semibold">{text}</p>}
      </div>
    </div>
  );
};

export default Item;