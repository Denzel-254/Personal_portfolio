import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBolt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";

const techStack = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-4xl text-orange-500" />,
    level: 95,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-4xl text-blue-500" />,
    level: 90,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-4xl text-yellow-400" />,
    level: 85,
  },
  {
    name: "React",
    icon: <FaReact className="text-4xl text-cyan-400" />,
    level: 80,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-teal-400" />,
    level: 85,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl text-green-500" />,
    level: 75,
  },
  {
    name: "Express.js",
    icon: <FaNodeJs className="text-4xl text-green-600" />,
    level: 70,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl text-green-500" />,
    level: 80,
  },
  {
    name: "FastAPI",
    icon: <FaBolt className="text-4xl text-lime-400" />,
    level: 70,
  },
];

function TechStack() {
  return (
    <section className="py-5 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold  text-green-500 text-center mb-12">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="
                backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 
                shadow-lg transition transform duration-300 
                hover:-translate-y-2 hover:shadow-indigo-500/30 hover:bg-white/20
              "
            >
              {/* ICON + NAME */}
              <div className="flex items-center gap-4 mb-4">
                {tech.icon}
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>

              <p className="text-right mt-2 text-sm text-gray-300">
                {tech.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
