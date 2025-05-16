"use client";
import Image from "next/image";
import Link from "next/link";
import { FaDribbble, FaBehance, FaLinkedin, FaGithub, FaEnvelope, FaNotion } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 md:px-6 py-20 relative overflow-hidden">
      <div className="z-10 text-center max-w-xl w-full">
        <div className="w-24 md:w-32 h-24 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white">
          <Image
            src="/LinkedIn Profile Picture.png"
            alt="Joel George Jacob"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Joel George Jacob</h1>
        <p className="text-base md:text-lg mb-4 text-gray-400">Designing thoughtful user experiences with precision and empathy.</p>
        <div className="flex flex-wrap gap-4 justify-center text-xl">
          <Link href="mailto:mail.jooeeyy@gmail.com" target="_blank"><FaEnvelope /></Link>
          <Link href="#" target="_blank"><FaDribbble /></Link>
          <Link href="#" target="_blank"><FaBehance /></Link>
          <Link href="#" target="_blank"><FaLinkedin /></Link>
          <Link href="#" target="_blank"><FaGithub /></Link>
          <Link href="#" target="_blank"><FaNotion /></Link>
        </div>
      </div>
    </section>
  );
}
