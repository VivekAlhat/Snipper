import Snippet from "../Assets/Snippet Image.png";

const Hero = () => {
  return (
    <section className="px-5 pt-5 flex flex-col items-center gap-5 sm:px-48 md:px-10 2xl:px-96">
      <h1 className="font-bold text-5xl leading-snug text-center">
        Gorgeous Code Snippets
      </h1>
      <p className="text-center text-xl">
        With Snipper, create fully customizable code snippets in a matter of
        seconds right from your browser.
      </p>
      <button className="bg-black text-white py-3 w-full rounded-md sm:w-52 2xl:w-56">
        Get started <span className="text-gray-500">- it's free</span>
      </button>
      <p>No credit card required.</p>
      <img
        src={Snippet}
        alt="Hero Background"
        className="sm:h-96 sm:object-contain md:h-full"
      />
    </section>
  );
};

export default Hero;
