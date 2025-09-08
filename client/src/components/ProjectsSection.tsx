import { ExternalLink, Star, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    name: "emailbomber",
    description: "a powerful script in python to send bulk mails",
    language: "Python",
    stars: 69,
    tags: ["app-password", "email-bomber", "emailwithpython"],
    url: "https://github.com/coderatul/emailbomber"
  },
  {
    id: 2,
    name: "automaton-explorer",
    description: "visualize finite automata",
    language: "TypeScript",
    stars: 0,
    tags: ["visualization", "automata", "interactive"],
    url: "https://github.com/coderatul/automaton-explorer"
  },
  {
    id: 3,
    name: "pydesmos",
    description: "an offline py version of desmos using matplotlib and regex",
    language: "Python",
    stars: 0,
    tags: ["matplotlib", "graphing", "calculator"],
    url: "https://github.com/coderatul/pydesmos"
  },
  {
    id: 4,
    name: "cpu-scheduling",
    description: "cpu scheduling algorithm implemented in python",
    language: "Python",
    stars: 4,
    tags: ["cpu-scheduling", "fcfs", "fcfs-scheduling"],
    url: "https://github.com/coderatul/cpu-sheduling"
  },
  {
    id: 5,
    name: "coderatul.github.io",
    description: "Personal portfolio website showcasing projects and skills",
    language: "TypeScript",
    stars: 0,
    tags: ["portfolio", "website", "responsive"],
    url: "https://github.com/coderatul/coderatul.github.io"
  },
  {
    id: 6,
    name: "coderatul",
    description: "Collection of utility scripts and learning projects",
    language: "Python",
    stars: 2,
    tags: ["utilities", "scripts", "learning"],
    url: "https://github.com/coderatul/coderatul"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="projects-title">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="projects-description">
            A collection of my work from GitHub. These projects showcase my skills and interests in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="project-card bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
              data-testid={`project-card-${project.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Github className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground" data-testid={`project-language-${project.id}`}>
                      {project.language}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span data-testid={`project-stars-${project.id}`}>{project.stars}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`project-name-${project.id}`}>
                  {project.name}
                </h3>
                
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="skill-tag px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                      data-testid={`project-tag-${project.id}-${index}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  data-testid={`project-link-${project.id}`}
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Button 
            variant="outline"
            size="lg"
            className="inline-flex items-center px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => window.open('https://github.com/coderatul', '_blank')}
            data-testid="button-view-more-projects"
          >
            <span>View more projects on GitHub</span>
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
