import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/lib/animations'

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  interest: z.string().min(1, 'Please select your interest'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const { toast } = useToast()
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      interest: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. We'll get back to you soon.",
      })
      
      form.reset()
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: '+1 (555) 123-4567',
      subtitle: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'hello@zerodb.audio',
      subtitle: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Zurich, Switzerland',
      subtitle: 'Global Headquarters'
    }
  ]

  return (
    <section id="contact" className="py-32 bg-white dark:bg-satin-black">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            variants={slideInFromLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8">
              Get In
              <span className="text-gold-accent dark:text-gold-glow block">Touch</span>
            </h2>
            
            <p className="text-xl leading-relaxed mb-12 text-platinum dark:text-soft-white/80">
              Ready to experience Zero dB? Our audio consultants are here to help you find the 
              perfect solution for your needs.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gold-accent/20 dark:bg-gold-glow/20 rounded-xl flex items-center justify-center">
                    <info.icon className="text-gold-accent dark:text-gold-glow w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-jet-black dark:text-soft-white">
                      {info.title}
                    </div>
                    <div className="text-platinum dark:text-soft-white/80 text-sm">
                      {info.subtitle}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={slideInFromRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-jet-black dark:text-soft-white">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            className="bg-warm-gray dark:bg-deep-black border-jet-black/20 dark:border-soft-white/20 focus:border-gold-accent dark:focus:border-gold-glow"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-jet-black dark:text-soft-white">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            className="bg-warm-gray dark:bg-deep-black border-jet-black/20 dark:border-soft-white/20 focus:border-gold-accent dark:focus:border-gold-glow"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-jet-black dark:text-soft-white">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className="bg-warm-gray dark:bg-deep-black border-jet-black/20 dark:border-soft-white/20 focus:border-gold-accent dark:focus:border-gold-glow"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-jet-black dark:text-soft-white">
                        Interest
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-warm-gray dark:bg-deep-black border-jet-black/20 dark:border-soft-white/20 focus:border-gold-accent dark:focus:border-gold-glow">
                            <SelectValue placeholder="Select your interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="reference-monitors">Reference Monitors</SelectItem>
                          <SelectItem value="tower-series">Tower Series</SelectItem>
                          <SelectItem value="subwoofers">Subwoofers</SelectItem>
                          <SelectItem value="custom-solutions">Custom Solutions</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-jet-black dark:text-soft-white">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your audio needs..."
                          className="bg-warm-gray dark:bg-deep-black border-jet-black/20 dark:border-soft-white/20 focus:border-gold-accent dark:focus:border-gold-glow resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-gold-accent dark:bg-gold-glow text-jet-black py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 magnetic-button"
                >
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
