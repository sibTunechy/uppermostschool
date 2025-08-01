'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  academics: [
    { name: 'Primary School', href: '/academics/primary' },
    { name: 'Secondary School', href: '/academics/secondary' },
    { name: 'Curriculum', href: '/academics/curriculum' },
    { name: 'Academic Calendar', href: '/events' },
  ],
  admissions: [
    { name: 'Apply Now', href: '/admission' },
    { name: 'Requirements', href: '/admission#requirements' },
    { name: 'Tuition & Fees', href: '/admission#fees' },
    { name: 'Financial Aid', href: '/admission#aid' },
  ],
  resources: [
    { name: 'Student Portal', href: '/student-dashboard' },
    { name: 'Teacher Portal', href: '/teacher-dashboard' },
    { name: 'Parent Resources', href: '/resources/parents' },
    { name: 'Library', href: '/resources/library' },
  ],
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Leadership', href: '/about/leadership' },
    { name: 'Careers', href: '/about/careers' },
    { name: 'News & Updates', href: '/news' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Uppermost School</span>
            </motion.div>
            <p className="text-gray-300 mb-6 max-w-md">
              Nurturing young minds with excellence in education, character building, and holistic development for over two decades.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Dapo Afilaka street Obadeyi Ijaiye</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+(234) 6123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@uppermostschool.edu</span>
              </div>
            </div>
          </div>

          {/* Link Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4">Academics</h3>
            <ul className="space-y-2">
              {footerLinks.academics.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Admissions</h3>
            <ul className="space-y-2">
              {footerLinks.admissions.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Uppermost School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}