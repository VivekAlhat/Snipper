import Logo from "../Assets/Logo.svg";
import Search from "../Assets/Search Icon.svg";
import Menu from "../Assets/Hamburger Menu.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 sm:px-48 md:px-10 2xl:px-96">
      <img src={Logo} alt="Snipper Logo" />
      <img src={Menu} alt="Hamburger Menu" className="sm:hidden" />
      <div className="hidden sm:flex items-center gap-10">
        <img src={Search} alt="Search" />
        <p>Sign in</p>
        <button className="bg-black text-white px-5 py-3 rounded-md">
          Get started <span className="text-gray-500">- it's free</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
