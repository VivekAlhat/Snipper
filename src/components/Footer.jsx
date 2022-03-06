import Logo from "../Assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-between gap-3 p-5 sm:flex-row sm:items-start sm:px-48 md:px-10 2xl:px-96 sm:gap-5 bg-white">
      <img src={Logo} alt="Snipper Logo" />
      <div className="flex items-center gap-3">
        <p className="text-gray-900 w-fit cursor-pointer">
          Terms and Conditions
        </p>
        <p className="text-gray-900 w-fit cursor-pointer">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
