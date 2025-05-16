import { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useToast } from "@/hooks/use-toast";
import { staggerChildren, fadeInUpVariants } from "@/lib/utils";
import { contactInfo } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      // In a real application, you would send this data to the server
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out, I'll get back to you soon.",
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background/50 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-40 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUpVariants()}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build <span className="text-primary">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to bring your blockchain ideas to life? Whether you're looking for a hackathon partner, 
            need help with smart contracts, or want to discuss the latest in Web3 — I'm all ears!
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren(0.2)}
        >
          <motion.div variants={fadeInUpVariants()}>
            <div className="bg-background/80 p-8 rounded-xl border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="resize-none min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUpVariants(0.2)}>
            <div className="bg-background/80 p-8 rounded-xl border border-border h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <i className={`fas fa-${item.icon} text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      {item.isLink ? (
                        <a href={item.linkHref} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mayurgit03" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/mayurp03/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="http://x.com/0xMayur_p" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Interested In</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Hackathons</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Web3 Projects</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Smart Contracts</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">IoT Solutions</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">AI Integration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
