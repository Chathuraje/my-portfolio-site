"use client";

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: 'Software Engineer / Associate Software Engineer',
    company: 'Code94 Labs (Pvt) Ltd',
    location: 'Remote - Sri Lanka',
    duration: 'February 2022 – Present',
    details: [],
    subRoles: [
      {
        role: 'Software Engineer (Jan 2024 – Present)',
        details: [
          'Architected and developed full-stack applications using React.js and Next.js to deliver high-performance user experiences.',
          'Built serverless automations and AI workflows using n8n and custom APIs to enhance business process efficiency.',
          'Utilized AWS (Lambda, S3, EC2, CloudWatch) for scalable backend deployment and cloud infrastructure management.',
          'Led CI/CD automation using GitHub Actions and AWS CodePipeline to ensure stable, rapid deployments.',
          'Collaborated in agile environments, ensuring clean code quality, feature delivery, and cross-team alignment.',
        ],
      },
      {
        role: 'Associate Software Engineer (Feb 2022 – Dec 2023)',
        details: [
          'Developed frontend UIs with React, Material UI, and Tailwind CSS, focusing on responsive design and seamless UX.',
          'Integrated REST APIs and Firebase Firestore for real-time data sync and scalable NoSQL storage.',
          'Contributed to project planning, sprint cycles, and code documentation efforts.',
          'Assisted in building backend services using Node.js and Express for multiple internal and client-facing platforms.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Terratecma (Pvt) Ltd',
    location: 'Remote - Norway',
    duration: 'August 2021 – February 2022',
    details: [
      'Built and enhanced full-stack web apps using Django and Laravel frameworks.',
      'Created custom modules and optimized database performance with SQL.',
      'Gained foundational experience with WordPress plugin development and CMS architecture.',
    ],
  },
  {
    role: 'WordPress Developer / Trainee System Administrator',
    company: 'Yomboc (Pvt) Ltd',
    location: 'Remote - Sri Lanka',
    duration: 'October 2020 – August 2021',
    details: [
      'Built WordPress sites using Elementor, custom themes, and plugins tailored to client requirements.',
      'Configured domains, DNS, SSL, and server resources using cPanel, WHM, and shared hosting tools.',
      'Monitored server performance, optimized caching, and managed Linux-based hosting environments.',
      'Assisted in deployment and staging-to-production workflows, ensuring secure and smooth rollouts.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Sipsuru - Tissa Jananayake',
    location: 'Remote - Sri Lanka',
    duration: 'March 2021 – August 2021 (concurrent)',
    details: [
      'Developed an online learning platform using Django and Firebase for Sipsuru education services.',
      'Integrated real-time data features and user management using Firebase Firestore and Authentication.',
      'Participated in agile routines, technical documentation, and code testing across internal tools.',
    ],
  },
  {
    role: 'Software & Web Developer',
    company: 'Freelance / Self-employed',
    location: 'Remote',
    duration: '2010 – Present',
    details: [
      'Delivered full-stack projects for clients across e-commerce, education, healthcare, and media.',
      'Built WordPress ecosystems with custom plugins, dynamic admin panels, and REST API integrations.',
      'Created AI-driven automation systems using n8n, Make.com, and OpenAI (ChatGPT) APIs for auto-publishing, SEO, and image generation.',
      'Maintained web servers, handled deployments, SSL, security hardening, and performance tuning.',
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
