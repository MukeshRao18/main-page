import React from 'react';
import { UserPlus, Search, Handshake } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-blue-500 mb-3" />,
      number: "1",
      title: "Register Your Profile",
      description: "Create a detailed profile highlighting your company's needs or professional expertise.",
      details: [
        "Complete company/candidate verification",
        "Upload necessary documentation",
        "Specify role requirements or skills"
      ]
    },
    {
      icon: <Search className="w-8 h-8 text-blue-500 mb-3" />,
      number: "2",
      title: "Search and Match",
      description: "Our AI algorithms analyze profiles and requirements to suggest the most relevant matches.",
      details: [
        "AI-powered matching system",
        "Real-time candidate scoring",
        "Skill-based filtering"
      ]
    },
    {
      icon: <Handshake className="w-8 h-8 text-blue-500 mb-3" />,
      number: "3",
      title: "Connect with Talent",
      description: "Initiate conversations with matched candidates and streamline the hiring process.",
      details: [
        "Direct messaging system",
        "Interview scheduling tools",
        "Offer management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Aurjobs Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform connects employers and candidates by streamlining the search and registration process with advanced AI algorithms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} 
                 className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                {step.icon}
                <h3 className="text-lg font-bold text-blue-600 mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {step.description}
                </p>
                <ul className="text-left space-y-1.5 text-gray-600 text-sm">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;