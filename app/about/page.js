import { Users, Target, Eye, Award, CircleCheck as CheckCircle } from 'lucide-react';
import Button from '@/components/Button';

export default function About() {
  const founders = [
    {
      name: "Sachin Wagh",
      title: "Founder & Managing Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Civil Engineer with Masters in Project & Construction Management, bringing engineering precision to every design concept."
    },
    {
      name: "Vedangini Wagh",
      title: "Co-Founder & Creative Director", 
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Interior Designer with a keen eye for detail and composition, ensuring each design is inspiring and technically sound."
    }
  ];

  const values = [
    "Craftsmanship in every detail",
    "Creativity balanced with practicality", 
    "Engineering precision and reliability",
    "Client-focused collaborative approach",
    "Sustainable and timeless design",
    "Excellence from concept to completion"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About OneCorex
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A partnership built on balance - where design imagination meets engineering precision
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-amber-600">Crafting Spaces,</span><br />
                Curating Luxury Living
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At OneCorex, we believe great design is not merely about creating assets – it is about shaping meaningful experiences.
              </p>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every home and workplace we deliver is crafted to make people feel calm, inspired, and connected. 
                We blend creativity with engineering precision to create spaces that balance beauty, purpose, and performance.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our residential interiors reflect the soul of the inhabitants - warm, expressive, and deeply personal. 
                Our commercial spaces are designed to energize, motivate, and inspire collaboration - 
                shaping environments where people thrive.
              </p>
              
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-w-16 aspect-h-12">
              <img 
                src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury living room interior"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-900 text-white p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Eye className="text-amber-400 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                To create spaces through craftsmanship, creativity, and precision - transforming 
                every space into a reflection of excellence, luxury and timeless design elevating 
                lifestyle and inspire success across every project we deliver.
              </p>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="text-amber-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At OneCorex, we aim to create meaningful and memorable environments by 
                integrating innovative design, technical expertise, and uncompromising 
                craftsmanship—ensuring every space we deliver elevates the user experience 
                and adds lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At the heart of OneCorex is a partnership built on balance - where design imagination meets engineering precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">{founder.title}</p>
                  <p className="text-gray-600 leading-relaxed">{founder.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect Fusion of Art and Engineering</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our two founding partners bring together over decades of expertise across design, fit-out, and project management. 
                Together, they represent the perfect fusion of Art and Engineering - turning ambitious ideas into enduring, built realities.
              </p>
              <p className="text-lg text-gray-600 font-medium">
                <span className="text-amber-600">Two perspectives. One shared purpose</span> - Creating spaces with depth, detail, and distinction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Expertise That Delivers Excellence
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Design Excellence</h4>
                    <p className="text-gray-300">An Interior Designer with a keen eye for detail and composition, ensuring that each design concept is not only inspiring but also technically sound and seamlessly executed.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Engineering Precision</h4>
                    <p className="text-gray-300">A Civil Engineer with Masters in Project & Construction Management. Together, they balance creativity and practicality, ensuring exceptional professionalism.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Target className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Comprehensive Experience</h4>
                    <p className="text-gray-300">Combined expertise in residential, commercial, hospitality, retail, entertainment, and mixed-use projects by renowned developers in UAE.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="aspect-w-16 aspect-h-12">
              <img 
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office interior"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your vision and create an environment that truly reflects your story. 
            Our team is ready to bring your ideas to life with precision and creativity.
          </p>
          
          <Button href="/contact" variant="secondary" size="lg" icon>
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}