'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, ChevronDown, Search, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Gallery', href: '/key-information' },
  { name: 'Admissions', href: '/admission' },
  { name: 'Curriculum', href: '/curriculum' },
  { name: 'Parents', href: '/parents' },
  { name: 'Contact us', href: '/contact' },
];

const utilityNavigation = [
  { name: 'News & Dates', href: '/news', hasDropdown: true },
  { name: 'Work with Us', href: '/careers', hasDropdown: true },
];

const dashboards = [
  { name: 'Student Portal', href: '/student-dashboard', description: 'Access grades, assignments, and schedules' },
  { name: 'Teacher Portal', href: '/teacher-dashboard', description: 'Manage classes and student progress' },
  { name: 'Admin Portal', href: '/admin', description: 'Administrative tools and analytics' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-black/80 backdrop-blur-md'
      }`}
    >
      {/* Utility Navigation */}
      <div className={`border-b ${scrolled || !isHomePage ? 'border-gray-200' : 'border-white/20'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end py-2 space-x-4">
            {utilityNavigation.map((item) => (
              <div key={item.name} className="flex items-center space-x-1">
                <Link
                  href={item.href}
                  className={`text-xs font-medium transition-colors hover:text-red-600 px-2 py-1 rounded ${
                    scrolled || !isHomePage ? 'text-gray-600' : 'text-white/80'
                  }`}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <ChevronDown className={`h-3 w-3 ${
                    scrolled || !isHomePage ? 'text-gray-600' : 'text-white/80'
                  }`} />
                )}
              </div>
            ))}
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="ghost"
                className={`w-8 h-8 p-0 ${
                  scrolled || !isHomePage ? 'text-gray-600 hover:text-red-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className={`w-8 h-8 p-0 ${
                  scrolled || !isHomePage ? 'text-gray-600 hover:text-red-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className={`w-8 h-8 p-0 ${
                  scrolled || !isHomePage ? 'text-gray-600 hover:text-red-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className={`w-8 h-8 p-0 ${
                  scrolled || !isHomePage ? 'text-gray-600 hover:text-red-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2"
              >
                <GraduationCap className="h-8 w-8" />
                <span className={`text-xl font-bold ${
                  scrolled || !isHomePage ? 'text-blue-600' : 'text-white'
                }`}>
                  Coral Ville School
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link 
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-red-600 px-3 py-2 rounded-md ${
                        scrolled || !isHomePage 
                          ? pathname === item.href 
                            ? 'text-red-600 bg-red-50' 
                            : 'text-gray-700 hover:text-red-600'
                          : pathname === item.href
                            ? 'text-red-400 bg-white/10'
                            : 'text-white hover:text-red-200'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={scrolled || !isHomePage ? 'text-gray-700' : 'text-white'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 mt-2 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}