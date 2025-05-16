"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  url?: string;
  title?: string;
  description?: string;
  tools?: string[];
}

export default function ProjectCard({ url = "#", title = "Project Title", description = "Project description goes here.", tools = ["Figma", "React"] }: ProjectCardProps) {
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    if (url && url !== "#") {
      setPreview(`https://image.thum.io/get/width/600/crop/600/noanimate/${url}`);
    }
  }, [url]);

  return (
    <Link href={url} target="_blank" className="w-full sm:w-1/2 lg:w-1/3 p-4 group">
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        {preview && (
          <img src={preview} alt={title} className="w-full h-48 object-cover" />
        )}
        <div className="p-4">
          <h3 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-teal-400 transition-colors">{title}</h3>
          <p className="text-sm text-gray-400 mb-2">{description}</p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-300">
            {tools.map(tool => (
              <span key={tool} className="bg-gray-800 px-2 py-1 rounded">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
