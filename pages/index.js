import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const portfolioItems = [
    {
      id: 1,
      title: "Waves of Rest",
      image: "/Bench Seat.JPG",
      description: "Architectural photography exploring curves and light like ripples on a pond",
      frogEmoji: "🐸",
      pondEmoji: "🪷"
    },
    {
      id: 2,
      title: "Observance",
      image: "/DSC_0854.JPG",
      description: "Street photography capturing quiet moments, as peaceful as a frog on a lily pad",
      frogEmoji: "🐸",
      pondEmoji: "🌿"
    },
    {
      id: 3,
      title: "Untitled",
      image: "/DSC_0864.JPG",
      description: "Abstract architectural forms reminiscent of lily pads floating on water",
      frogEmoji: "🐸",
      pondEmoji: "🪷"
    },
    {
      id: 4,
      title: "Untitled",
      image: "/DSC_0865.JPG",
      description: "Urban geometry and shadows, like sunlight filtering through pond reeds",
      frogEmoji: "🐸",
      pondEmoji: "💧"
    }
  ];

  return (
    <>
      <Head>
        <title>🐸 Emm "Argos" Holmes - Froggy Portfolio 🐸</title>
        <meta name="description" content="🐸 Photography and development portfolio of Emm 'Argos' Holmes - A lily pad of creativity! 🪷" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-emerald-400">
        {/* MANY floating frog elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-5xl animate-bounce-slow opacity-40" style={{animationDelay: '0s'}}>🐸</div>
          <div className="absolute top-20 right-20 text-4xl animate-pulse-slow opacity-30" style={{animationDelay: '0.5s'}}>🪷</div>
          <div className="absolute top-1/4 left-1/4 text-6xl animate-float-slow opacity-35" style={{animationDelay: '1s'}}>🐸</div>
          <div className="absolute top-1/3 right-1/3 text-3xl animate-bounce-slow opacity-25" style={{animationDelay: '1.5s'}}>🌿</div>
          <div className="absolute bottom-1/4 left-1/6 text-5xl animate-pulse-slow opacity-30" style={{animationDelay: '2s'}}>🪷</div>
          <div className="absolute bottom-1/3 right-1/4 text-4xl animate-float-slow opacity-35" style={{animationDelay: '2.5s'}}>🐸</div>
          <div className="absolute bottom-20 left-20 text-3xl animate-bounce-slow opacity-25" style={{animationDelay: '3s'}}>💧</div>
          <div className="absolute bottom-10 right-10 text-5xl animate-pulse-slow opacity-40" style={{animationDelay: '3.5s'}}>🌿</div>
          <div className="absolute top-1/2 left-10 text-4xl animate-bounce-slow opacity-30" style={{animationDelay: '4s'}}>🪷</div>
          <div className="absolute top-40 right-40 text-6xl animate-float-slow opacity-25" style={{animationDelay: '4.5s'}}>🐸</div>
          <div className="absolute bottom-40 left-40 text-3xl animate-pulse-slow opacity-35" style={{animationDelay: '5s'}}>💧</div>
        </div>

        {/* Header */}
        <header className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 shadow-xl relative z-10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-3">
                <span className="text-4xl animate-bounce-slow">🐸</span>
                <span className="text-3xl font-bold text-white">Froggie Portfolio</span>
                <span className="text-3xl animate-pulse-slow" style={{animationDelay: '0.8s'}}>🪷</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="#about" className="text-green-100 hover:text-white transition-colors font-medium flex items-center space-x-2">
                  <span className="text-xl">🌿</span>
                  <span>About</span>
                </Link>
                <Link href="#work" className="text-green-100 hover:text-white transition-colors font-medium flex items-center space-x-2">
                  <span className="text-xl">📸</span>
                  <span>Work</span>
                </Link>
                <Link href="#contact" className="text-green-100 hover:text-white transition-colors font-medium flex items-center space-x-2">
                  <span className="text-xl">💚</span>
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Introduction Section */}
        <section id="about" className="bg-gradient-to-br from-green-500 via-emerald-600 to-green-700 text-white relative overflow-hidden">
          {/* Pond ripples and lily pads */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 border-4 border-green-300 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 border-3 border-green-200 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 border-2 border-green-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 left-1/6 w-96 h-96 border-2 border-emerald-300 rounded-full animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center space-x-4 mb-8">
                <span className="text-8xl animate-bounce-slow" style={{animationDelay: '0.3s'}}>🐸</span>
                <h1 className="text-4xl md:text-6xl font-light tracking-wide">
                  Pond Introduction
                </h1>
                <span className="text-8xl animate-bounce-slow" style={{animationDelay: '1.2s'}}>🪷</span>
              </div>
              <p className="text-xl opacity-90 flex items-center justify-center space-x-2">
                <span className="text-2xl">🌿</span>
                <span>Welcome to my lily pad of creativity!</span>
                <span className="text-2xl">🌿</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-8 flex items-center space-x-3">
                  <span className="text-6xl animate-pulse">🐸</span>
                  <span>Emma, "Argos", Holmes</span>
                </h2>
                <div className="bg-black bg-opacity-30 rounded-2xl p-8 backdrop-blur-sm border-4 border-green-400 shadow-2xl">
                  <div className="w-64 h-80 mx-auto bg-gradient-to-br from-green-800 to-emerald-900 rounded-xl relative overflow-hidden border-4 border-green-300">
                    {/* Camera image */}
                    <img
                      src="/camera-intro.JPG"
                      alt="Nikon camera being held up to capture a photo"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-4 left-0 right-0 text-center z-30">
                      <p className="text-green-100 text-sm font-medium mb-2">📸 Froggy Photographer 🐸</p>
                      <div className="flex justify-center space-x-2">
                        <span className="text-2xl animate-bounce">🪷</span>
                        <span className="text-2xl animate-pulse">💧</span>
                        <span className="text-2xl animate-bounce">🌿</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border-4 border-green-300">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-4xl animate-pulse">🌿</span>
                  <p className="text-lg md:text-xl leading-relaxed font-light">
                    I should probably tell you some things about myself!
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-3xl animate-bounce">🎵</span>
                    <p className="text-base md:text-lg leading-relaxed opacity-90">
                      I have a deep love of music and the arts, like a frog's song echoing across the pond.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-3xl animate-pulse">📸</span>
                    <p className="text-base md:text-lg leading-relaxed opacity-90">
                      I take lots of photos and would love to use those skills professionally - capturing moments like dewdrops on lily pads.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-3xl animate-bounce">💻</span>
                    <p className="text-base md:text-lg leading-relaxed opacity-90">
                      I love coding and design! Started with C++, then hopped into HTML and JavaScript. I'm excited to continue expanding my knowledge like ripples across a pond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="work" className="py-24 bg-gradient-to-br from-green-100 via-emerald-200 to-green-300 relative">
          {/* More floating elements */}
          <div className="absolute top-10 left-10 text-8xl opacity-30 animate-float">🪷</div>
          <div className="absolute top-20 right-20 text-6xl opacity-40 animate-bounce">🐸</div>
          <div className="absolute bottom-20 left-20 text-5xl opacity-35 animate-pulse">🌿</div>
          <div className="absolute bottom-10 right-10 text-7xl opacity-30 animate-float">💧</div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <span className="text-5xl animate-bounce">🌿</span>
                <h2 className="text-3xl md:text-4xl font-light text-green-800">
                  My Lily Pad Gallery
                </h2>
                <span className="text-5xl animate-bounce">🌿</span>
              </div>
              <p className="text-green-700 text-lg flex items-center justify-center space-x-2">
                <span className="text-2xl">🐸</span>
                <span>A collection of moments captured around the pond of life</span>
                <span className="text-2xl">🐸</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 border-4 border-green-500 shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-green-800 mb-2 flex items-center space-x-2">
                    <span className="text-2xl">{item.frogEmoji}</span>
                    <span>{item.title}</span>
                    <span className="text-2xl">{item.pondEmoji}</span>
                  </h3>
                  
                  <div className="w-full h-3 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-full mb-4 shadow-md"></div>
                  <p className="text-green-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Fun Frog Facts */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-2xl p-8 shadow-2xl border-4 border-green-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                  <span className="text-4xl animate-bounce">🐸</span>
                  <span>Fun Frog Fact</span>
                  <span className="text-4xl animate-bounce">🐸</span>
                </h3>
                <p className="text-green-100 text-lg flex items-center justify-center space-x-2">
                  <span className="text-2xl">🪷</span>
                  <span>
                    Did you know frogs can see in almost every direction at once? 
                    Just like how I approach photography - capturing all the beauty around us!
                  </span>
                  <span className="text-2xl">🪷</span>
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <span className="text-3xl animate-bounce">🐸</span>
                  <span className="text-3xl animate-pulse">🌿</span>
                  <span className="text-3xl animate-bounce">🪷</span>
                  <span className="text-3xl animate-pulse">💧</span>
                  <span className="text-3xl animate-bounce">🐸</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-br from-green-700 via-emerald-800 to-green-900 text-white py-24 relative overflow-hidden">
          {/* Pond background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex justify-center items-center space-x-4 mb-12">
              <span className="text-6xl animate-bounce">💚</span>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                Let's Connect Across the Pond!
              </h2>
              <span className="text-6xl animate-bounce">💚</span>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-md mx-auto backdrop-blur-sm border-4 border-green-300">
              <div className="space-y-6">
                <Link href="mailto:emmasharpsongs@gmail.com" 
                      className="contact-link block text-green-200 hover:text-green-100 transition-colors text-lg underline flex items-center justify-center space-x-2">
                  <span className="text-2xl">📧</span>
                  <span>Email Me Here</span>
                  <span className="text-2xl animate-bounce">🐸</span>
                </Link>
                <Link href="https://linkedin.com/in/yourprofile" 
                      className="contact-link block text-green-200 hover:text-green-100 transition-colors text-lg underline flex items-center justify-center space-x-2">
                  <span className="text-2xl">💼</span>
                  <span>LinkedIn Profile Here</span>
                  <span className="text-2xl animate-pulse">🌿</span>
                </Link>
                <Link href="/resume.pdf" 
                      className="contact-link block text-green-200 hover:text-green-100 transition-colors text-lg underline flex items-center justify-center space-x-2">
                  <span className="text-2xl">📄</span>
                  <span>Resume Here</span>
                  <span className="text-2xl animate-bounce">🪷</span>
                </Link>
                <Link href="https://github.com/Eyes_of_Argos" 
                      className="contact-link block text-green-200 hover:text-green-100 transition-colors text-lg underline flex items-center justify-center space-x-2">
                  <span className="text-2xl">💻</span>
                  <span>GitHub Profile Here</span>
                  <span className="text-2xl animate-pulse">💧</span>
                </Link>
              </div>
              
              <div className="mt-8 flex justify-center space-x-3">
                <span className="text-4xl animate-bounce">🐸</span>
                <span className="text-4xl animate-pulse">🪷</span>
                <span className="text-4xl animate-bounce">🌿</span>
                <span className="text-4xl animate-pulse">💧</span>
                <span className="text-4xl animate-bounce">🐸</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-8 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <span className="text-3xl animate-bounce">🐸</span>
              <p className="text-green-300">
                © 2025 Emma "Argos" Holmes. All rights reserved.
              </p>
              <span className="text-3xl animate-pulse">🪷</span>
            </div>
            <p className="text-green-400 text-sm flex items-center justify-center space-x-2">
              <span className="text-lg">💚</span>
              <span>Made with lots of pond magic!</span>
              <span className="text-lg">🌿</span>
              <span>✨</span>
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce-slow {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0px); }
          40% { transform: translateY(-15px); }
          43% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .contact-link {
          transition: all 0.3s ease;
        }
        .contact-link:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}