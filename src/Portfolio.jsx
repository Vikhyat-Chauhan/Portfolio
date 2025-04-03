import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const projects = [
    {
      title: "Image Classification with CNN",
      description: "Built a convolutional neural network to classify images in the CIFAR-10 dataset.",
      link: "https://github.com/yourusername/cnn-image-classifier",
    },
    {
      title: "Chatbot with Transformers",
      description: "Created a chatbot using Hugging Face transformers and fine-tuned it on custom data.",
      link: "https://github.com/yourusername/transformer-chatbot",
    },
    {
      title: "DQN for Atari Games",
      description: "Implemented Deep Q-Learning to play Atari Breakout from pixels.",
      link: "https://github.com/yourusername/dqn-atari",
    },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-lg mt-2 text-gray-600">Deep Learning & AI Enthusiast | ML Researcher</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button>View Project</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Python, PyTorch, TensorFlow</li>
          <li>Deep Learning, NLP, Computer Vision</li>
          <li>Reinforcement Learning, Transformers</li>
          <li>Docker, Git, Jupyter Notebooks</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 mb-2">Feel free to reach out via email:</p>
        <a
          href="mailto:your.email@example.com"
          className="text-blue-600 hover:underline"
        >
          your.email@example.com
        </a>
      </section>
    </div>
  );
}
