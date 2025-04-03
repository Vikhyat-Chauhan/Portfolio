import { Download, Mail, Github } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Your Name</h1>
          <p className="text-lg text-gray-600">Full-Stack Developer | Open Source Enthusiast</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-black">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" className="text-gray-600 hover:text-black">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </header>

        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            I'm a passionate software developer skilled in building web apps with modern frameworks like React, Node.js, and Django. I love solving complex problems and learning new technologies.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Project One:</strong> A web-based task manager using React and Firebase.</li>
            <li><strong>Project Two:</strong> Portfolio generator CLI in Python with Markdown input.</li>
            <li><strong>Project Three:</strong> Real-time chat app built using Socket.IO and Node.js.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <p className="text-gray-700 mb-4">Download my resume in PDF format:</p>
          <a href="/resume.pdf" download className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 rounded border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 rounded border"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 rounded border"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}