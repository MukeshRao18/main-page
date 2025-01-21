import React from 'react';

const FeatureCard = ({ title, description }) => {
  // Function to return appropriate SVG path based on title
  const getIconPath = (title) => {
    switch (title) {
      case "AI-Powered Matching":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        );
      case "Real-Time Updates":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        );
      case "Custom Filters":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        );
      case "Job Recommendations":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        );
      case "Candidate Search":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        );
      case "Employer Branding":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        );
      default:
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        );
    }
  };

  return (
    <div className="group">
      <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer 
                    transition-all duration-500 ease-in-out py-2
                    min-h-[110px] max-h-[130px]
                    group-hover:min-h-[200px] group-hover:max-h-[220px]
                    group-hover:bg-blue-500 group-hover:text-white">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                 fill="none" stroke="currentColor" 
                 className="w-full h-full text-blue-500 group-hover:text-white">
              {getIconPath(title)}
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "AI-Powered Matching",
      description: "Our AI algorithms help find the perfect candidate quickly and accurately based on your search parameters."
    },
    {
      title: "Real-Time Updates",
      description: "Stay updated with real-time notifications when candidates match your job criteria."
    },
    {
      title: "Custom Filters",
      description: "Refine your search using advanced filters such as skills, location, salary expectations, and more."
    },
    {
      title: "Job Recommendations",
      description: "Get personalized job recommendations based on your profile and job history."
    },
    {
      title: "Candidate Search",
      description: "Search through thousands of candidate profiles to find the perfect match for your job openings."
    },
    {
      title: "Employer Branding",
      description: "Showcase your company culture and attract top talent with our custom employer branding features."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Key Features
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;