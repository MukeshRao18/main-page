import React from 'react';

const GetStarted = () => {
    return (
        <div className='min-h-scree flex items-center justify-center py-8 md:py-6 bg-white'>
            <div className='max-w-3xl mx-auto w-full text-center space-y-4 sm:space-y-6'>
                <div className='space-y-2'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                        Get Started with Aurjobs Today
                    </h1>
                    <p className='text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
                        Start your free trial and experience the future of recruitment. Sign up now and find top talent faster!
                    </p>
                </div>
                
                <div className='transform hover:scale-105 transition-transform duration-300'>
                    <button className='bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold 
                        py-3 px-8 sm:px-10 rounded-lg text-base sm:text-lg
                        hover:from-blue-500 hover:to-blue-700 
                        shadow-md hover:shadow-lg
                        transition-all duration-300 ease-in-out'>
                        Sign Up Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;