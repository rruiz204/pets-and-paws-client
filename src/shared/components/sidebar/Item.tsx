import useNavigationStore from "@stores/useNavigationStore";

interface Props {
  name: string;
  icon: string;
};

function Item({ name, icon }: Props) {
  const { active, expanded } = useNavigationStore();

  const bg = active == name ? "bg-cs-white-300" : "hover:bg-cs-white-300";

  return (
    <div className={`p-2 text-cs-blue-300 rounded-md duration-200 ${bg}`}>
      <div className={`flex items-center gap-2 ${expanded ? null : "justify-center"}`}>
        <img src={icon} height={30} width={30} />
        {expanded && <p className="font-semibold">{name}</p>}
      </div>
    </div>
  );
};

export default Item;