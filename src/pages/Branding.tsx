import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import brandingImg from "@/assets/branding-work.png";

const Branding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen animate-fade-in px-4 py-8">
      {/* Navigation Bar */}
      <div className="container mx-auto mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold">
            <span className="text-coral">V</span>
            <span className="text-navy">Films</span>
          </span>
        </div>
      </div>

      {/* Quote Section */}
      <div className="container mx-auto max-w-5xl mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-navy text-center mb-4 leading-relaxed">
          "A brand is a voice, and a product is a souvenir." - Lisa Gansky
        </h1>
        <div className="h-1 w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-navy to-transparent brush-stroke" />
      </div>

      {/* Back Button */}
      <div className="container mx-auto max-w-5xl mb-8">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="rounded-full border-coral text-coral hover:bg-coral hover:text-white transition-colors"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="animate-scale-in">
            <div className="polaroid-photo">
              <img
                src={brandingImg}
                alt="Branding Work"
                className="w-full h-full object-cover"
              />
              <div className="text-center mt-3 font-serif text-lg text-navy">Branding</div>
            </div>

            {/* Decorative Branding Icons */}
            <div className="flex justify-around mt-8">
              <svg className="w-16 h-16 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                <rect x="20" y="30" width="60" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="40" cy="50" r="8" />
                <rect x="52" y="42" width="20" height="3" />
                <rect x="52" y="50" width="20" height="3" />
                <rect x="52" y="58" width="15" height="3" />
              </svg>
              <svg className="w-16 h-16 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="50" cy="50" r="15" />
                <path d="M50,25 L50,15 M50,75 L50,85 M25,50 L15,50 M75,50 L85,50" stroke="currentColor" strokeWidth="3" />
              </svg>
              <svg className="w-16 h-16 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                <rect x="25" y="30" width="50" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M40,45 L45,52 L60,38" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                A brand isn't just what you see - it's what you remember, what you carry home, and what you trust.
              </p>
              <p>
                We shape brands that people remember, return to, and fall in love with.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-navy">V creates:</h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Branding & Communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Market Mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Content Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Social Media Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Rebranding</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <div className="inline-block">
                <p className="font-script text-xl text-coral mb-2">Explore Now</p>
                <svg className="w-32 h-12" viewBox="0 0 120 40">
                  <path
                    d="M10,20 Q40,10 80,20 T120,25"
                    fill="none"
                    stroke="#ff6b4a"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path d="M110,18 L120,25 L112,30" fill="#ff6b4a" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
