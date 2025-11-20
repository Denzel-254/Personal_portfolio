// src/components/ContactSection.jsx
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_28oprhi", // your SERVICE ID
        "template_o3ha69t", // your TEMPLATE ID
        e.target,
        "X_QUbI0jlnnSIrQVj" // your PUBLIC KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message. Try again.");
        }
      );
  }

  return (
    <section className="bg-gray-900 text-green-500 py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* TITLE */}
        <h2 className="text-5xl font-bold mb-16 text-center">Get in Touch</h2>

        {/* MAIN GRID */}
        <div className="border border-green-500 rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 relative">
          {/* LEFT: FORM */}
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full border-b border-green-500 bg-transparent focus:outline-none py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">E-mail</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border-b border-green-500 bg-transparent focus:outline-none py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full border-b border-green-500 bg-transparent focus:outline-none py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="3"
                name="message"
                required
                className="w-full border-b border-green-500 bg-transparent focus:outline-none py-2 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-3 w-full cursor-pointer px-8 rounded-full hover:bg-green-700 transition duration800"
            >
              Send Message
            </button>
          </form>

          {/* RIGHT: INFO */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-200 mb-6">ochiengden335@gmail.com</p>

              <h3 className="text-lg font-semibold mb-1">Github</h3>
              <p className="text-gray-200 mb-6">github.com/Denzel-254</p>

              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-gray-200 mb-6">+254 72 547 8686</p>

              <h3 className="text-lg font-semibold mb-1">Based in</h3>
              <p className="text-gray-200">Kenya, Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
