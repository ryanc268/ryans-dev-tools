import Navitem from "./NavItem";

const Navbar = () => {
  return (
    <div className="flex text-white justify-between items-center w-full text-sm text-center md:text-xl bg-zinc-800 h-24 mb-8">
      <Navitem isFirst label="Home" page="/" />
      <Navitem label="UUID Generation" page="/uuid-generator" />
      <Navitem label="Unix Time" page="/unix-time" />
      <Navitem label="Random String Generation" page="/string-generation" />
    </div>
  );
};

export default Navbar;
