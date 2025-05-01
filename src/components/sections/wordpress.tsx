"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const wordpressData = [
  {
    title: 'WordPress Projects',
    description: 'A collection of WordPress projects showcasing custom themes and plugins.',
    techStack: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Elementor', 'WooCommerce', 'REST API', 'Gutenberg', 'Custom Post Types', 'Custom Fields', 'SEO', 'Responsive Design'],
    githubUrl: null,
    liveUrl: '/wordpress',
    imageUrl: '/wordpress/wordpress-placehodler.png',
    details: 'This project includes various WordPress sites I have developed, focusing on custom themes and plugins. Each site is tailored to meet specific client needs, utilizing the power of WordPress to create dynamic and responsive web experiences.'
  }
];

const WordpressSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="projects"
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={sectionVariants} // Use section variant for heading too
        >
          Wordpress Projects Showcase
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants} // Stagger children within the grid container
          initial="hidden"
          animate="visible"
        >
          {wordpressData.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <CardHeader className="p-0">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} Screenshot`}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-end gap-2">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <Github className="h-4 w-4 mr-1" /> GitHub
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="default" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                          </a>
                        </Button>
                      )}
                      {!project.githubUrl && !project.liveUrl && (
                        <Button variant="ghost" size="sm" disabled>No Links</Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  <DialogDescription>
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} Screenshot`}
                    width={600}
                    height={400}
                    className="w-full rounded-md mb-4 max-h-64 object-cover"
                  />
                  <h4 className="font-semibold">Details:</h4>
                  <p className="text-sm text-muted-foreground">{project.details}</p>
                  <h4 className="font-semibold mt-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WordpressSection;
