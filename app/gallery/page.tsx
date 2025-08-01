'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Camera,
  Video,
  Calendar,
  Eye,
  Download,
  Share2,
  X,
  ZoomIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '@/components/shared/AnimatedSection';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: 'https://cardiff.imgix.net/__data/assets/image/0006/216969/children-in-science-lab.jpg?w=873&h=491&fit=crop&q=60&auto=format',
    thumbnail: 'https://cardiff.imgix.net/__data/assets/image/0006/216969/children-in-science-lab.jpg?w=873&h=491&fit=crop&q=60&auto=format',
    title: 'Science Fair 2024',
    description: 'Students presenting their innovative science projects',
    category: 'Academic',
    date: '2024-01-15',
    views: 1250,
  },
  {
    id: 2,
    type: 'video',
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Annual Sports Day Highlights',
    description: 'Best moments from our annual sports competition',
    category: 'Sports',
    date: '2024-01-20',
    views: 2100,
    duration: '3:45',
  },
  {
    id: 3,
    type: 'image',
    src: 'https://www.bellanaija.com/wp-content/uploads/2022/04/Image-1-scaled.jpg',
    thumbnail: 'https://www.bellanaija.com/wp-content/uploads/2022/04/Image-1-scaled.jpg',
    title: 'Cultural Heritage Festival',
    description: 'Celebrating diversity through music and dance',
    category: 'Cultural',
    date: '2024-01-25',
    views: 1800,
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.pexels.com/photos/20444547/pexels-photo-20444547.jpeg',
    thumbnail: 'https://images.pexels.com/photos/20444547/pexels-photo-20444547.jpeg',
    title: 'Student Art Exhibition',
    description: 'Showcasing creative talents of our students',
    category: 'Arts',
    date: '2024-02-01',
    views: 950,
  },
  {
    id: 5,
    type: 'video',
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Winter Concert Performance',
    description: 'Beautiful musical performances by our talented students',
    category: 'Cultural',
    date: '2023-12-15',
    views: 3200,
    duration: '5:20',
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'New STEM Laboratory',
    description: 'State-of-the-art facilities for hands-on learning',
    category: 'Infrastructure',
    date: '2024-01-10',
    views: 1400,
  },
  {
    id: 7,
    type: 'image',
    src: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg',
    thumbnail: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg',
    title: 'International Exchange Program',
    description: 'Students participating in global learning opportunities',
    category: 'Academic',
    date: '2024-01-03',
    views: 1100,
  },
  {
    id: 8,
    type: 'video',
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Technology Integration',
    description: 'Modern classrooms with interactive learning tools',
    category: 'Technology',
    date: '2024-01-01',
    views: 1600,
    duration: '2:30',
  },
];

const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Arts', 'Infrastructure', 'Technology'];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[number] | null>(null);

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openLightbox = (item: typeof galleryItems[number]) => {
    setLightboxItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxItem(null);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Explore our vibrant school community through photos and videos capturing memorable moments and achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentIndex(0);
                  }}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>

          {/* Carousel Controls */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </Button>
              <span className="text-sm text-gray-600">
                {currentIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Main Carousel Container */}
            <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              <AnimatePresence mode="wait">
                {filteredItems.length > 0 && (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <div className="relative h-full">
                      {filteredItems[currentIndex]?.type === 'video' ? (
                        <div className="relative h-full bg-black flex items-center justify-center">
                          <video
                            className="max-h-full max-w-full object-contain"
                            poster={filteredItems[currentIndex].thumbnail}
                            controls
                          >
                            <source src={filteredItems[currentIndex].src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="flex items-center space-x-1">
                              <Video className="h-3 w-3" />
                              <span>{filteredItems[currentIndex].duration}</span>
                            </Badge>
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-full">
                          <img
                            src={filteredItems[currentIndex]?.src}
                            alt={filteredItems[currentIndex]?.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="flex items-center space-x-1">
                              <Camera className="h-3 w-3" />
                              <span>Photo</span>
                            </Badge>
                          </div>
                        </div>
                      )}

                      {/* Overlay with item info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <div className="text-white">
                          <Badge variant="outline" className="mb-3 border-white text-white">
                            {filteredItems[currentIndex]?.category}
                          </Badge>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            {filteredItems[currentIndex]?.title}
                          </h3>
                          <p className="text-lg text-gray-200 mb-4">
                            {filteredItems[currentIndex]?.description}
                          </p>
                          <div className="flex items-center space-x-6 text-sm text-gray-300">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(filteredItems[currentIndex]?.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{filteredItems[currentIndex]?.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Zoom button */}
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute top-4 right-4"
                        onClick={() => openLightbox(filteredItems[currentIndex])}
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Arrows */}
              <Button
                variant="secondary"
                size="lg"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0"
                onClick={prevSlide}
                disabled={filteredItems.length <= 1}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0"
                onClick={nextSlide}
                disabled={filteredItems.length <= 1}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full">
                {filteredItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => goToSlide(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentIndex 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Media
              </h2>
              <p className="text-xl text-gray-600">
                Browse through our complete collection of photos and videos
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <StaggeredItem key={item.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div 
                    className="relative aspect-video"
                    onClick={() => goToSlide(index)}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-gray-800 ml-1" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.type === 'video' ? (
                          <><Video className="h-3 w-3 mr-1" />{item.duration}</>
                        ) : (
                          <><Camera className="h-3 w-3 mr-1" />Photo</>
                        )}
                      </Badge>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(item);
                      }}
                    >
                      <ZoomIn className="h-3 w-3" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{formatDate(item.date)}</span>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="secondary"
                size="sm"
                className="absolute -top-12 right-0 z-10"
                onClick={closeLightbox}
              >
                <X className="h-4 w-4" />
              </Button>
              
              {lightboxItem.type === 'video' ? (
                <video
                  className="max-h-[80vh] max-w-full"
                  controls
                  autoPlay
                >
                  <source src={lightboxItem.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{lightboxItem.title}</h3>
                <p className="text-gray-200 mb-2">{lightboxItem.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <span>{formatDate(lightboxItem.date)}</span>
                    <span>{lightboxItem.views} views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="secondary" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}