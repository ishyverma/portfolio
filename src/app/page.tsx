import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import AllBadges from "@/components/ui/all-badges";
import AllProjects from "@/components/ui/all-projects";
import AllEducation from "@/components/ui/all-education";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 font-bricolage">
      <Spotlight />
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 md:justify-between">
        <div className="md:flex-1">
          <h1 className="text-4xl font-bold text-center md:text-left">
            Hola! I'm{" "}
            <b className="hover:underline transition-all duration-100">
              Shyam Verma
            </b>{" "}
            👋
          </h1>
          <p className="mt-6 text-muted-foreground max-w-md text-md font-medium text-center md:text-left">
            Seasoned Fullstack Engineer with 1 year of experience in building
            web apps. I'm confident in taking projects from scratch to
            production. Skilled in both frontend and backend, with a small knack
            for deployment.
          </p>
        </div>
        <div className="relative flex-none">
          <div className="rounded-full h-[180px] w-[180px] overflow-hidden border-2 border-accent">
            <Image
              className="object-cover w-full h-full"
              src="/Portfolio.png"
              alt="Shyam Verma"
              width={150}
              height={150}
              priority
            />
          </div>
        </div>
      </div>
      <div className="py-10">
        <p className="text-2xl font-semibold">Skills</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <AllBadges />
        </div>
      </div>
      <div className="py-10 mx-auto flex flex-col items-center gap-2">
        <Button size="sm" variant="secondary">
          My Projects
        </Button>
        <h1 className="text-5xl font-semibold">Check out my latest work</h1>
        <h3 className="text-muted-foreground text-center text-lg font-medium">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </h3>
        <AllProjects />
      </div>
      <div className="py-10">
        <p className="text-2xl font-semibold">Education</p>
        <AllEducation />
      </div>
      <div className="py-2 flex flex-col items-center gap-2">
        <Button size="sm" variant="secondary">
          Contact
        </Button>
        <h1 className="text-5xl font-semibold mt-1">Get in Touch</h1>
        <p className="text-muted-foreground text-center text-lg font-medium max-w-xl mx-auto">
          Want to chat? Just shoot me a dm{" "}
          <Link
            className="text-blue-500 hover:underline"
            href="https://x.com/ishyverma"
            target="_blank"
          >
            with a direct question on x
          </Link>{" "}
          and I'll respond whenever I can.
        </p>
      </div>
    </div>
  );
}
