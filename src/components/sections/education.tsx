"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'BSc (Hons) in Information Technology (Cyber Security Specialization)',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    duration: '2020 - 2024 (Expected)',
    details: 'Specialized in Cyber Security with a focus on network security, encryption, and threat detection. Relevant coursework included Data Structures, Algorithms, Web Development, Database Management, and Software Architecture.',
  },
  {
    degree: 'GCE Advanced Level (Physical Science with ICT)',
    institution: 'Dharmaraja College, Kandy',
    duration: 'Completed 2018',
    details: 'Focused on Combined Mathematics, Physics, Chemistry, and Information and Communication Technology (ICT).',
  },
  {
    degree: 'GCE Ordinary Level',
    institution: 'Kandy Model School',
    duration: 'Completed 2014',
    details: 'Completed core subjects including Mathematics, Science, English, and Sinhala.',
  },
];

const EducationSection = () => {
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
      id="education"
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Education
        </motion.h2>

        <div className="relative max-w-3xl mx-auto pl-10">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border" aria-hidden="true"></div>

          {educationData.map((edu, index) => (
            <motion.div key={index} className="mb-10 relative" variants={itemVariants}>
              {/* Timeline Dot */}
              <div className="absolute left-[-0.6rem] top-1 flex items-center justify-center w-6 h-6 bg-accent rounded-full ring-4 ring-background dark:ring-card">
                <GraduationCap className="h-3 w-3 text-accent-foreground" />
              </div>

              <Card className="ml-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <span className="text-sm text-muted-foreground whitespace-nowrap pl-4">{edu.duration}</span>
                  </div>
                  <p className="text-md font-medium text-muted-foreground">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{edu.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
