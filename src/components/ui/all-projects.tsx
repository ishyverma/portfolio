import React from "react";
import ProjectCard from "./project-card";

const projects = [
  {
    title: "Excalidraw Clone",
    description:
      "A clone of Excalidraw, a whiteboard tool that allows you to create beautiful diagrams and sketches. with infinite canvas.",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN", "Canvas API"],
    codeLink: "https://github.com/ishyverma/excalidraw",
    video: "/Excalidraw.mp4",
    date: "Apr 2025",
    website: "https://excalidraw-web-virid.vercel.app/",
  },
  {
    title: "Web Based Wallet",
    description:
      "A web-based cryptocurrency wallet that supports Solana and Ethereum, allowing users to create and manage wallets securely",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN"],
    codeLink: "https://github.com/ishyverma/phantom",
    image: "/Phantom.png",
    date: "Mar 2025",
    website: "https://phantom-wallet-two.vercel.app/",
  },
  {
    title: "100xBlogs",
    description:
      "A blog website that allows users to write blogs and share them with others but in a better way. User can write blogs in markdown and preview it before publishing.",
    technologies: ["Next.js", "Prisma", "Clerk", "Tailwind CSS", "ShadCN"],
    codeLink: "https://github.com/ishyverma/medium",
    image: "/100xBlogs.png",
    date: "Mar 2025",
    website: "https://medium-theta-peach.vercel.app/",
  },
  {
    title: "Savvy.ai",
    description:
      "A second brain for your ideas, projects, and thoughts. A place to store your ideas and thoughts in a structured way. User can create notes, projects, and thoughts and store them in a structured way.",
    technologies: ["Next.js", "Prisma", "NextAuth", "Tailwind CSS", "ShadCN"],
    codeLink: "https://github.com/ishyverma/savvy.ai",
    video: "/Savvy.mp4",
    date: "Mar 2025",
    website: "https://savvy-ai.vercel.app/",
  },
  {
    title: "Git Brief - Summarizing GitHub Repos Instantly",
    description:
      "No more scrolling through endless commits & READMEs! Git Brief fetches repo insights & generates quick summaries from recent commits.",
    technologies: [
      "Next.js",
      "tRPC",
      "Prisma",
      "Tailwind CSS",
      "ShadCN",
      "Gemini",
      "Clerk",
    ],
    codeLink: "https://github.com/ishyverma/git-brief",
    video: "/GitBrief.mp4",
    date: "Mar 2025",
  },
  {
    title: "Great Frontend Clone",
    description: "A clone of Great Frontend, that was very frontend focused.",
    technologies: ["Next.js", "Tailwind CSS"],
    codeLink: "https://github.com/ishyverma/greatfrontend",
    image: "/GreatFrontend.png",
    date: "Feb 2025",
    website: "https://greatfrontend-five.vercel.app/",
  },
  {
    title: "Thinkr",
    description:
      "An AI-powered learning assistant that makes learning more engaging and interactive!",
    technologies: [
      "Next.js",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
      "ShadCN",
      "Pinecone",
      "Gemini",
      "Vercel AI SDK",
    ],
    codeLink: "https://github.com/ishyverma/thinkr",
    image: "/Thinkr.png",
    date: "Feb 2025",
    website: "https://thinkr-omega.vercel.app/",
  },
  {
    title: "Gather",
    description:
      "A website where users can create their own rooms and share them with others. User can move around the room and interact with others. User can also add their own custom objects to the room.",
    technologies: [
      "Next.js",
      "Prisma",
      "Express",
      "WebSockets",
      "Tailwind CSS",
      "Turborepo",
    ],
    codeLink: "https://github.com/ishyverma/zep",
    image: "/Gather.png",
    date: "Jan 2025",
    videoDemo: "https://www.loom.com/share/5b631caf5f434a959153ae284fb5ce3b",
  },
];

const AllProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
