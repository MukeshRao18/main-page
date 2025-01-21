import React, { useState } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            quote: "Aurjobs has revolutionized our hiring process. We found our ideal candidate in just a few days!",
            author: "John Doe",
            role: "HR Manager",
        },
        {
            quote: "As a candidate, it was easy to register and get matched with the best employers. Highly recommended!",
            author: "Jane Smith",
            role: "Software Developer",
        },
        {
            quote: "The platform streamlined our entire recruitment process and saved us valuable time.",
            author: "Mike Johnson",
            role: "Hiring Manager",
        },
    ];

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-blue-200">
            <div className="relative w-full max-w-4xl mx-auto py-12">
                <div className="text-center space-y-2 mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        What Our Users Say About Us
                    </h2>
                </div>

                <div className="flex items-center justify-center">
                    {/* Carousel Container */}
                    <div className="w-[60%] relative overflow-hidden bg-white rounded-xl shadow-lg">
                        {/* Slides */}

                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                                    <div className="text-center">
                                        <p className="text-gray-600 text-lg md:text-xl mb-6">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="mt-4">
                                            <h3 className="text-blue-500 font-semibold text-lg md:text-xl">
                                                {testimonial.author}
                                            </h3>
                                            <p className="text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                            ? "bg-blue-500 w-4"
                                            : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Previous Button */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/5 hover:bg-black/10 rounded-full text-gray-600 transition-all"
                            aria-label="Previous slide"
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/5 hover:bg-black/10 rounded-full text-gray-600 transition-all"
                            aria-label="Next slide"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carousel;
