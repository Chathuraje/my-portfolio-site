"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/20 to-background dark:from-secondary/10 dark:to-background overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-70 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full filter blur-2xl opacity-60 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-16 relative z-10">

        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Chathura J Ekanayake
          </motion.h1>

          {/* Stat Chips */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            {[
              { label: "10+ Years Experience", color: "from-green-400 to-emerald-500" },
              { label: "50+ Projects", color: "from-blue-500 to-sky-400" },
              { label: "Full-Stack Dev", color: "from-purple-500 to-pink-500" },
              { label: "Automation & AI", color: "from-yellow-500 to-orange-400" },
            ].map((chip, index) => (
              <motion.div
                key={index}
                className={`px-4 py-1.5 rounded-full text-sm font-medium text-white bg-gradient-to-r ${chip.color} shadow-md hover:scale-110 transition-transform`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {chip.label}
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            className="text-xl md:text-3xl font-semibold text-primary dark:text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Software Engineer | Lead Web Developer
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Passionate about crafting seamless digital experiences. <br />
            Based in Kandy, Sri Lanka.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button size="lg" asChild className="group">
              <a href="/cv.pdf" download="Chathura_Ekanayake_CV.pdf">
                Download CV{" "}
                <Download className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button variant="secondary" size="lg" asChild className="group">
              <Link href="#projects">
                View Projects{" "}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild className="group">
              <a href="https://github.com/chathuraje" target="_blank" rel="noopener noreferrer">
                GitHub{" "}
                <Github className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-full max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <Image
              src="/profile.jpeg"
              alt="Chathura J Ekanayake Profile Picture"
              width={500}
              height={500}
              className="rounded-full object-cover border-4 border-accent shadow-2xl hover:scale-105 transition-transform"
              priority
            />
          </div>

          {/* Floating Badge */}
          <motion.div
            className="absolute -top-10 right-10 bg-background/70 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
            <span className="text-sm font-medium text-foreground"> Available for Work</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
