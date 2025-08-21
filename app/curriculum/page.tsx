'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Palette, Calculator, Globe, Heart, Trophy, Users } from 'lucide-react';
import Link from 'next/link';

const curriculumStages = [
  {
    title: 'Early Years Foundation Stage (EYFS)',
    age: '3-5 years',
    icon: Heart,
    description: 'Nurturing young minds through play-based learning and development of key skills.',
    subjects: ['Personal Development', 'Communication & Language', 'Physical Development', 'Literacy', 'Mathematics', 'Understanding the World', 'Expressive Arts & Design'],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Primary Education',
    age: '5-11 years',
    icon: BookOpen,
    description: 'Building strong foundations in core subjects with a focus on creativity and critical thinking.',
    subjects: ['English', 'Mathematics', 'Science', 'History', 'Geography', 'Art & Design', 'Physical Education', 'Music', 'Computing', 'Religious Education'],
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Secondary Education',
    age: '11-16 years',
    icon: GraduationCap,
    description: 'Comprehensive education preparing students for GCSE examinations and future academic success.',
    subjects: ['Core Subjects (English, Maths, Science)', 'Humanities', 'Languages', 'Arts', 'Technology', 'Physical Education', 'PSHE'],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Sixth Form',
    age: '16-18 years',
    icon: Trophy,
    description: 'Advanced studies leading to A-Level qualifications and preparation for university.',
    subjects: ['A-Level Subjects', 'Extended Project Qualification', 'University Preparation', 'Career Guidance'],
    color: 'bg-red-100 text-red-600'
  }
];

const specialPrograms = [
  {
    title: 'STEM Excellence',
    icon: Calculator,
    description: 'Advanced mathematics, science, and technology programs with hands-on projects.',
    features: ['Robotics Club', 'Science Fair', 'Math Olympiad', 'Coding Workshops']
  },
  {
    title: 'Creative Arts',
    icon: Palette,
    description: 'Comprehensive arts education including visual arts, music, drama, and dance.',
    features: ['Art Exhibitions', 'Music Performances', 'Drama Productions', 'Dance Recitals']
  },
  {
    title: 'Sports & Athletics',
    icon: Trophy,
    description: 'Physical education and competitive sports programs for all skill levels.',
    features: ['Football Academy', 'Swimming Program', 'Athletics Team', 'Fitness Training']
  },
  {
    title: 'Global Citizenship',
    icon: Globe,
    description: 'International perspective and cultural awareness through various programs.',
    features: ['Language Exchange', 'Cultural Events', 'International Trips', 'Global Projects']
  }
];

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Curriculum
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive and innovative curriculum designed to inspire excellence, foster creativity, and prepare students for success in an ever-changing world.
          </p>
        </motion.div>

        {/* Curriculum Stages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Educational Stages</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {curriculumStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stage.color}`}>
                        <stage.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{stage.title}</CardTitle>
                        <CardDescription className="text-sm font-medium">{stage.age}</CardDescription>
                      </div>
                    </div>
                    <p className="text-gray-600">{stage.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.subjects.map((subject, subjectIndex) => (
                          <span
                            key={subjectIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Special Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <program.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Learn More?
              </h3>
              <p className="text-gray-600 mb-6">
                Discover how our curriculum can benefit your child's education and future success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/admission">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 