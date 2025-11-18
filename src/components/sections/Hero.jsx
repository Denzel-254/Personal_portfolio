// src/components/Hero.jsx
import Button from "../common/Button";

function Hero() {
  return (
    <section className="h-screen bg-gray-900 text-white flex flex-col justify-between">
      {/* MAIN CONTENT */}
      <div className="container pt-15 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-[85%] px-6">
        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m Denzel <br /> Web Developer & IT Enthusiast
          </h1>

          <p className="text-gray-300 text-lg max-w-xl">
            I bring ideas to life throug clean code, smart UI, and smooth user
            experiences. Let’s build something amazing together.
          </p>

          <div className="flex flex-wrap gap-4 pt-5">
            <Button variant="primary">My work</Button>
            <Button variant="primary">Download CV</Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src="/profile1.png"
            alt="profile"
            className="w-72 md:w-96 rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
