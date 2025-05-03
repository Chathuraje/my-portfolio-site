"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const projectsData = [
//   {
//     title: 'WordPress Projects',
//     description: 'A collection of WordPress projects showcasing custom themes and plugins.',
//     techStack: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Elementor', 'WooCommerce', 'REST API', 'Gutenberg', 'Custom Post Types', 'Custom Fields', 'SEO', 'Responsive Design'],
//     githubUrl: null,
//     liveUrl: '/wordpress',
//     imageUrl: '/wordpress/wordpress-placehodler.png',
//     details: 'This project includes various WordPress sites I have developed, focusing on custom themes and plugins. Each site is tailored to meet specific client needs, utilizing the power of WordPress to create dynamic and responsive web experiences.'
//     category: 'WordPress',
//    },
// ];

type Project = {
  title: string;
  description: string;
  techStacks: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string;
  details: string;
  category: string;
};

const ProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/getProjectDetails');

        setProjectsData(response.data.projects);
        console.log('Projects data:', response.data.projects);
      } catch (error) {
        console.error('Failed to fetch project details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  if (loading) {
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
            variants={sectionVariants}
          >
            Projects Showcase
          </motion.h2>

          <motion.div
            className="flex justify-center items-center h-96" // <-- Center loader properly here
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
              variants={sectionVariants}
            />
          </motion.div>
        </div>
      </motion.section>
    );
  }

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
          variants={sectionVariants}
        >
          Projects Showcase
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project: Project, index: number) => (
            !(project.category === 'Project' || project.category === 'Page') ? null : (
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
                          className="w-full h-48 object-cover object-center"
                          loading="lazy"
                        />
                      </CardHeader>
                      <CardContent className="p-4 flex-grow">
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {project.techStacks?.map((techStack: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {techStack}
                            </Badge>
                          ))}


                        </div>
                      </CardContent>
                      <CardFooter className="p-4 flex justify-end gap-2">
                        {project.githubUrl != "null" && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.githubUrl || ''} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                              <Github className="h-4 w-4 mr-1" /> GitHub
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="default" size="sm" asChild>
                            {project.category === 'Page' ? (
                              <a href={project.liveUrl} rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                <ExternalLink className="h-4 w-4 mr-1" />
                                View Portfolio
                              </a>
                            ) : (
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                <ExternalLink className="h-4 w-4 mr-1" />
                                View Project
                              </a>
                            )}

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
                      {project.techStacks?.map((techStack: string, index: number) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {techStack}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    {project.githubUrl != "null" && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl || ''} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" /> GitHub
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="default" size="sm" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" /> View Site

                        </Link>
                      </Button>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
