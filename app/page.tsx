'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, BookOpen, Calendar, Bell, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '@/components/shared/AnimatedSection';
import LoadingSpinner, { PageLoader } from '@/components/shared/LoadingSpinner';
import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { label: 'Students Enrolled', value: '1,200+', icon: Users },
  { label: 'Faculty Members', value: '85+', icon: Award },
  { label: 'Academic Programs', value: '15+', icon: BookOpen },
  { label: 'Years of Excellence', value: '25+', icon: Calendar },
];

const newsItems = [
  {
    id: 1,
    title: 'Uppermost School Wins State Science Competition',
    description: 'Our students secured first place in the annual state-level science competition.',
    date: '2024-01-15',
    category: 'Achievement',
    featured: true,
  },
  {
    id: 2,
    title: 'Cultural Day',
    description: 'Celebrating the diverse cultures of our students with performances, food, and art.',
    date: '2024-01-10',
    category: 'Event',
    featured: false,
  },
  {
    id: 3,
    title: 'Annual Sports Day 2024',
    description: 'Join us for our annual sports day celebration with exciting competitions.',
    date: '2024-01-20',
    category: 'Event',
    featured: false,
  },
];

const announcements = [
  {
    id: 1,
    title: 'Admission Open for Academic Year 2024-25',
    description: 'Applications are now open for new admissions. Limited seats available.',
    priority: 'high',
    date: '2024-01-12',
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting Scheduled',
    description: 'Monthly parent-teacher meeting scheduled for January 25th, 2024.',
    priority: 'medium',
    date: '2024-01-18',
  },
  {
    id: 3,
    title: 'Winter Break Schedule',
    description: 'Winter break from December 20th to January 5th. Classes resume on January 8th.',
    priority: 'low',
    date: '2024-01-05',
  },
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
         {/* Background Video Placeholder */}
        <div className="absolute inset-0">
          <Image 
            src="/newsmile.jpg" 
            alt="School students" 
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Excellence in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-200">
                Education
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-300 max-w-2xl mx-auto text-balance">
              Nurturing young minds with world-class education, innovative teaching methods, and holistic development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <Link href="/admission">
                  Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-blue-600 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-blue-200" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* News and Announcements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest News & Announcements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest happenings, achievements, and important announcements from our school community.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* News Section */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
                    School News
                  </h3>
                  <Button variant="outline" asChild>
                    <Link href="/news">View All</Link>
                  </Button>
                </div>
              </AnimatedSection>

              <StaggeredContainer className="space-y-6">
                {newsItems.map((news) => (
                  <StaggeredItem key={news.id}>
                    <Card className={`hover:shadow-lg transition-shadow duration-300 ${news.featured ? 'border-blue-200 bg-blue-50/50' : ''}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant={news.featured ? 'default' : 'secondary'}>
                                {news.category}
                              </Badge>
                              {news.featured && <Badge variant="destructive">Featured</Badge>}
                            </div>
                            <CardTitle className="text-xl mb-2 hover:text-blue-600 transition-colors">
                              {news.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {news.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {new Date(news.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <Button variant="ghost" size="sm">
                            Read More <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                ))}
              </StaggeredContainer>
            </div>

            {/* Announcements Section */}
            <div>
              <AnimatedSection>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Bell className="h-6 w-6 mr-2 text-emerald-600" />
                    Announcements
                  </h3>
                </div>
              </AnimatedSection>

              <StaggeredContainer className="space-y-4">
                {announcements.map((announcement) => (
                  <StaggeredItem key={announcement.id}>
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                            announcement.priority === 'high' ? 'bg-red-500' :
                            announcement.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`} />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">
                              {announcement.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              {announcement.description}
                            </p>
                            <span className="text-xs text-gray-500">
                              {new Date(announcement.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                ))}
              </StaggeredContainer>

              <AnimatedSection delay={0.3}>
                <div className="mt-6">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/announcements">View All Announcements</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Access
              </h2>
              <p className="text-xl text-gray-600">
                Easy access to important portals and resources
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggeredItem>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <Link href="/student-dashboard">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Student Portal</h3>
                    <p className="text-gray-600">Access grades, assignments, and school resources</p>
                  </CardContent>
                </Link>
              </Card>
            </StaggeredItem>

            <StaggeredItem>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <Link href="/teacher-dashboard">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                      <Award className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Teacher Portal</h3>
                    <p className="text-gray-600">Manage classes, students, and academic progress</p>
                  </CardContent>
                </Link>
              </Card>
            </StaggeredItem>

            <StaggeredItem>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <Link href="/admission">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <BookOpen className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Admissions</h3>
                    <p className="text-gray-600">Apply for admission and explore our programs</p>
                  </CardContent>
                </Link>
              </Card>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </section>
    </div>
  );
}