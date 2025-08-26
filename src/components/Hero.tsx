const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-extrabold mb-4">
          Fullstack Developer<br/>UI/UX Designer<br/>Software Engineer
        </h1>
        <p className="text-lg text-text-secondary mb-8">
          Crafting seamless digital experiences from concept to code.
        </p>
        <a
          href="#projects"
          className="bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-hover transition-colors"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;