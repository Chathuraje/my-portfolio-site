"use client";

import * as React from "react";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Cloud, ShieldCheck, Wrench, Settings, Database, Smartphone, GitBranch, FileText } from 'lucide-react';


const iconSize = "ci-2x";

// Skill Data
const skillsData = {
  languages: [
    { name: 'JavaScript', icon: 'ci ci-javascript' },
    { name: 'TypeScript', icon: 'ci ci-typescript' },
    { name: 'Python', icon: 'ci ci-python' },
    { name: 'PHP', icon: 'ci ci-php' },
    { name: 'Java', icon: 'ci ci-java' },
    { name: 'C', icon: 'ci ci-c' },
    { name: 'Solidity', icon: 'ci ci-solidity' },
  ],
  frontend: [
    { name: 'React', icon: 'ci ci-react' },
    { name: 'Next.js', icon: 'ci ci-nextjs' },
    { name: 'Vue.js', icon: 'ci ci-vuejs' },
    { name: 'HTML5', icon: 'ci ci-html' },
    { name: 'CSS3', icon: 'ci ci-css' },
    { name: 'Tailwind CSS', icon: 'ci ci-tailwindcss' },
    { name: 'Framer Motion', icon: 'ci ci-framer' },
    { name: 'Bootstrap', icon: 'ci ci-bootstrap' },
    { name: 'Material UI', icon: 'ci ci-materialui' },
  ],
  backend: [
    { name: 'Node.js', icon: 'ci ci-nodejs' },
    { name: 'Express', icon: 'ci ci-express' },
    { name: 'Laravel', icon: 'ci ci-laravel' },
    { name: 'REST APIs', icon: 'ci ci-serverless' },
    { name: 'Django', icon: 'ci ci-django' },
    { name: 'FastAPI', icon: 'ci ci-fastapi' },
    { name: 'n8n', icon: 'ci ci-serverless' },
    { name: 'Make.com', icon: 'ci ci-serverless' },
    { name: 'Scikit-Learn ', icon: 'ci ci-scikitlearn' },
    { name: 'TensorFlow', icon: 'ci ci-tensorflow' },
  ],
  databases: [
    { name: 'MongoDB', icon: 'ci ci-mongodb' },
    { name: 'PostgreSQL', icon: 'ci ci-postgresql' },
    { name: 'MySQL', icon: 'ci ci-mysql' },
    { name: 'Firebase', icon: 'ci ci-firebase' },
  ],
  cms: [
    { name: 'WordPress', icon: 'ci ci-wordpress' },
    { name: 'Elementor', icon: 'ci ci-wordpress' },
    { name: 'Custom Plugin Development', icon: 'ci ci-wordpress' },
    { name: 'Gutenberg', icon: 'ci ci-wordpress' },
    { name: 'REST API Integration', icon: 'ci ci-wordpress' },
    { name: 'WordPress Hooks (Actions & Filters)', icon: 'ci ci-wordpress' },
  ],
  devops: [
    { name: 'AWS', icon: 'ci ci-aws' },
    { name: 'Docker', icon: 'ci ci-docker' },
    { name: 'CI/CD (GitHub Action)', icon: 'ci ci-github' },
    { name: 'Terraform', icon: 'ci ci-terraform' },
    { name: 'Linux/Unix CLI', icon: 'ci ci-linux' },
    { name: 'Apache', icon: 'ci ci-apache' },
    { name: 'Nginx', icon: 'ci ci-nginx' },
    { name: 'Vercel', icon: 'ci ci-vercel' },
    { name: 'Digital Ocean', icon: 'ci ci-digitalocean' },
    { name: 'Redis', icon: 'ci ci-redis' },
    { name: 'Cron Jobs', icon: 'ci ci-cloudinary' },
  ],
  security: [
    { name: 'Web Security Basics (OWASP)', icon: 'ci ci-linux' },
    { name: 'SSL/TLS Configuration', icon: 'ci ci-linux' },
    { name: 'Firewall Setup', icon: 'ci ci-linux' },
    { name: 'Vulnerability Scanning (Nmap, Nikto)', icon: 'ci ci-linux' },
  ],
  tools: [
    { name: 'Git & GitHub', icon: 'ci ci-git' },
    { name: 'VS Code', icon: 'ci ci-vscode' },
    { name: 'Jira', icon: 'ci ci-jira' },
    { name: 'Figma (Basic)', icon: 'ci ci-figma' },
    { name: 'Postman', icon: 'ci ci-postman' },
    { name: 'Chrome DevTools', icon: 'ci ci-chrome' },
    { name: 'VS Code Debugger', icon: 'ci ci-vscode' },
    { name: 'Swagger', icon: 'ci ci-swagger' },
    { name: 'Markdown', icon: 'ci ci-markdown' },
    { name: 'Notion', icon: 'ci ci-notion' },
    { name: 'Click-Up', icon: 'ci ci-clickup' },
  ],
  projectCollaboration: [
    { name: 'Git', icon: 'ci ci-git' },
    { name: 'GitHub', icon: 'ci ci-github' },
    { name: 'Jira', icon: 'ci ci-jira' },
    { name: 'Trello', icon: 'ci ci-trello' },
    { name: 'Click-Up', icon: 'ci ci-clickup' },
    { name: 'Asana', icon: 'ci ci-doctrine' },
    { name: 'Slack', icon: 'ci ci-slack' },
    { name: 'Discord', icon: 'ci ci-discord' },
  ],
  designProductivity: [
    { name: 'Figma', icon: 'ci ci-figma' },
    { name: 'Canva', icon: 'ci ci-canva' },
    { name: 'Microsoft Office Suite', icon: 'ci ci-365' },
  ],
};

type SkillCategory = keyof typeof skillsData;

const categoryInfo: Record<SkillCategory, { title: string; icon: React.ElementType }> = {
  languages: { title: 'Programming Languages', icon: Code },
  frontend: { title: 'Frontend Development', icon: Smartphone },
  backend: { title: 'Backend Development', icon: Server },
  databases: { title: 'Databases', icon: Database },
  cms: { title: 'Content Management Systems', icon: Settings },
  devops: { title: 'DevOps & Cloud', icon: Cloud },
  security: { title: 'Security Practices', icon: ShieldCheck },
  tools: { title: 'Development Tools', icon: Wrench },
  projectCollaboration: { title: 'Project & Team Collaboration', icon: GitBranch },
  designProductivity: { title: 'Design & Productivity Tools', icon: FileText },
};

const SkillsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="skills"
      className="py-20 bg-secondary/30 dark:bg-secondary/10"
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
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(skillsData) as SkillCategory[]).map((categoryKey) => (
            <motion.div key={categoryKey} variants={cardVariants}>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {React.createElement(categoryInfo[categoryKey].icon, { className: "text-accent" })}
                    {categoryInfo[categoryKey].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skillsData[categoryKey].map((skill, index) => (
                      <span key={index} className="flex items-center gap-1">
                        <i className={`${skill.icon} text-xl ${iconSize}`} /> &nbsp;
                        {skill.name}
                        {index < skillsData[categoryKey].length - 1 && ','}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
