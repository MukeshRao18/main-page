import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Frequently = () => {
    const faqs = [
        {
            question: 'What is Aurjobs?',
            answer: 'Aurjobs is an AI-powered recruitment platform that automates and streamlines the hiring process for companies, helping them match qualified candidates to job roles quickly and efficiently.'
        },
        {
            question: 'How does Aurjobs work?',
            answer: 'Aurjobs uses AI and machine learning to automate various stages of recruitment, including resume parsing, candidate screening, skill matching, and interview scheduling, providing companies with a seamless hiring experience.'
        },
        {
            question: 'How much does Aurjobs cost?',
            answer: 'Aurjobs offers multiple pricing plans: Starter at ₹2,000/month, Professional at ₹6,000/month, and Enterprise at ₹10,000/month, each with different features like resume parsing, job postings, and real-time analytics.'
        },
        {
            question: 'What features does Aurjobs offer?',
            answer: 'Aurjobs offers AI-driven automation for candidate ranking, skill matching, resume parsing, interview scheduling, and more. The platform is designed to reduce unconscious bias and improve the efficiency of the hiring process.'
        },
        {
            question: 'Is Aurjobs suitable for all businesses?',
            answer: 'Aurjobs is particularly beneficial for small to medium-sized service businesses looking to streamline their recruitment process. However, it can also integrate with larger systems and support various business sizes.'
        }
    ];
    
    const [activeQuestion, setActiveQuestion] = useState(null);

    return (
        <div className='min-h-screen bg-white'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 mb-2">
                        Find answers to common questions about our services and features.
                    </p>
                    <p className="text-base sm:text-lg text-gray-600">
                        For more details, contact our support team.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.question}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <button
                                className="w-full px-4 sm:px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                onClick={() => setActiveQuestion(activeQuestion === faq.question ? null : faq.question)}
                            >
                                <span className="font-medium text-gray-900 text-left text-sm sm:text-base">
                                    {faq.question}
                                </span>
                                <span className="ml-4 flex-shrink-0">
                                    {activeQuestion === faq.question ? (
                                        <ChevronDown className="w-5 h-5 text-blue-500" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    )}
                                </span>
                            </button>
                            {activeQuestion === faq.question && (
                                <div className="px-4 sm:px-6 py-4 bg-gray-50">
                                    <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 sm:mt-12">
                    <p className="text-base sm:text-lg text-gray-600">
                        Haven't got your answer?{' '}
                        <a 
                            href="#" 
                            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
                        >
                            Contact our support now
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Frequently;