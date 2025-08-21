'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'Queen\'s Park Academy Wins Regional Science Competition',
    description: 'Our students secured first place in the annual regional science competition with their innovative renewable energy project.',
    date: '2024-01-15',
    category: 'Achievement',
    featured: true,
    image: '/girlssmile.jpg'
  },
  {
    id: 2,
    title: 'Annual Sports Day 2024 - A Celebration of Excellence',
    description: 'Join us for our annual sports day celebration featuring exciting competitions, team events, and individual challenges.',
    date: '2024-01-20',
    category: 'Event',
    featured: false,
    image: '/mediumbois.jpg'
  },
  {
    id: 3,
    title: 'Cultural Diversity Week - Celebrating Our Global Community',
    description: 'A week-long celebration of the diverse cultures represented in our school community through performances, food, and art.',
    date: '2024-01-10',
    category: 'Event',
    featured: false,
    image: '/originalbois.jpg'
  },
  {
    id: 4,
    title: 'New STEM Lab Opening - Advancing Science Education',
    description: 'Our state-of-the-art STEM laboratory is now open, providing students with cutting-edge technology for hands-on learning.',
    date: '2024-01-08',
    category: 'Facility',
    featured: true,
    image: '/salute.jpg'
  },
  {
    id: 5,
    title: 'Parent-Teacher Association Meeting - January 2024',
    description: 'Monthly PTA meeting to discuss upcoming events, school improvements, and community initiatives.',
    date: '2024-01-25',
    category: 'Meeting',
    featured: false,
    image: '/newsmile.jpg'
  },
  {
    id: 6,
    title: 'School Choir Performs at Local Festival',
    description: 'Our talented choir performed at the annual local music festival, receiving recognition for their outstanding performance.',
    date: '2024-01-12',
    category: 'Achievement',
    featured: false,
    image: '/girlssmile.jpg'
  }
];

const upcomingEvents = [
  {
    title: 'Open Day for Prospective Parents',
    date: 'February 15, 2024',
    time: '10:00 AM - 2:00 PM',
    description: 'Tour our facilities and meet our staff'
  },
  {
    title: 'Year 11 GCSE Information Evening',
    date: 'February 20, 2024',
    time: '6:00 PM - 8:00 PM',
    description: 'Important information about GCSE examinations'
  },
  {
    title: 'Spring Concert',
    date: 'March 10, 2024',
    time: '7:00 PM - 9:00 PM',
    description: 'Musical performances by our students'
  }
];

export default function NewsPage() {
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
            News & Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and upcoming events at Queen's Park Academy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main News Content */}
          <div className="lg:col-span-2">
            {/* Featured News */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
              <div className="space-y-6">
                {newsItems.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className={`hover:shadow-lg transition-shadow duration-300 ${
                      news.featured ? 'border-red-200 bg-red-50/50' : ''
                    }`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-3">
                              <Badge variant={news.featured ? 'default' : 'secondary'}>
                                {news.category}
                              </Badge>
                              {news.featured && <Badge variant="destructive">Featured</Badge>}
                            </div>
                            <CardTitle className="text-xl mb-3 hover:text-red-600 transition-colors">
                              {news.title}
                            </CardTitle>
                            <CardDescription className="text-base mb-4">
                              {news.description}
                            </CardDescription>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(news.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Tag className="h-4 w-4" />
                                <span>{news.category}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-red-600" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{event.description}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href="/events">View All Events</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/admission">Admissions</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/curriculum">Curriculum</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/parents">Parent Portal</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 