import { useState } from "react";
import { ChevronDown, ChevronUp, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "Python", "Git", "SQL", "Java", "C++", "Kotlin", "TypeScript", "React", "Node.js"
];

const blogs = [
  {
    id: 1,
    title: "Free custom domain for your projects 😉",
    description: "The GitHub Student Developer Pack offers students free access to premium developer tools and...",
    date: "5/4/2025",
    url: "https://dev.to/coderatul/free-custom-domain-for-your-projects-3j7j"
  },
  {
    id: 2,
    title: "Host Lovable.dev Project on github pages 😺",
    description: "Deploying a Lovable.dev Project to GitHub Pages link to the blog to get free custom .me...",
    date: "5/2/2025",
    url: "https://dev.to/coderatul/host-lovabledev-project-on-github-pages-1c61"
  },
  {
    id: 3,
    title: "hey guys speed up your python code, especially with dynamic programming and recursive functions",
    description: "Cache in Python ! Atul Kushwaha ・ Apr 11 ...",
    date: "4/11/2025",
    url: "https://dev.to/coderatul/hey-guys-speed-up-your-python-code-especially-with-dynamic-programming-and-recursive-functions-2hol"
  }
];

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="about-title">
            About Me
          </h2>
        </div>

        <div className="fade-in">
          <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
            <p className="text-lg leading-relaxed mb-6" data-testid="about-intro">
              I'm an open source enthusiast exploring new technologies and ideas. Passionate about Python development and creating cool learning projects that solve real problems.
            </p>
            
            <div id="about-preview">
              <p className="text-lg leading-relaxed mb-6" data-testid="about-gate">
                🎓 GATE 2025 qualified and currently preparing for GATE CSE 2026.
              </p>
            </div>

            {isExpanded && (
              <div id="about-full" className="space-y-6">
                <p className="text-lg leading-relaxed" data-testid="about-focus">
                  I enjoy building projects that help visualize complex concepts and make learning more intuitive. My focus is on creating tools that bring abstract ideas to life through interactive visualizations.
                </p>
                <p className="text-lg leading-relaxed" data-testid="about-experience">
                  Currently pursuing my Computer Science degree, I've developed a strong foundation in algorithms, data structures, and software engineering principles. My projects range from practical tools like email automation scripts to educational visualizations for finite automata.
                </p>
                <p className="text-lg leading-relaxed" data-testid="about-philosophy">
                  I believe in learning through building and sharing knowledge with the community. Every project I work on is an opportunity to explore new technologies and solve interesting challenges.
                </p>
              </div>
            )}

            <button
              onClick={toggleExpanded}
              className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center"
              data-testid="button-read-more"
            >
              {isExpanded ? "Read less" : "Read more"} 
              {isExpanded ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="skills-title">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="skill-tag px-4 py-2 bg-muted/20 text-muted-foreground rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  data-testid={`skill-${index}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Blogs */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground" data-testid="blogs-title">
                Recent Blogs
              </h3>
              <a 
                href="https://dev.to/coderatul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors flex items-center"
                data-testid="link-dev-to"
              >
                dev.to/coderatul <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="space-y-6">
              {blogs.map((blog) => (
                <Card 
                  key={blog.id}
                  className="border border-border hover:border-primary/30 transition-colors"
                  data-testid={`blog-card-${blog.id}`}
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2" data-testid={`blog-title-${blog.id}`}>
                      <a 
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {blog.title}
                      </a>
                    </h4>
                    <p className="text-muted-foreground mb-3" data-testid={`blog-description-${blog.id}`}>
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span data-testid={`blog-date-${blog.id}`}>{blog.date}</span>
                      <a 
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors flex items-center"
                        data-testid={`blog-link-${blog.id}`}
                      >
                        Read more <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
              onClick={() => {
                // In a real implementation, this would download or open the resume
                window.open('#', '_blank');
              }}
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
