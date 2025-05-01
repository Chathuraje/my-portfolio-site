"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HandHeart } from 'lucide-react';

const volunteerData = [
    {
        role: 'Team Lead - Cyber Security for Kids',
        organization: 'STEMUP Educational Foundation',
        duration: 'May 2023 - Present · 2 yrs',
        details: `• Manage and lead a team of volunteers to conduct sessions island-wide.\n• Conduct Cyber Security for Kids sessions and awareness programs in schools and libraries.\n• Coordinate and manage awareness programs across Sri Lanka.`,
    },
    {
        role: 'General Volunteer',
        organization: 'STEMUP Educational Foundation',
        duration: 'Oct 2017 - May 2023 · 5 yrs 8 months',
        details: `• 100 Days, 100 Schools Project\n• PICTEC - CP Session Library\n• Micro-bit Session`,
    },
];

const VolunteerSection = () => {
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
            id="volunteer"
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
                    Volunteer Experience
                </motion.h2>

                <div className="relative max-w-3xl mx-auto pl-10">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-border" aria-hidden="true"></div>

                    {volunteerData.map((vol, index) => (
                        <motion.div key={index} className="mb-10 relative" variants={itemVariants}>
                            <div className="absolute left-[-0.6rem] top-1 flex items-center justify-center w-6 h-6 bg-accent rounded-full ring-4 ring-background dark:ring-card">
                                <HandHeart className="h-3 w-3 text-accent-foreground" />
                            </div>

                            <Card className="ml-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-xl">{vol.role}</CardTitle>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap pl-4">{vol.duration}</span>
                                    </div>
                                    <p className="text-md font-medium text-muted-foreground">{vol.organization}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-foreground/80 whitespace-pre-line">{vol.details}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default VolunteerSection;
