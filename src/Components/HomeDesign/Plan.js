import React from "react";

const Plan = () => {
  const plans = [
    {
      title: "Trial Plan",
      price: "Free",
      period: "",
      features: [
        { text: "1 Hour Access", supported: true },
        { text: "Max 10 Profiles", supported: true },
        { text: "All Features (Basic)", supported: true },
        { text: "Unlimited Profile Searches", supported: false },
        { text: "Priority Support", supported: false },
      ],
      buttonText: "Start Free Trial",
    },
    {
      title: "Monthly Plan",
      price: "₹8000",
      period: "/month",
      features: [
        { text: "Unlimited Profile Searches", supported: true },
        { text: "All Features", supported: true },
        { text: "Priority Support", supported: true },
        { text: "Long-Term Discounts", supported: false },
        { text: "Access to Exclusive Content", supported: true }, // New feature
      ],
      buttonText: "Start Now",
    },
    {
      title: "Yearly Plan",
      price: "₹64000",
      period: "/year",
      features: [
        { text: "Unlimited Profile Searches", supported: true },
        { text: "All Features", supported: true },
        { text: "Priority Support", supported: true },
        { text: "Long-Term Discounts", supported: true },
        { text: "Access to Exclusive Content", supported: true }, // New feature
      ],
      buttonText: "Start Now",
    },
  ];

  return (
<div className="bg-gradient-to-b from-blue-200 to-white">
    <div className="min-h-screen py-12 mx-[3%]">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Choose Your Plan
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-8 w-4/5 mx-auto">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">{plan.title}</h2>
            <div className="text-3xl font-bold mb-2">
              {plan.price}
              <span className="text-gray-600 text-xl">{plan.period}</span>
            </div>

            <div className="space-y-4 mt-6">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center text-gray-700">
                  {feature.supported ? (
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  {feature.text}
                </div>
              ))}
            </div>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Plan;
