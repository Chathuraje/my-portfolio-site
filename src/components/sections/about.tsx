"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Code, Smile, Coffee } from 'lucide-react';

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <motion.section
      id="about"
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12" variants={sectionVariants}>
          About Me
        </motion.h2>

        <motion.div
          className="max-w-5xl mx-auto mb-12 text-center text-lg text-muted-foreground"
          variants={sectionVariants}
        >
          I&apos;m a dynamic and detail-oriented software engineer with over 10 years of experience across full-stack development, AI automations, WordPress engineering, and system administration. I&apos;m known for being adaptable, having strong people skills, and taking the lead when working with teams. I love turning business needs into solid digital solutions and have a real passion for new technologies and building scalable systems.
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={sectionVariants}
        >
          <motion.div variants={cardVariants}>
            <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Code className="text-accent" /> Languages & Tech</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Programming Languages</AccordionTrigger>
                    <AccordionContent>
                      Java, JavaScript, Python, C, C++, Solidity, PHP
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Frontend Development</AccordionTrigger>
                    <AccordionContent>
                      HTML, CSS, TypeScript, React (MERN), Bootstrap, Material UI, Tailwind CSS
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Backend Development & Automation</AccordionTrigger>
                    <AccordionContent>
                      Node.js, Express.js, Next.js, Django, Laravel, FastAPI, n8n, Make.com
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Databases & Data Tools</AccordionTrigger>
                    <AccordionContent>
                      MySQL, MongoDB, Firebase, SQL, Redis
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Machine Learning</AccordionTrigger>
                    <AccordionContent>
                      TensorFlow, Scikit-Learn
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>CMS & WordPress Development</AccordionTrigger>
                    <AccordionContent>
                      WordPress, Elementor, Custom Plugin Development, Gutenberg, REST API Integration, WordPress Hooks (Actions & Filters)
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>DevOps, Deployment & Containerization</AccordionTrigger>
                    <AccordionContent>
                      Linux/Unix CLI, Docker, Apache, Nginx, Vercel, Digital Ocean, GitHub Actions, Cron Jobs
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>Testing, Security & Documentation</AccordionTrigger>
                    <AccordionContent>
                      Postman, Chrome DevTools, VS Code Debugger, SSL/TLS Configuration, Firewall Setup, Vulnerability Scanning (Nmap, Nikto), Swagger, Markdown, Notion, Click-Up
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>


              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Smile className="text-accent" /> Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Leadership & Teamwork</AccordionTrigger>
                    <AccordionContent>
                      Experienced in leading development teams, fostering collaboration, and mentoring junior developers. Proven ability to work effectively in agile environments.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Problem Solving</AccordionTrigger>
                    <AccordionContent>
                      Strong analytical skills with a focus on identifying root causes and implementing efficient solutions. Adept at debugging complex issues.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Communication</AccordionTrigger>
                    <AccordionContent>
                      Clear and concise communication with technical and non-technical stakeholders. Experienced in documentation and presentations.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Adaptability</AccordionTrigger>
                    <AccordionContent>
                      Comfortable with rapidly changing environments and requirements. Quickly adjusts strategies and workflows to meet new challenges.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Team Management</AccordionTrigger>
                    <AccordionContent>
                      Skilled in organizing teams, assigning tasks, and ensuring projects are completed on time while maintaining high morale and productivity.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Project Management</AccordionTrigger>
                    <AccordionContent>
                      Experienced in planning, executing, and overseeing projects from inception to completion, ensuring timely delivery and alignment with business goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>Resources Management</AccordionTrigger>
                    <AccordionContent>
                      Efficient at allocating and managing resources, including personnel, budgets, and tools, to optimize project outcomes and operational efficiency.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>Project Research and Analysis</AccordionTrigger>
                    <AccordionContent>
                      Proficient in conducting thorough research and analysis to inform project strategies, risk assessments, and decision-making processes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Coffee className="text-accent" /> Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Tech Exploration</AccordionTrigger>
                    <AccordionContent>
                      Constantly exploring emerging technologies, contributing to open-source projects, and attending tech meetups.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Traveling</AccordionTrigger>
                    <AccordionContent>
                      Exploring new places and cultures fuels my sense of adventure and broadens my perspective.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Reading</AccordionTrigger>
                    <AccordionContent>
                      Enjoy reading tech blogs, non-fiction books, and occasionally sci-fi novels.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Watching Movies</AccordionTrigger>
                    <AccordionContent>
                      Love watching a variety of films, especially those that inspire creativity, storytelling, and innovation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Volunteering</AccordionTrigger>
                    <AccordionContent>
                      Actively involved in community service initiatives, mentoring youth, and supporting tech education programs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Teaching & Building My Own Brand</AccordionTrigger>
                    <AccordionContent>
                      Passionate about sharing knowledge through teaching, creating content, and developing a personal brand focused on technology and education.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
