/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button';
import { ArrowRight, Award, Users, Zap, Shield, CircleCheck as CheckCircle, Star } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Award,
      title: "Design Excellence",
      description: "Award-winning interior designs that blend creativity with functionality, creating spaces that inspire and perform."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals combining interior design expertise with engineering precision for flawless execution."
    },
    {
      icon: Zap,
      title: "End-to-End Service",
      description: "Complete project management from initial concept to final handover, ensuring seamless delivery every time."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and compliance with Dubai Municipality standards, delivering excellence you can trust."
    }
  ];

  const benefits = [
    "Design intuition with engineering discipline",
    "Integrated design + build approach",
    "Precision without excess",
    "Transparent & collaborative process",
    "Local insight, global perspective",
    "Technology at the core"
  ];

  const projectTypes = [
    "High-end Luxury Villas",
    "Retail Spaces & Showrooms", 
    "Restaurants & Cafés",
    "Commercial & Corporate Offices",
    "Entertainment Spaces",
    "Healthcare & Wellness Centers"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-2xl">O</span>
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">ONECOREX</h1>
                <p className="text-amber-400 text-lg font-medium">Design. Deliver. Dazzle.</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Crafting Spaces, Curating Luxury Living
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            We create meaningful environments that blend creativity with engineering precision. 
            Every space we design is crafted to make people feel calm, inspired, and connected.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button   href="/contact" size="lg" icon>
              Start Your Project
            </Button>
            <Button   href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowRight className="rotate-90" size={24} />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Dont Just Design Spaces.<br />
                <span className="text-amber-600">We Create Stories You Can Live In.</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At OneCorex, great design is not merely about creating assets – it is about shaping meaningful experiences. 
                Every home and workplace we deliver is crafted to make people feel calm, inspired, and connected.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We blend creativity with engineering precision to create spaces that balance beauty, purpose, and performance. 
                Design is not a surface treatment – its a human experience.
              </p>
              
              <Button   href="/about" icon>
                Learn Our Story
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury interior design"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose OneCorex
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We turn ideas into spaces that speak. Every environment we design is built around a clear purpose — 
              to inspire, perform, and reflect the essence of the people and brands it represents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300 hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-xl mb-4 shadow-lg">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We're Different Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Were Different
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine design intuition with engineering discipline, ensuring every detail is executed with precision and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <CheckCircle className="text-amber-400 flex-shrink-0" size={20} />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Interior Solutions
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in delivering comprehensive interior turnkey solutions across dynamic, 
                design-driven, and experience-focused sectors. Our multidisciplinary capabilities allow us 
                to manage every aspect seamlessly from initial idea to final handover.
              </p>
              
              <div className="space-y-3">
                {projectTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="text-amber-600 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{type}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button   href="/services" icon>
                  View All Services
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Commercial interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Residential interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Luxury villa"
                className="w-full h-48 object-cover rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Office design"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Together Lets Create a Space That Tells Your Story
          </h2>
          
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Ready to transform your space into something extraordinary? Lets discuss your vision and 
            create an environment that truly reflects your story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button   href="/contact" variant="secondary" size="lg" icon>
              Get Started Today
            </Button>
            <Button   href="tel:+971525315971" variant="outline" size="lg">
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}