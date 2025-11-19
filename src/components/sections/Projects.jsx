import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Artex Event System",
      desc: "A platform for managing events, bookings, and user participation.",
      img: "/lsm.jpeg",
      link: "https://artex-solutions.onrender.com/",
      tech: ["React", "Node", "MongoDB"],
    },
    {
      title: "Andlly Fashion Span Store",
      desc: "A modern fashion e-commerce interface with responsive product browsing.",
      img: "/lsm.jpeg",
      link: "https://artex-solutions.onrender.com/",
      tech: ["Vite", "Tailwind", "Redux"],
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio showcasing my skills, services, and projects.",
      img: "/lsm.jpeg",
      link: "https://artex-solutions.onrender.com/",
      tech: ["React", "Tailwind"],
    },
    {
      title: "QR Code Generator",
      desc: "A generator system for QR Codes with both frontend and backend support.",
      img: "/lsm.jpeg",
      link: "https://artex-solutions.onrender.com/",
      tech: ["React", "Express"],
    },
  ];

  return (
    <section id="projects" className="py-4 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/10 p-4 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/20 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Live Demo Button */}
              <a
                href={project.link}
                target="_blank"
                className="block text-center w-full py-2 bg-green-500 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Live Demo <FaExternalLinkAlt className="inline ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
