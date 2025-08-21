'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, Calendar, Users, BookOpen, Award, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const keyInfoSections = [
  {
    title: 'School Information',
    icon: Info,
    items: [
      { label: 'School Type', value: 'Co-educational Day School' },
      { label: 'Age Range', value: '3-18 years' },
      { label: 'Founded', value: '1999' },
      { label: 'Location', value: 'Coral Ville, London' },
    ]
  },
  {
    title: 'Academic Calendar',
    icon: Calendar,
    items: [
      { label: 'Term 1', value: 'September - December' },
      { label: 'Term 2', value: 'January - March' },
      { label: 'Term 3', value: 'April - July' },
      { label: 'Holidays', value: 'As per local authority' },
    ]
  },
  {
    title: 'Student Body',
    icon: Users,
    items: [
      { label: 'Total Students', value: '1,200+' },
      { label: 'Class Sizes', value: '20-25 students' },
      { label: 'Student-Teacher Ratio', value: '15:1' },
      { label: 'International Students', value: '15%' },
    ]
  },
  {
    title: 'Curriculum',
    icon: BookOpen,
    items: [
      { label: 'Early Years', value: 'EYFS Framework' },
      { label: 'Primary', value: 'National Curriculum' },
      { label: 'Secondary', value: 'GCSE & A-Level' },
      { label: 'Special Programs', value: 'STEM, Arts, Sports' },
    ]
  },
  {
    title: 'Achievements',
    icon: Award,
    items: [
      { label: 'Ofsted Rating', value: 'Outstanding' },
      { label: 'Academic Excellence', value: 'Top 10% nationally' },
      { label: 'Sports Champions', value: 'County & Regional titles' },
      { label: 'Arts Recognition', value: 'National competitions' },
    ]
  },
  {
    title: 'Contact Details',
    icon: Phone,
    items: [
      { label: 'Address', value: '123 Coral Ville Road, London' },
      { label: 'Phone', value: '+44 20 7123 4567' },
      { label: 'Email', value: 'info@coralvilleschool.co.uk' },
      { label: 'Emergency', value: '+44 20 7123 4568' },
    ]
  }
];

export default function GalleryPage() {
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
            Key Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential information about Coral Ville School including policies, procedures, and important details for parents and students.
          </p>
        </motion.div>

        {/* Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {keyInfoSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-sm font-medium text-gray-600">{item.label}</span>
                        <span className="text-sm text-gray-900 font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/admission">Admissions</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/curriculum">Curriculum</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/parents">Parent Portal</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}