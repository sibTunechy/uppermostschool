'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  Clock, 
  User, 
  Mail, 
  Phone,
  MapPin,
  GraduationCap,
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '@/components/shared/AnimatedSection';
import LoadingSpinner from '@/components/shared/LoadingSpinner';

const admissionSchema = z.object({
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  grade: z.string().min(1, 'Please select a grade'),
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  previousSchool: z.string().optional(),
  medicalConditions: z.string().optional(),
  additionalInfo: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms and conditions'),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

const steps = [
  { id: 1, title: 'Application Submission', description: 'Submit online application form', icon: FileText },
  { id: 2, title: 'Document Verification', description: 'Submit required documents', icon: CheckCircle },
  { id: 3, title: 'Assessment', description: 'Student assessment and interview', icon: User },
  { id: 4, title: 'Admission Decision', description: 'Receive admission notification', icon: Mail },
  { id: 5, title: 'Enrollment', description: 'Complete enrollment process', icon: GraduationCap },
];

const requirements = [
  'Birth Certificate (Original + Photocopy)',
  'Previous School Records/Report Cards',
  'Transfer Certificate (if applicable)',
  'Immunization Records',
  'Recent Passport-sized Photographs (4 copies)',
  'Parent/Guardian ID Proof',
  'Address Proof',
  'Medical Certificate',
];

const fees = [
  { grade: 'Nursery - KG2', admission: '$500', tuition: '$8,000/year', total: '$8,500' },
  { grade: 'Grade 1-5', admission: '$600', tuition: '$10,000/year', total: '$10,600' },
  { grade: 'Grade 6-8', admission: '$700', tuition: '$12,000/year', total: '$12,700' },
  { grade: 'Grade 9-12', admission: '$800', tuition: '$15,000/year', total: '$15,800' },
];

export default function AdmissionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      studentName: '',
      dateOfBirth: '',
      grade: '',
      parentName: '',
      email: '',
      phone: '',
      address: '',
      previousSchool: '',
      medicalConditions: '',
      additionalInfo: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    toast.success('Application submitted successfully! We will contact you within 2-3 business days.');
    form.reset();
    setIsSubmitting(false);
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Begin your child&#39;s journey to excellence. Apply now for the upcoming academic year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Admission Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow these simple steps to complete your child&#39;s admission application.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <StaggeredItem key={step.id}>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <Badge variant="secondary" className="text-xs">
                        {step.id}
                      </Badge>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Application Form
              </h2>
              <p className="text-xl text-gray-600">
                Please fill out all required information accurately.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-blue-600" />
                  Student Admission Application
                </CardTitle>
                <CardDescription>
                  All fields marked with * are required
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Student Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Student Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="studentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Student Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter student's full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date of Birth *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="grade"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Grade Applying For *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select grade" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="nursery">Nursery</SelectItem>
                                <SelectItem value="kg1">KG1</SelectItem>
                                <SelectItem value="kg2">KG2</SelectItem>
                                <SelectItem value="grade1">Grade 1</SelectItem>
                                <SelectItem value="grade2">Grade 2</SelectItem>
                                <SelectItem value="grade3">Grade 3</SelectItem>
                                <SelectItem value="grade4">Grade 4</SelectItem>
                                <SelectItem value="grade5">Grade 5</SelectItem>
                                <SelectItem value="grade6">Grade 6</SelectItem>
                                <SelectItem value="grade7">Grade 7</SelectItem>
                                <SelectItem value="grade8">Grade 8</SelectItem>
                                <SelectItem value="grade9">Grade 9</SelectItem>
                                <SelectItem value="grade10">Grade 10</SelectItem>
                                <SelectItem value="grade11">Grade 11</SelectItem>
                                <SelectItem value="grade12">Grade 12</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="previousSchool"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Previous School (if applicable)</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter previous school name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Parent/Guardian Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Parent/Guardian Information
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="parentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent/Guardian Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter parent/guardian name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Enter email address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Home Address *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Enter complete home address" 
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Additional Information
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="medicalConditions"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Medical Conditions or Allergies</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please list any medical conditions, allergies, or special needs" 
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              This information helps us provide better care for your child.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any additional information you'd like to share" 
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="agreeToTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the terms and conditions *
                              </FormLabel>
                              <FormDescription>
                                By checking this box, you agree to our admission policies and terms of service.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          Submitting Application...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Requirements and Fees */}
      
    </div>
  );
}