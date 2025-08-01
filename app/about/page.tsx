'use client';

import { motion } from 'framer-motion';
import { Award, Target, Eye, History, Users, BookOpen, Star, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '@/components/shared/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';

const achievements = [
  { icon: Award, title: '25+ Years', description: 'of Educational Excellence' },
  { icon: Users, title: '1200+', description: 'Happy Students' },
  { icon: BookOpen, title: '15+', description: 'Academic Programs' },
  { icon: Star, title: '95%', description: 'College Acceptance Rate' },
];

const leadership = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Principal',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'With over 20 years in education, Dr. Johnson leads our vision of excellence.',
    credentials: 'Ph.D. in Educational Leadership, M.Ed. in Curriculum Development'
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Vice Principal',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Former university professor specializing in innovative teaching methodologies.',
    credentials: 'Ph.D. in Educational Psychology, M.A. in Teaching'
  },
  {
    name: 'Ms. Emily Rodriguez',
    role: 'Academic Director',
    image: 'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Expert in curriculum design and academic program development.',
    credentials: 'M.Ed. in Curriculum and Instruction, B.A. in Education'
  },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest standards in education, fostering academic achievement and personal growth.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building strong relationships between students, families, and educators to create a supportive learning environment.',
  },
  {
    icon: BookOpen,
    title: 'Innovation',
    description: 'Embracing modern teaching methods and technology to prepare students for the future.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'Promoting honesty, respect, and ethical behavior in all aspects of school life.',
  },
];

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Uppermost School</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering minds, shaping futures, and building tomorrow&#39;s leaders through exceptional education and values.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="text-center">
                <achievement.icon className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold">{achievement.title}</div>
                <div className="text-sm text-blue-200">{achievement.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To provide a nurturing and stimulating educational environment that empowers students to achieve academic excellence, develop critical thinking skills, and become responsible global citizens who contribute positively to society.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <Eye className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be recognized as a leading educational institution that inspires lifelong learning, innovation, and character development, preparing students to excel in an ever-changing world while maintaining strong moral and ethical foundations.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8923769/pexels-photo-8923769.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students in classroom"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
          <Image 
            src="/salute.jpg" 
            alt="Students in classroom" 
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our educational philosophy and shape our school community.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggeredItem key={value.title}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated professionals who guide our educational mission and inspire our community.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <StaggeredItem key={leader.name}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                      <Badge variant="secondary" className="mt-1">{leader.role}</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{leader.description}</p>
                    <p className="text-sm text-gray-500">{leader.credentials}</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <History className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A legacy of excellence spanning over two decades of educational innovation and achievement.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <StaggeredContainer className="space-y-8">
              {[
                { year: '1999', title: 'Foundation', description: 'Excellence Academy was founded with a vision to provide quality education to 100 students.' },
                { year: '2005', title: 'Expansion', description: 'Opened secondary division and introduced advanced science laboratories.' },
                { year: '2012', title: 'Digital Integration', description: 'Launched comprehensive digital learning platform and smart classrooms.' },
                { year: '2018', title: 'Recognition', description: 'Awarded "School of Excellence" by the State Education Board.' },
                { year: '2024', title: 'Innovation Hub', description: 'Established state-of-the-art STEM center and research facilities.' },
              ].map((milestone, index) => (
                <StaggeredItem key={milestone.year}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.year} - {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Community of Excellence
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover why families choose Parental Touch Schools for their children&#39;s educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="px-8 py-3 text-lg">
                <Link href="/admission">
                  Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className=" hover:bg-white/10 px-8 py-3 text-lg">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}