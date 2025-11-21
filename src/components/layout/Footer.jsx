// src/components/Footer.jsx
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  // FIXED: store components, NOT JSX
  const socialIcons = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=61579494996122",
    },
    { icon: FaInstagram, link: "https://instagram.com/denzeldeveloper" },
    { icon: FaTwitter, link: "https://twitter.com/yourprofile" },
    { icon: FaEnvelope, link: "mailto:ochiengden335@gmail.com" },
    { icon: FaYoutube, link: "https://youtube.com/yourchannel" },
    { icon: FaGithub, link: "https://github.com/Denzel-254" },
  ];

  return (
    <footer className="bg-gray-900 text-green-500 py-4">
      <div className="px-10">
        <hr />
      </div>

      <div className=" w-full  px-6 text-center mt-10 flex flex-col items-center">
        {/* BRAND / TITLE */}
        <h2 className="text-3xl font-bold mb-6">Web Developer</h2>

        {/* NAV LINKS */}
        <ul className="flex flex-wrap gap-6 text-sm mb-8 opacity-80">
          <li className="cursor-pointer hover:opacity-100">Home</li>
          <li className="cursor-pointer hover:opacity-100">About</li>
          <li className="cursor-pointer hover:opacity-100">Services</li>
          <li className="cursor-pointer hover:opacity-100">Skills</li>
          <li className="cursor-pointer hover:opacity-100">Projects</li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mb-8">
          {socialIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Icon className="text-xl cursor-pointer" />
              </a>
            );
          })}
        </div>

        {/* LANGUAGE BUTTON */}
        <button className="border border-white rounded-full px-5 py-2 text-sm mb-10 hover:bg-green-500 hover:text-black transition">
          Get In Touch
        </button>

        {/* COPYRIGHT */}
        <p className="text-sm opacity-60">Copyright © Denzel.</p>
      </div>
    </footer>
  );
}

export default Footer;
