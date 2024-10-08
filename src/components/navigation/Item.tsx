import useNavigationStore from "../../stores/useNavigationStore";

interface Props {
  icon: string;
  text: string;
};

function Item({ icon, text }: Props) {
  const { active, expanded } = useNavigationStore();
  
  const bg = active == text ? "bg-hover-beige" : "hover:bg-hover-beige";

  return (
    <div className={`p-2 text-seconday rounded-md duration-200 ${bg}`}>
      <div className={`flex items-center gap-2 ${expanded ? null : "justify-center"}`}>
        <img src={icon} height={30} width={30} />
        {expanded && <p className="font-semibold">{text}</p>}
      </div>
    </div>
  );
};

export default Item;