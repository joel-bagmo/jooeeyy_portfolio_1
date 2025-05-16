"use client";
import ProjectCard from "./ProjectCard";

export function ProjectSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-black text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {[1, 2, 3].map((_, idx) => (
          <ProjectCard key={idx} />
        ))}
        {[1, 2, 3].map((_, idx) => (
          <ProjectCard key={idx + 3} url="#" title="Behance Project" description="UI/UX case study on Behance." tools={["Figma"]} />
        ))}
      </div>
    </section>
  );
}
