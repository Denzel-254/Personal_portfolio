// src/components/Hero.jsx
import Button from "../common/Button";

function Hero() {
  return (
    <section className="h-screen bg-gray-900 text-white flex flex-col justify-between">
      {/* MAIN CONTENT */}
      <div className="container pt-15 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-[85%] px-6">
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
            <Button variant="primary" className="cursor-pointer ">
              My work
            </Button>

            <a href="/Techcv.pdf" download="Denzel-Cv.pdf">
              <Button variant="primary" className="cursor-pointer ">
                Download CV
              </Button>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className=" hidden md:block md:relative md:flex md:justify-center">
          <div className="absolute inset-0 bg-black/40 blur-2xl "></div>
          <img
            src="/profile1.png"
            alt="profile"
            className="w-72 md:w-96 rounded-e-full object-cover shadow-[0_0_40px_rgba(0,255,170,0.6)]  z-50"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
