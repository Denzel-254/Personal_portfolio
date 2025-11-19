import Button from "../common/Button";

function About() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="ml-12">
          <img
            src="/profile1.png"
            alt="profile"
            className="w-72 h-auto md:w-96 rounded-full object-cover shadow-[0_0_40px_rgba(0,255,170,0.6)]  z-50"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold text-green-500 mb-4">About Me</h1>
          <p className="text-lg text-gray-300">
            Hi, I’m Denzel Ochieng, a web developer and IT enthusiast passionate
            about building clean, fast, and user-focused digital experiences. I
            enjoy turning ideas into real products whether it’s a smooth user
            interface, a responsive layout, or a full-stack system that solves
            real problems.
          </p>{" "}
          <br />
          <p className="text-lg text-gray-300">
            I’m constantly learning, improving, and pushing myself to write
            better code every day. When I’m not coding, I explore UI design,
            automation, and new technologies that make development smarter and
            faster.
          </p>{" "}
          <br />
          <Button className="cursor-pointer mt-4"> Contact Me</Button>{" "}
        </div>
      </div>
    </section>
  );
}

export default About;
