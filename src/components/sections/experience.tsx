"use client";

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: 'Lead Web Developer',
    company: 'Code94 Labs (Pvt) Ltd',
    location: 'Remote - Sri Lanka',
    duration: 'February 2022 – Present',
    details: [],
    subRoles: [
      {
        role: 'Lead Web Developer (Jan 2024 – Present)',
        details: [
          'Leading a team of developers, managing project timelines, deliverables, and technical direction and responsible for project analysis, system architecture design, and technical research to support scalable web solutions.',
          'Integrated external APIs into the WordPress ecosystem and implemented workflow automation using Zapier. Oversaw complex WordPress customizations, ensuring seamless performance across projects.',
        ],
      },
      {
        role: 'Senior Web Developer (Feb 2023 – Dec 2023)',
        details: [
          'Customized Elementor and developed advanced WordPress themes and plugins tailored to client needs and Handled API integrations and supported backend enhancements within the WordPress ecosystem.',
          'Conducted project analysis and feasibility studies to propose optimized technical solutions. ',
        ],
      },
      {
        role: 'Web Developer (Feb 2022 – Jan 2023)',
        details: [
          'Gained practical experience in full-stack TypeScript development by helping build a complete MERN stack food catering system (MongoDB, Express.js, React, Node.js).',
          'Contributed to debugging, testing, and performance improvements across various client projects.',
        ],
      },
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Terratecma (Pvt) Ltd',
    location: 'Remote - Norway',
    duration: 'August 2021 – February 2022',
    details: [
      'Full-stack development with Django and Laravel. Built custom modules and optimized SQL queries. ',
      'Gained hands-on experience in WordPress plugin development and Deepened knowledge of the WordPress ecosystem and its advanced features.',
      'Built a school management system from scratch using the Laravel framework and Worked across both backend and front end, contributing to system architecture and performance improvements. ',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Yomboc (Pvt) Ltd - Tissa Jananayake',
    location: 'Remote - Sri Lanka',
    duration: 'March 2021 – August 2021',
    details: [
      'Hands-on experience with Django, Firebase, and cross-platform integration.',
      'Developed and integrated an online learning platform for Mr. Thissa Jananayake’s Sipsuru online classes. (Customized a Moodle-based system to meet specific educational requirements.) ',
      'Gained initial exposure to WordPress development and design during the internship. And became familiar with the WordPress ecosystem and best practices and Worked with Elementor to build and design WordPress websites',
    ],
  },
  {
    role: 'Software & Web Developer',
    company: 'Freelance / Self-employed',
    location: 'Remote',
    duration: 'January 2010 – Present',
    details: [
      'Developed websites and systems across various sectors, specializing in WordPress, plugin development, and server deployments. ',
      'Built advanced AI automation workflows using n8n and Make.com and Created a WordPress auto-publishing system integrated with ChatGPT API for content creation, image generation, SEO optimization, drafting, and publishing.',
      'Used Python (FastAPI) and JavaScript to implement advanced backend logic in automation workflows. ',
      'I continuously experimented with different automation techniques and tools and I studied blockchain development as part of a university project.',
      'Delivered 30+ freelance WordPress projects under my own brand, Digitix365.',
    ],
  },
];


const ExperienceSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="experience"
      className="py-20 bg-secondary/30 dark:bg-secondary/10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12" variants={itemVariants}>
          Work Experience
        </motion.h2>

        <motion.div className="max-w-3xl mx-auto" variants={sectionVariants}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {experienceData.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index + 1}`} className="border bg-card rounded-lg shadow-sm px-4 data-[state=open]:border-accent">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Briefcase className="text-accent h-5 w-5" />
                      <span>{exp.role} at {exp.company}</span>
                    </div>
                    <span className="text-sm font-normal text-muted-foreground ml-auto mr-4">{exp.duration}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 px-2 text-muted-foreground">
                    <div className="mb-2 flex gap-3">
                      <div className="bg-green-200 text-green-800 text-xs font-medium py-1 px-2 rounded-full">
                        {exp.location}
                      </div>
                    </div>
                    <ul className="list-disc space-y-2 pl-6">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>

                    {exp.subRoles && (
                      <Accordion type="multiple" className="space-y-2 mt-4">
                        {exp.subRoles.map((subRole, subIndex) => (
                          <AccordionItem key={subIndex} value={`subitem-${subIndex + 1}`}>
                            <AccordionTrigger className="text-md font-semibold hover:no-underline">
                              <div className="flex items-center gap-3">
                                <Briefcase className="text-accent h-5 w-5" />
                                <span>{subRole.role}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 px-2 text-muted-foreground">
                              <ul className="list-disc space-y-2 pl-6">
                                {subRole.details.map((subDetail, i) => (
                                  <li key={i}>{subDetail}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
