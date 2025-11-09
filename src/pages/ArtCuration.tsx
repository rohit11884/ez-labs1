import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import artCurationImg from "@/assets/art-curation-event.jpg";

const ArtCuration = () => {
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
          "V take art where it belongs, to the people." - Vernita Verna
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
                src={artCurationImg}
                alt="Art Curation Event"
                className="w-full h-full object-cover"
              />
              <div className="text-center mt-3 font-serif text-lg text-navy">Art Curation</div>
            </div>

            {/* Decorative Art Icons */}
            <div className="flex justify-around mt-8">
              <svg className="w-16 h-16 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                <rect x="25" y="20" width="50" height="60" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="50" cy="35" r="8" />
                <path d="M30,50 L45,65 L70,40" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
              <svg className="w-16 h-16 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                <rect x="20" y="25" width="60" height="50" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M30,55 L35,45 L45,60 L55,40 L65,50 L70,55" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <svg className="w-16 h-16 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                <rect x="25" y="30" width="50" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M35,50 Q50,35 65,50" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="42" cy="45" r="3" />
                <circle cx="58" cy="45" r="3" />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Art isn't meant to sit on distant walls - it's meant to breathe, to travel, to belong.
              </p>
              <p>
                Through every festival, every performance, and every gathering, we help stories find their stage and their people.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-navy">V curates:</h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Art Festivals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Live Performances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Community Events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Cultural Storytelling</span>
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

export default ArtCuration;
