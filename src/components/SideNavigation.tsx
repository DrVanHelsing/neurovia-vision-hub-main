import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavSection {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface SideNavigationProps {
  sections: NavSection[];
  className?: string;
}

const SideNavigation = ({ sections, className }: SideNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  return (
    <>
      {/* Mobile Toggle Button - Fixed and Always Visible */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed right-4 top-24 z-50 md:hidden glass border-white/20 hover:border-aurora/50 transition-all shadow-lg",
          isOpen && "bg-aurora/30 border-aurora/50"
        )}
        size="icon"
        variant="outline"
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </Button>

      {/* Side Navigation - Fixed Desktop Version */}
      <nav
        className={cn(
          "fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-300",
          "hidden md:block max-h-[calc(100vh-200px)] overflow-y-auto",
          className
        )}
        style={{
          position: 'fixed',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(139, 92, 246, 0.3) transparent'
        }}
      >
        <div className="bg-background/60 border border-white/20 rounded-xl p-4 max-w-[260px] backdrop-blur-md shadow-lg shadow-black/10 hover:bg-background/70 hover:border-aurora/40 transition-all">
          <h3 className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-aurora rounded-full animate-pulse"></span>
            Quick Navigation
          </h3>
          <ul className="space-y-1.5">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 group",
                    activeSection === section.id
                      ? "bg-aurora/25 text-aurora border-l-3 border-aurora shadow-md shadow-aurora/20 font-semibold"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/10 hover:border-l-3 hover:border-aurora/40"
                  )}
                >
                  {section.icon && (
                    <span className={cn(
                      "transition-all duration-200",
                      activeSection === section.id ? "scale-110 text-aurora" : "group-hover:scale-105"
                    )}>
                      {section.icon}
                    </span>
                  )}
                  <span className="flex-1 truncate">{section.label}</span>
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 transition-all duration-200 flex-shrink-0",
                      activeSection === section.id
                        ? "opacity-100 translate-x-0 text-aurora"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/90 backdrop-blur-md z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-white/20 z-50 md:hidden transition-transform duration-300 shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 pt-24 h-full overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-6 bg-aurora rounded-full"></span>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Navigation
            </h3>
          </div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "w-full text-left px-4 py-3.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 font-medium",
                    activeSection === section.id
                      ? "bg-aurora/20 text-aurora border-l-4 border-aurora shadow-lg shadow-aurora/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/10 border-l-4 border-transparent hover:border-white/30"
                  )}
                >
                  {section.icon && (
                    <span className={cn(
                      "transition-transform duration-200",
                      activeSection === section.id ? "scale-110" : "group-hover:scale-105"
                    )}>
                      {section.icon}
                    </span>
                  )}
                  <span className="flex-1">{section.label}</span>
                  {activeSection === section.id && (
                    <ChevronRight className="w-4 h-4 text-aurora animate-pulse" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;
