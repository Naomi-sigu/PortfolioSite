import { useState } from "react";
import { ChevronDown, ChevronUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  "Python", "Git", "SQL", "Java", "C++", "Kotlin", "TypeScript", "React", "Node.js"
];


export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="py-12 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 fade-in">
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


          <div className="text-center mt-8">
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
