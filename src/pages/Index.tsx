import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative flex items-center justify-center px-4 pt-20 sm:pt-0">
        {/* Decorative Mandala - Left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M100,10 L100,190 M10,100 L190,100" stroke="currentColor" strokeWidth="0.5" />
            <path d="M30,30 L170,170 M170,30 L30,170" stroke="currentColor" strokeWidth="0.5" />
            {/* Petals */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 100 + 60 * Math.cos(angle);
              const y1 = 100 + 60 * Math.sin(angle);
              const x2 = 100 + 40 * Math.cos(angle + 0.3);
              const y2 = 100 + 40 * Math.sin(angle + 0.3);
              const x3 = 100 + 40 * Math.cos(angle - 0.3);
              const y3 = 100 + 40 * Math.sin(angle - 0.3);
              return (
                <path
                  key={i}
                  d={`M100,100 Q${x2},${y2} ${x1},${y1} Q${x3},${y3} 100,100`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Logo Side */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="text-center">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4">
                  <span className="text-coral">V</span>
                  <span className="text-navy">Films</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="text-center md:text-left space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-script text-navy leading-relaxed">
              Varnan is where stories find their voice and form
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xl sm:text-2xl text-coral font-medium">
              <span>Films</span>
              <span>.</span>
              <span>Brands</span>
              <span>.</span>
              <span>Art</span>
            </div>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-xl mx-auto md:mx-0">
              Since 2009, V've been telling stories - stories of people, their journeys, and the places that shape them.
              Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by
              listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
              V doesn't just tell stories - V honors them.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-coral hover:text-coral/80 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Sticky Note */}
            <div className="animate-fade-in">
              <div className="bg-yellow-100 p-8 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <p className="text-navy text-sm sm:text-base leading-relaxed font-serif italic">
                  Some craft films. Some build brands. Some curate art. We bring it all together - a collective of storytellers
                  driven by one belief: every project deserves to be more than just a message; it should become a masterpiece.
                  From first spark to final frame, from raw ideas to timeless visuals - we shape stories that stay with you.
                </p>
              </div>

              {/* Building Icon */}
              <div className="mt-12 flex justify-center">
                <svg className="w-32 h-32 text-coral opacity-60" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="20" y="30" width="60" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="30" y="40" width="15" height="20" fill="currentColor" opacity="0.6" />
                  <rect x="55" y="40" width="15" height="20" fill="currentColor" opacity="0.6" />
                  <path d="M35,70 Q50,60 65,70" fill="none" stroke="currentColor" strokeWidth="3" />
                  <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.8" />
                </svg>
              </div>

              <p className="text-center mt-6 font-script text-2xl text-navy">Branding Experts</p>
            </div>

            {/* Team Silhouettes */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <p className="text-center font-script text-2xl text-navy mb-8">Film Makers</p>
                <svg className="w-full h-64" viewBox="0 0 500 250">
                  {/* Silhouettes */}
                  <ellipse cx="100" cy="80" rx="25" ry="35" fill="#15496d" />
                  <rect x="75" y="115" width="50" height="100" rx="5" fill="#15496d" />
                  
                  <ellipse cx="200" cy="75" rx="28" ry="38" fill="#15496d" />
                  <rect x="172" y="113" width="56" height="110" rx="5" fill="#15496d" />
                  
                  <ellipse cx="300" cy="70" rx="30" ry="40" fill="#15496d" />
                  <rect x="270" y="110" width="60" height="115" rx="5" fill="#15496d" />
                  
                  <ellipse cx="400" cy="75" rx="27" ry="37" fill="#15496d" />
                  <rect x="373" y="112" width="54" height="108" rx="5" fill="#15496d" />
                </svg>
                
                <p className="text-right font-script text-2xl text-navy mt-6">Art Curators</p>

                {/* Arrow decorations */}
                <svg className="absolute -top-8 left-0 w-32 h-32 text-navy opacity-40" viewBox="0 0 100 100">
                  <path d="M20,80 Q50,20 80,60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M75,55 L80,60 L75,65" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                <svg className="absolute -bottom-8 right-0 w-32 h-32 text-navy opacity-40" viewBox="0 0 100 100">
                  <path d="M80,20 Q50,80 20,40" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M25,35 L20,40 L25,45" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg font-medium text-navy mb-4">Take a closer look at the stories V bring to life.</p>
                <Button
                  onClick={() => scrollToSection("#portfolio")}
                  className="bg-coral hover:bg-coral/90 text-white rounded-full px-8"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl font-serif text-navy">A montage of familiar faces and names.</h2>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Some stories come from the biggest names. Others begin with bold, rising voices. We've been fortunate to walk
                alongside both - listening, creating, and building stories that matter.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-yellow-100 p-6 shadow-md transform hover:-rotate-2 transition-transform">
                  <div className="text-4xl sm:text-5xl font-bold text-navy mb-2">85+</div>
                  <div className="text-sm sm:text-base text-coral font-medium">Projects</div>
                </div>
                <div className="bg-yellow-100 p-6 shadow-md transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="text-4xl sm:text-5xl font-bold text-navy mb-2">50+</div>
                  <div className="text-sm sm:text-base text-coral font-medium">Happy Clients</div>
                </div>
                <div className="bg-yellow-100 p-6 shadow-md transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="text-4xl sm:text-5xl font-bold text-navy mb-2">10+</div>
                  <div className="text-sm sm:text-base text-coral font-medium">Experts Team</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-2xl sm:text-3xl font-script text-navy leading-relaxed">
                Every project is more than just a brief - it's a new chapter waiting to be written. Together, we've crafted tales that inspire, connect, and endure.
              </p>

              {/* Brand Logos scattered */}
              <div className="relative h-64 mt-12">
                <div className="absolute top-0 left-10 text-coral font-bold text-xl opacity-60 transform -rotate-12">
                  Coca-Cola
                </div>
                <div className="absolute top-12 right-20 text-coral font-bold text-2xl opacity-70 transform rotate-6">
                  TED
                </div>
                <div className="absolute bottom-20 left-1/4 text-coral font-bold text-lg opacity-60 transform -rotate-6">
                  ARION
                </div>
                <div className="absolute bottom-12 right-12 text-coral font-bold text-3xl opacity-70 transform rotate-12">
                  TED
                </div>
                <div className="absolute top-32 left-1/3 text-coral font-bold text-base opacity-50 transform rotate-3">
                  BT
                </div>

                {/* Decorative Mountain Illustration */}
                <svg className="absolute bottom-0 right-0 w-48 h-48 text-navy opacity-30" viewBox="0 0 200 200">
                  <path d="M20,180 L60,100 L100,140 L140,80 L180,180 Z" fill="currentColor" />
                  <circle cx="160" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                  {[...Array(24)].map((_, i) => (
                    <line
                      key={i}
                      x1="160"
                      y1="40"
                      x2={160 + 40 * Math.cos((i * 15 * Math.PI) / 180)}
                      y2={40 + 40 * Math.sin((i * 15 * Math.PI) / 180)}
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-24 px-4 relative">
        {/* Decorative border at top */}
        <div className="absolute top-0 left-0 right-0 h-16 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="lace" x="0" y="0" width="100" height="64" patternUnits="userSpaceOnUse">
              <path d="M0,32 Q25,0 50,32 T100,32" fill="none" stroke="#ff6b4a" strokeWidth="2" />
              <circle cx="0" cy="32" r="8" fill="#ff6b4a" />
              <circle cx="50" cy="32" r="8" fill="#ff6b4a" />
              <circle cx="100" cy="32" r="8" fill="#ff6b4a" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#lace)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl sm:text-4xl text-center text-navy mb-4 font-serif brush-stroke">
            The storyboard reveals the breadth of our craft.
          </h2>

          {/* Polaroid Photos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {/* Film Production */}
            <div className="animate-fade-in">
              <div 
                className="polaroid-photo group cursor-pointer hover-scale"
                onClick={() => navigate('/film-production')}
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-yellow-100 to-orange-100 overflow-hidden">
                  <div className="w-full h-full bg-navy/10 flex items-center justify-center">
                    <svg className="w-24 h-24 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                      <rect x="10" y="30" width="80" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
                      <circle cx="30" cy="55" r="8" />
                      <rect x="45" y="45" width="35" height="20" rx="2" />
                      <path d="M20,20 L30,30 M80,20 L70,30" stroke="currentColor" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                <div className="text-center mt-3 font-serif text-lg text-navy">Film Production</div>
              </div>
            </div>

            {/* Branding */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div 
                className="polaroid-photo group cursor-pointer hover-scale"
                onClick={() => navigate('/branding')}
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-orange-100 to-red-100 overflow-hidden">
                  <div className="w-full h-full bg-navy/10 flex items-center justify-center">
                    <svg className="w-24 h-24 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                      <rect x="20" y="30" width="60" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
                      <circle cx="40" cy="50" r="8" />
                      <rect x="52" y="42" width="20" height="3" />
                      <rect x="52" y="50" width="20" height="3" />
                      <rect x="52" y="58" width="15" height="3" />
                    </svg>
                  </div>
                </div>
                <div className="text-center mt-3 font-serif text-lg text-navy">Branding</div>
              </div>
            </div>

            {/* Art Curation */}
            <div className="animate-fade-in sm:col-span-2 lg:col-span-1" style={{ animationDelay: "0.2s" }}>
              <div 
                className="polaroid-photo group cursor-pointer hover-scale"
                onClick={() => navigate('/art-curation')}
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="w-full h-full bg-navy/10 flex items-center justify-center">
                    <svg className="w-24 h-24 text-navy opacity-40" viewBox="0 0 100 100" fill="currentColor">
                      <rect x="25" y="20" width="50" height="60" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
                      <circle cx="50" cy="35" r="8" />
                      <path d="M30,50 L45,65 L70,40" fill="none" stroke="currentColor" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                <div className="text-center mt-3 font-serif text-lg text-navy">Art Curation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative border at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <use href="#lace" />
          </svg>
        </div>
      </section>

      {/* Video Reel Section */}
      <section id="services" className="py-16 sm:py-24 px-4 relative">
        {/* Decorative Camera */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <svg className="w-32 h-32 text-coral opacity-30" viewBox="0 0 100 100">
            <rect x="20" y="40" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="75" y="50" width="15" height="20" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="30" x2="50" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="30" x2="50" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="70" y1="30" x2="50" y2="40" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Decorative Mandala - Right */}
        <div className="absolute right-0 top-1/4 w-48 h-48 opacity-10 hidden lg:block">
          <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 90 * Math.cos((i * 30 * Math.PI) / 180)}
                y2={100 + 90 * Math.sin((i * 30 * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-navy mb-4 font-serif">The Highlight Reel</h2>
            <p className="text-foreground/80">Watch the magic we've captured.</p>
          </div>

          {/* Film Strip Frame */}
          <div className="relative bg-white p-4 sm:p-8 shadow-2xl">
            {/* Film strip holes */}
            <div className="absolute top-2 left-2 right-2 flex justify-between">
              {[...Array(11)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-sm bg-muted" />
              ))}
            </div>
            <div className="absolute bottom-2 left-2 right-2 flex justify-between">
              {[...Array(11)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-sm bg-muted" />
              ))}
            </div>

            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-black/10" />
              <button className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 relative">
        {/* Decorative Mandala corners */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
            {[...Array(3)].map((_, ring) => (
              <circle
                key={ring}
                cx="200"
                cy="0"
                r={60 + ring * 30}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
            {[...Array(16)].map((_, i) => (
              <line
                key={i}
                x1="200"
                y1="0"
                x2={200 + 150 * Math.cos((i * 22.5 * Math.PI) / 180)}
                y2={0 + 150 * Math.sin((i * 22.5 * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-coral">
            {[...Array(3)].map((_, ring) => (
              <circle
                key={ring}
                cx="0"
                cy="200"
                r={60 + ring * 30}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
            {[...Array(16)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1="200"
                x2={0 + 150 * Math.cos((i * 22.5 * Math.PI) / 180)}
                y2={200 + 150 * Math.sin((i * 22.5 * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left Content */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-script text-navy leading-relaxed">Join the Story</h2>
              <p className="text-lg text-navy font-medium">Ready to bring your vision to life? Let's talk.</p>
              
              <div className="space-y-4 pt-8">
                <p className="text-sm sm:text-base text-foreground/80">
                  Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.
                </p>
                <p className="text-sm sm:text-base text-foreground/80">Let's catch up over coffee.</p>
                <p className="text-sm sm:text-base text-foreground/80">
                  Great stories always begin with a good conversation
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-smooth-lg border border-border/50">
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-8 mt-8 text-coral text-sm sm:text-base">
                <a href="mailto:vernita@varnanfilms.co.in" className="hover:underline flex items-center gap-2">
                  <Mail size={18} />
                  vernita@varnanfilms.co.in
                </a>
                <a href="tel:+919873684567" className="hover:underline flex items-center gap-2">
                  <Phone size={18} />
                  +91 98736 84567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold">
              <span className="text-coral">V</span>
              <span className="text-navy">Films</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Varnan Films. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
