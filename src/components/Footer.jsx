import Logo from "../Assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-5 sm:flex-col sm:items-start sm:px-48 md:px-10 2xl:px-96 sm:gap-3 bg-white">
      <img src={Logo} alt="Snipper Logo" />
      <div className="flex items-center ml-5 gap-3 sm:gap-5 sm:ml-0">
        <p className="text-gray-900 w-fit cursor-pointer">
          Terms and Conditions
        </p>
        <p className="text-gray-900 w-fit cursor-pointer">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
