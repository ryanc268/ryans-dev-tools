import Navitem from "./NavItem";

const Navbar = () => {
  return (
    <div className="mb-4 flex h-16 w-full items-center justify-between bg-zinc-800 text-center text-sm md:text-xl">
      <Navitem isFirst label="Home" page="/" />
      <Navitem label="UUID Generation" page="/uuid-generator" />
      <Navitem label="Unix Time" page="/unix-time" />
      <Navitem label="Random String Generation" page="/string-generation" />
    </div>
  );
};

export default Navbar;
