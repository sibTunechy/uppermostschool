'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, Heart, Award, Clock, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const jobOpenings = [
  {
    id: 1,
    title: 'Primary School Teacher',
    department: 'Primary Education',
    type: 'Full-time',
    location: 'London',
    salary: '£28,000 - £35,000',
    description: 'We are seeking an enthusiastic and dedicated Primary School Teacher to join our team.',
    requirements: [
      'Qualified Teacher Status (QTS)',
      'Experience in Key Stage 1 or 2',
      'Strong classroom management skills',
      'Passion for innovative teaching methods'
    ],
    benefits: [
      'Competitive salary',
      'Professional development opportunities',
      'Pension scheme',
      'Health insurance'
    ]
  },
  {
    id: 2,
    title: 'Science Teacher (Secondary)',
    department: 'Secondary Education',
    type: 'Full-time',
    location: 'London',
    salary: '£30,000 - £38,000',
    description: 'Join our Science department to inspire the next generation of scientists and innovators.',
    requirements: [
      'Qualified Teacher Status (QTS)',
      'Specialism in Biology, Chemistry, or Physics',
      'Experience teaching GCSE and A-Level',
      'Strong practical skills'
    ],
    benefits: [
      'Competitive salary',
      'State-of-the-art science facilities',
      'Professional development',
      'Performance bonuses'
    ]
  },
  {
    id: 3,
    title: 'Learning Support Assistant',
    department: 'Special Educational Needs',
    type: 'Part-time',
    location: 'London',
    salary: '£18,000 - £22,000 (pro-rata)',
    description: 'Support students with special educational needs in their learning journey.',
    requirements: [
      'Experience working with children',
      'Patience and empathy',
      'Good communication skills',
      'Relevant qualifications preferred'
    ],
    benefits: [
      'Flexible working hours',
      'Training opportunities',
      'Supportive team environment',
      'Holiday pay'
    ]
  }
];

const whyWorkWithUs = [
  {
    title: 'Professional Growth',
    icon: GraduationCap,
    description: 'Continuous professional development and career advancement opportunities.'
  },
  {
    title: 'Supportive Environment',
    icon: Heart,
    description: 'A collaborative and inclusive workplace that values every team member.'
  },
  {
    title: 'Innovation',
    icon: Award,
    description: 'Work with cutting-edge educational technology and innovative teaching methods.'
  },
  {
    title: 'Work-Life Balance',
    icon: Clock,
    description: 'Flexible working arrangements and generous holiday allowances.'
  }
];

export default function CareersPage() {
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
            Work With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our dedicated team of educators and professionals committed to excellence in education and student development.
          </p>
        </motion.div>

        {/* Why Work With Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Openings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                          <Badge variant="secondary">{job.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{job.department}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{job.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-red-600 hover:bg-red-700">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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
                Don't See the Right Role?
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals to join our team. Send us your CV and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact">Send Your CV</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact HR</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 