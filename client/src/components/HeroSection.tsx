import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/hero_1757338533370.webp";

export default function HeroSection() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay for text readability - 40% transparency as requested */}
      <div className="absolute inset-0 hero-overlay bg-gradient-to-br from-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <p
            className="text-lg text-muted-foreground mb-4"
            data-testid="hero-greeting"
          >
            Hello, I'm
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            data-testid="hero-name"
          >
            Neema Sigu
          </h1>
          <h2
            className="text-2xl md:text-3xl text-primary mb-8 font-medium"
            data-testid="hero-title"
          >
            Data & Software Engineer
          </h2>
          <p
            className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
            data-testid="hero-description"
          >
            I'm a tech enthusiast exploring new technologies and ideas.
            Passionate about Python & AI development and creating
            projects that solve real problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              onClick={() => handleScrollTo("#projects")}
              data-testid="button-view-projects"
            >
              <span>Check out my projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="inline-flex items-center px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => handleScrollTo("#contact")}
              data-testid="button-get-in-touch"
            >
              <span>Get in touch</span>
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
