'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Filter,
  Search,
  ChevronRight,
  Star,
  Trophy,
  Music,
  BookOpen,
  Palette,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '@/components/shared/AnimatedSection';
import Link from 'next/link';

const eventCategories = [
  { value: 'all', label: 'All Events', icon: Calendar },
  { value: 'academic', label: 'Academic', icon: BookOpen },
  { value: 'sports', label: 'Sports', icon: Trophy },
  { value: 'cultural', label: 'Cultural', icon: Music },
  { value: 'arts', label: 'Arts', icon: Palette },
  { value: 'community', label: 'Community', icon: Heart },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Inter House Sport Fair 2024',
    description: 'Students represent different colors while showcasing their athletic skills and compete in various sports events during this exciting annual fair.',
    date: '2024-02-15',
    time: '9:00 AM - 4:00 PM',
    location: 'The field',
    category: 'sport',
    featured: true,
    image: 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/KARIS-SCHOOL-INTER-HOUSE-SPORTS-2016-420.jpeg',
    attendees: 250,
    price: 'Free',
  },
  {
    id: 2,
    title: 'Spring Sports Championship',
    description: 'Inter-house sports competition featuring basketball, soccer, track and field events.',
    date: '2024-02-20',
    time: '8:00 AM - 6:00 PM',
    location: 'Sports Complex',
    category: 'sports',
    featured: false,
    image: 'https://www.shutterstock.com/image-photo/kids-playing-football-ground-on-600nw-1876237810.jpg',
    attendees: 400,
    price: 'Free',
  },
  {
    id: 3,
    title: 'Cultural Day Festival',
    description: 'Celebrating diversity through music, dance, food, and traditional performances from around the world.',
    date: '2024-02-25',
    time: '5:00 PM - 9:00 PM',
    location: 'School Grounds',
    category: 'cultural',
    featured: true,
    image: 'https://fulllifeschools.com/wp-content/uploads/2017/12/Fls-Culture4-1050x770.jpg',
    attendees: 500,
    price: 'Free',
  },
  {
    id: 4,
    title: 'Student Art Exhibition',
    description: 'Showcasing the creative talents of our students through paintings, sculptures, and digital art.',
    date: '2024-03-01',
    time: '10:00 AM - 8:00 PM',
    location: 'Art Gallery',
    category: 'arts',
    featured: false,
    image: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=800',
    attendees: 150,
    price: 'Free',
  },
  {
    id: 5,
    title: 'Parent-Teacher Conference',
    description: 'Individual meetings between parents and teachers to discuss student progress and development.',
    date: '2024-03-05',
    time: '2:00 PM - 7:00 PM',
    location: 'Classrooms',
    category: 'academic',
    featured: false,
    image: 'https://images.pexels.com/photos/8923769/pexels-photo-8923769.jpeg?auto=compress&cs=tinysrgb&w=800',
    attendees: 300,
    price: 'Free',
  },
  {
    id: 6,
    title: 'Community Service Day',
    description: 'Students and families come together to give back to the community through various service projects.',
    date: '2024-03-10',
    time: '9:00 AM - 3:00 PM',
    location: 'Various Locations',
    category: 'community',
    featured: false,
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    attendees: 200,
    price: 'Free',
  },
];

const pastEvents = [
  {
    id: 7,
    title: 'Winter Concert 2023',
    description: 'A magical evening of music featuring our school choir, band, and orchestra.',
    date: '2023-12-15',
    category: 'cultural',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    attendees: 350,
  },
  {
    id: 8,
    title: 'Mathematics Olympiad',
    description: 'Regional mathematics competition where our students excelled and won multiple awards.',
    date: '2023-11-20',
    category: 'academic',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    attendees: 100,
  },
  {
    id: 9,
    title: 'Halloween Costume Contest',
    description: 'Students showcased their creativity with amazing costumes and enjoyed fun activities.',
    date: '2023-10-31',
    category: 'cultural',
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
    attendees: 400,
  },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = eventCategories.find(cat => cat.value === category);
    return categoryData?.icon || Calendar;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">School Events</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover exciting events, competitions, and activities happening at Parental Touch Schools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        <div className="flex items-center space-x-2">
                          <category.icon className="h-4 w-4" />
                          <span>{category.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </AnimatedSection>

          {/* Category Pills */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              {eventCategories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="flex items-center space-x-2"
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Events</h2>
              <p className="text-xl text-gray-600">Don&#39;t miss these special upcoming events</p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="space-y-8">
            {upcomingEvents.filter(event => event.featured).map((event) => (
              <StaggeredItem key={event.id}>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <Badge variant="destructive">Featured</Badge>
                        <Badge variant="secondary" className="capitalize">
                          {event.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-3 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-3 text-blue-600" />
                          <span>{event.attendees} expected attendees</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-green-600">
                          {event.price}
                        </div>
                        <Button size="lg">
                          Learn More <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">Mark your calendar for these exciting events</p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(event => !event.featured).map((event) => {
              const CategoryIcon = getCategoryIcon(event.category);
              return (
                <StaggeredItem key={event.id}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="capitalize">
                          <CategoryIcon className="h-3 w-3 mr-1" />
                          {event.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-green-600">
                          {event.price}
                        </div>
                        <Button variant="outline" size="sm">
                          Details <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              );
            })}
          </StaggeredContainer>

          {filteredEvents.length === 0 && (
            <AnimatedSection delay={0.2}>
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
              <p className="text-xl text-gray-600">Highlights from our recent successful events</p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => {
              const CategoryIcon = getCategoryIcon(event.category);
              return (
                <StaggeredItem key={event.id}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden opacity-90">
                    <div className="relative h-48">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="capitalize bg-white/90">
                          <CategoryIcon className="h-3 w-3 mr-1" />
                          {event.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              );
            })}
          </StaggeredContainer>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Calendar className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Events
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our event calendar to never miss an important school event or activity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                Subscribe to Calendar
              </Button>
              <Button size="lg" variant="secondary" className=" hover:bg-white/10 px-8 py-3 text-lg">
                <Link href="/contact">
                  Contact Event Coordinator
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}