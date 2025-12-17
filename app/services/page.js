import { Wrench, Palette, Cog, FileText, Users, CircleCheck as CheckCircle, Star, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import Button from '@/components/Button';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Design & Concept Development",
      subtitle: "Where imagination meets functionality",
      description: "Our design team crafts unique concepts that reflect each client's vision and brand identity. From space planning and material selection to 3D visualizations and detailed drawings, we create spaces that are both beautiful and purposeful."
    },
    {
      icon: Wrench,
      title: "Interior Decoration & Finishing", 
      subtitle: "The art of the final touch",
      description: "Our interior finishing and décor services add character and sophistication to every project. From wall finishes and lighting design to furniture, fabrics, and accessories, we curate every element to enhance ambiance and aesthetics."
    },
    {
      icon: Cog,
      title: "MEP & Technical Services",
      subtitle: "Engineering comfort, safety, and reliability into every space",
      description: "We provide complete mechanical, electrical, and plumbing works, integrating modern systems that ensure energy efficiency, comfort, and compliance with Dubai's building and safety standards."
    },
    {
      icon: FileText,
      title: "Authority Approvals & Documentation",
      subtitle: "Navigating approvals with efficiency and expertise",
      description: "We handle all statutory requirements and government approvals - including Dubai Municipality, Civil Defence, DEWA, and landlord NOCs - ensuring a seamless project lifecycle without delays or complications."
    },
    {
      icon: Users,
      title: "Project Management & Supervision",
      subtitle: "Precision, control, and accountability from start to finish",
      description: "Our dedicated project management team oversees scheduling, budgeting, procurement, and site execution to guarantee timely delivery and exceptional quality - every single time."
    }
  ];

  const expertise = [
    "Civil Works",
    "Joinery Fitout Works", 
    "False Ceiling and Light Partition Installation",
    "Hardwood Floors",
    "Tiling Works, Carpet Flooring",
    "Modular Work Stations",
    "Fabric Panelling",
    "Marble, Corian, Quartz installations",
    "Glass and Aluminium work",
    "Kitchen Installations",
    "Steel Works",
    "Sanitary and Plumbing",
    "Ornamentation Works (CNC)",
    "Decorative Surfaces (Paint, Warps, Metal)",
    "Electrical, HVAC, Networking works",
    "Furniture selection as per your space"
  ];

  const projectPhases = [
    { phase: 1, title: "Discovery & First Meeting", color: "bg-amber-600" },
    { phase: 2, title: "Site Survey & Technical Assessment", color: "bg-slate-700" },
    { phase: 3, title: "Proposal, Budget & Contract", color: "bg-amber-600" },
    { phase: 4, title: "Project Kickoff & Mobilisation", color: "bg-slate-700" },
    { phase: 5, title: "Design Initiation & Development", color: "bg-amber-600" },
    { phase: 6, title: "Material, FF&E & Sample Approval", color: "bg-slate-700" },
    { phase: 7, title: "Execution / Construction", color: "bg-amber-600" },
    { phase: 8, title: "Snagging Punchlist & Final QA", color: "bg-slate-700" },
    { phase: 9, title: "Handover & Closeout", color: "bg-amber-600" },
    { phase: 10, title: "Aftercare, Warranty & Relationship", color: "bg-slate-700" }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Integrated Design + Build Approach",
      description: "This integration reduces cost overruns, shortens delivery times, and preserves the creative vision from start to finish."
    },
    {
      icon: Shield,
      title: "Precision Without Excess",
      description: "We maintain a lean, intelligent structure - no unnecessary overhead, no inflated mark-ups - allowing us to deliver superior results at exceptional value."
    },
    {
      icon: Clock,
      title: "Crafted for Performance",
      description: "Our designs go beyond aesthetics. We focus on how a space feels, functions, and flows - creating environments that work beautifully."
    },
    {
      icon: Users,
      title: "Transparent & Collaborative",
      description: "We believe in open communication and accountability. Every project milestone, material choice, and cost breakdown is shared clearly with our clients."
    },
    {
      icon: Star,
      title: "Local Insight, Global Perspective",
      description: "Based in Dubai, we blend international design standards with local expertise, ensuring our projects meet both creative ambition and regulatory precision."
    },
    {
      icon: Cog,
      title: "Technology at the Core", 
      description: "From 3D visualizations to digital project tracking, we employ smart tools that bring clarity, control, and confidence to every stage of the project."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive interior design solutions from initial concept to final handover
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Design & Build Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer design-driven fit-outs that are visually refined, structurally robust, 
              and delivered with exceptional professionalism.
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center mr-4">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-amber-600 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <img 
                      src={`https://images.pexels.com/photos/${1571460 + index}/pexels-photo-${1571460 + index}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities covering every aspect of interior construction and finishing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <CheckCircle className="text-amber-600 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Journey Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project Journey: From First Idea to Final Handover
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured 10-phase approach ensures quality, consistency, and excellence throughout your project
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {projectPhases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${phase.color} text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg transform rotate-45`}>
                  <span className="font-bold text-lg transform -rotate-45">{phase.phase}</span>
                </div>
                <h4 className="text-white font-semibold text-sm leading-tight">{phase.title}</h4>
                {index < projectPhases.length - 1 && (
                  <ArrowRight className="text-amber-400 mx-auto mt-4 hidden md:block" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose OneCorex
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work is defined by clarity, craftsmanship, and commitment. 
              Design and implementation are not two stages — they're one seamless experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => {
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

      {/* Call to Action Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a space that truly reflects your vision. 
            Our team is ready to deliver excellence from concept to completion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" icon>
              Start Your Project
            </Button>
            <Button href="tel:+971525315971" variant="outline" size="lg">
              Call for Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}