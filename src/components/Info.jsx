import Customizable from "../Assets/Customizable Image.png";

const Info = () => {
  return (
    <section className="bg-white p-5 h-full flex flex-col gap-5 sm:flex-row-reverse sm:justify-between sm:px-48 md:px-10 2xl:px-96 2xl:py-16 md:py-16">
      <img
        src={Customizable}
        alt="Snipper Image"
        className="2xl:h-full sm:h-full sm:w-1/2 object-contain"
      />
      <div className="flex flex-col gap-5 sm:w-1/2 sm:items-start">
        <h1 className="font-black text-4xl leading-snug">
          A fully customizable code snippet editor
        </h1>
        <p>
          Fully customize the color scheme of your code snipper, or use our own
          premade color schemes. Export your code snippets in JPG, PDF, PNG, or
          any of the other 10+ common extensions.
        </p>
        <button className="bg-black text-white px-5 py-3 rounded-md w-fit">
          Get started <span className="text-gray-500">- it's free</span>
        </button>
      </div>
    </section>
  );
};

export default Info;
