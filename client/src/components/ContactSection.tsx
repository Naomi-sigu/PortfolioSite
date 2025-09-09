import { useState } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    id: 'email',
    title: 'Email',
    value: 'stl.sigu@gmail.com',
    href: 'mailto:stl.sigu@gmail.com',
    icon: Mail
  },
  {
    id: 'github',
    title: 'GitHub',
    value: 'github.com/Naomi-sigu',
    href: 'https://github.com/Naomi-sigu/',
    icon: Github
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/naomi-sigu',
    href: 'https://www.linkedin.com/in/naomi-sigu/',
    icon: Linkedin
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
         Get In Touch
          </h2>
          <p className="text-xl text-left text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            Feel free to reach out for collaborations, opportunities, or just to say hi! I'm always open to discussing new projects and ideas.
          </p>
        </div>

        <div className="fade-in">
          {/* Contact Form - Now at the top */}
          <Card className="bg-card/50 border border-border mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="contact-form-title">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-background border-border focus:border-primary"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-background border-border focus:border-primary"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-background border-border focus:border-primary"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    required
                    className="w-full bg-background border-border focus:border-primary resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links and Name - Now at the bottom */}
          <div className="text-center">
            
            <div className="flex justify-center items-center space-x-6">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a 
                    key={contact.id}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors group"
                    data-testid={`contact-social-${contact.id}`}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium">{contact.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
