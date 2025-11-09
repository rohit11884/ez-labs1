import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import filmStudioImg from "@/assets/film-production-studio.jpg";

const FilmProduction = () => {
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
          "Filmmaking is a chance to live many lifetimes." - Robert Altman
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
                src={filmStudioImg}
                alt="Film Production Studio"
                className="w-full h-full object-cover"
              />
              <div className="text-center mt-3 font-serif text-lg text-navy">Film Production</div>
            </div>

            {/* Decorative Camera Icons */}
            <div className="flex justify-around mt-8">
              <svg className="w-16 h-16 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                <rect x="20" y="30" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="50" cy="50" r="12" />
                <circle cx="75" cy="40" r="5" />
              </svg>
              <svg className="w-16 h-16 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                <rect x="15" y="35" width="70" height="45" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="45" cy="57" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="70" y="45" width="10" height="25" />
              </svg>
              <svg className="w-16 h-16 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="30" y="50" width="40" height="35" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="70" x2="20" y2="90" stroke="currentColor" strokeWidth="3" />
                <line x1="80" y1="70" x2="80" y2="90" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg">Who says films are just an escape?</p>
              <p>
                We see them as a way to live many lives - to feel, to explore, and to tell stories that stay.
                And with each film, we carry new memories and new reasons to keep creating.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-navy">V crafts:</h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Documentaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Corporate Videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>2D Animation Videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>3D Animation Videos</span>
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

export default FilmProduction;
