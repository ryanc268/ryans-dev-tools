import Link from "next/link";

interface NavitemProps {
  isFirst?: boolean;
  label: string;
  page: string;
}

const Navitem: React.FC<NavitemProps> = ({ isFirst, label, page }) => {
  return (
    <Link
      draggable="false"
      className="hover:bg-zinc-700 h-full w-full justify-between items-center flex"
      href={page}
    >
      <div
        className={` ${!isFirst ? "h-2/3 w-0.5 bg-slate-300 opacity-70" : ""}`}
      />
      <h5>{label}</h5>
      <div />
    </Link>
  );
};

export default Navitem;
