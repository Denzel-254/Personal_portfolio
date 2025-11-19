// src/components/Services.jsx

import {
  LuCode,
  LuMonitorSmartphone,
  LuTerminal,
  LuBrush,
} from "react-icons/lu";
import { FaServer, FaTools } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <LuCode className="text-4xl text-green-500" />,
    desc: "Modern, responsive websites built with clean code and best practices.",
  },
  {
    title: "Frontend Development",
    icon: <LuMonitorSmartphone className="text-4xl text-green-500" />,
    desc: "Beautiful user interfaces using React, Tailwind & modern design systems.",
  },
  {
    title: "Backend & API Development",
    icon: <FaServer className="text-4xl text-green-500" />,
    desc: "Secure and scalable backend APIs using Node.js, Express & MongoDB.",
  },
  {
    title: "IT Support & Troubleshooting",
    icon: <FaTools className="text-4xl text-green-500" />,
    desc: "General IT support, system setup, and technical troubleshooting.",
  },
  {
    title: "Automation & Scripting",
    icon: <LuTerminal className="text-4xl text-green-500" />,
    desc: "Smart automation using Python, Bash, cron jobs & task schedulers.",
  },
  {
    title: "UI / UX Design Support",
    icon: <LuBrush className="text-4xl text-green-500" />,
    desc: "Support with layouts, color palettes, wireframes, and clean, user-friendly design.",
  },
];

function Services() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-500 text-center mb-12">
          My Services
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 
                shadow-xl transition transform duration-300
                hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/30
                hover:bg-white/20
              "
            >
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
