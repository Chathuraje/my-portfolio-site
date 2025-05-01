"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, Award } from 'lucide-react';

const achievementsData = [
    {
        type: 'Certification',
        title: 'Java Fundamentals',
        shortDescription: 'Fundamentals of Java programming including OOP concepts.',
        issuer: 'Oracle Academy',
        date: 'May 2013 - No Expiration Date',
        details: [
            'Covered object-oriented programming, core Java libraries, and basic application development.',
            'Practical assignments included building small console applications in Java.',
        ],
    },
    {
        type: 'Certification',
        title: 'Certificate in Office Application',
        shortDescription: 'Comprehensive training on Microsoft Office tools.',
        issuer: 'Ministry of Education',
        date: '2011 - No Expiration Date',
        details: [
            'Mastered Microsoft Word, Excel, PowerPoint, and Access.',
            'Focused on documentation, data management, and presentation skills.',
        ],
    },
    {
        type: 'Award',
        title: 'SLT Digitastic – Digital Lifestyle Expo',
        shortDescription: 'Volunteered and participated in digital exhibitions.',
        issuer: 'STEMUp Educational Foundation',
        location: 'BMICH',
        date: 'November 2019',
        details: [
            'Represented STEMUp at the 2019 event.',
            'Engaged in public outreach and STEM education initiatives.',
            'Also participated in the 2018 edition.',
        ],
    },
    {
        type: 'Award',
        title: 'Edinext – New Innovation Competition',
        shortDescription: 'Presented a technology innovation project.',
        issuer: 'Ministry of Education – Central Province',
        location: 'Ranabima Royal College',
        date: 'October 2017',
        details: [
            'Participated in the competition promoting student innovations.',
            'Showcased a software-based innovation to a panel of judges.',
        ],
    },
    {
        type: 'Award',
        title: '14th Young Computer Scientist Competition (YCSC)',
        shortDescription: 'Special Merit Award for advanced software project.',
        issuer: 'Ministry of Education & YCSC Sri Lanka',
        location: 'Sri Lanka',
        date: '2015',
        details: [
            'Won 4th place (Senior Category) across Sri Lanka.',
            'Project: Library Management Software 2.0 (Advanced) using Java.',
            'Features included multi-user login, book tracking, and reporting.',
        ],
    },
    {
        type: 'Award',
        title: '13th Young Computer Scientist Competition (YCSC)',
        shortDescription: 'National 3rd place winner for software development.',
        issuer: 'Ministry of Education & YCSC Sri Lanka',
        location: 'Sri Lanka',
        date: '2014',
        details: [
            'Achieved 3rd Place (Junior Category).',
            'Developed a library management application with database support using Java.',
        ],
    },
    {
        type: 'Award',
        title: '12th Young Computer Scientist Competition (YCSC)',
        shortDescription: 'Merit Award for mathematical utility software.',
        issuer: 'Ministry of Education & YCSC Sri Lanka',
        location: 'Sri Lanka',
        date: '2013',
        details: [
            'Awarded Merit under Junior Category.',
            'Built a basic calculation software for area and perimeter computations (Java).',
        ],
    },
    {
        type: 'Award',
        title: 'Best Student and Top Catechist',
        shortDescription: 'Recognized for academic and leadership excellence.',
        issuer: 'Oracle Education Foundation (Think Quest)',
        location: 'India',
        date: '2012',
        details: [
            'Awarded for leadership, academic performance, and contributions to collaborative projects.',
        ],
    },
    {
        type: 'Award',
        title: 'Education Pavilion – INFOTAL Exhibition',
        shortDescription: 'Exhibited educational software at national expo.',
        issuer: 'Ministry of Education – Sri Lanka',
        location: 'BMICH',
        date: '2nd–5th December 2011',
        details: [
            'Participated as a student exhibitor.',
            'Demonstrated software solutions developed for education sector.',
        ],
    },
    {
        type: 'Award',
        title: 'School Education Software Group Project',
        shortDescription: 'Merit Award for team-based educational software.',
        issuer: 'Ministry of Education & Microsoft Sri Lanka',
        location: 'Sri Lanka',
        date: '2011',
        details: [
            'Built a Visual Basic 6.0 educational software project about artificial vs organic food.',
            'Won a Merit Award under Microsoft’s Partner in Learning Program.',
            'Role: Lead coder and project collaborator.',
        ],
    },
];

const AchievementsSection = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <motion.section
            id="achievements"
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Awards & Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievementsData.map((item, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <Card className="group hover:scale-[1.02] transition-transform duration-300 border border-border shadow-sm hover:shadow-md">
                                <CardHeader className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-full bg-accent text-accent-foreground">
                                            {item.type === 'Certification' ? <BadgeCheck className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-lg">{item.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground">{item.issuer}</p>
                                        </div>
                                    </div>
                                    {item.shortDescription && (
                                        <p className="text-sm text-foreground/70 mt-2">{item.shortDescription}</p>
                                    )}
                                </CardHeader>
                                <CardContent className="text-sm text-foreground/80">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                                            {item.date}
                                        </span>
                                        {item.location && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                                                {item.location}
                                            </span>
                                        )}
                                    </div>
                                    <br />
                                    {item.details && (
                                        <ul className="list-disc list-inside space-y-1">
                                            {item.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default AchievementsSection;