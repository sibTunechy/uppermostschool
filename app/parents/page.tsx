'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, BookOpen, MessageSquare, Bell, FileText, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const parentResources = [
  {
    title: 'Parent Portal',
    icon: Users,
    description: 'Access your child\'s academic progress, attendance, and school communications.',
    features: ['Academic Reports', 'Attendance Records', 'Homework Assignments', 'School Calendar'],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'School Calendar',
    icon: Calendar,
    description: 'Stay updated with important dates, events, and school activities.',
    features: ['Term Dates', 'Parent Evenings', 'School Events', 'Holiday Schedule'],
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Academic Support',
    icon: BookOpen,
    description: 'Resources and guidance to support your child\'s learning journey.',
    features: ['Study Guides', 'Homework Help', 'Reading Lists', 'Online Resources'],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Communication',
    icon: MessageSquare,
    description: 'Stay connected with teachers and school administration.',
    features: ['Parent-Teacher Meetings', 'Email Updates', 'Newsletters', 'Emergency Contacts'],
    color: 'bg-red-100 text-red-600'
  }
];

const importantInfo = [
  {
    title: 'School Policies',
    icon: FileText,
    items: [
      'Attendance Policy',
      'Behavior Policy',
      'Homework Policy',
      'Uniform Policy',
      'Safeguarding Policy'
    ]
  },
  {
    title: 'Health & Safety',
    icon: Bell,
    items: [
      'Medical Information',
      'First Aid Procedures',
      'Emergency Procedures',
      'Health Guidelines',
      'Safety Protocols'
    ]
  },
  {
    title: 'Transportation',
    icon: MapPin,
    items: [
      'School Bus Routes',
      'Walking Routes',
      'Cycling Safety',
      'Parking Information',
      'Drop-off Zones'
    ]
  }
];

const contactInfo = [
  { label: 'Main Office', value: '+44 20 7123 4567', icon: Phone },
  { label: 'General Email', value: 'info@queensparkacademy.co.uk', icon: Mail },
  { label: 'Emergency', value: '+44 20 7123 4568', icon: Bell },
  { label: 'Office Hours', value: '8:00 AM - 4:00 PM', icon: Clock }
];

export default function ParentsPage() {
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
            Parent Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to support your child's education and stay connected with Queen's Park Academy.
          </p>
        </motion.div>

        {/* Parent Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Essential Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {parentResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${resource.color}`}>
                        <resource.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {resource.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {feature}
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

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Important Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {importantInfo.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Contact Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <contact.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{contact.label}</h3>
                    <p className="text-gray-600 text-sm">{contact.value}</p>
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
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help or Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to support you and answer any questions about your child's education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/key-information">School Information</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 