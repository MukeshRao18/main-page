import React from 'react'

const KeyFeatures = () => {

    const features = [
        {
            title: "AI-Powered Matching",
            description: "Our AI algorithms help find the perfect candidate quickly and accurately based on your search parameters.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            )
        },
        {
            title: "Real-Time Updates",
            description: "Stay updated with real-time notifications when candidates match your job criteria.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            )
        },
        {
            title: "Custom Filters",
            description: "Refine your search using advanced filters such as skills, location, salary expectations, and more.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            )
        },


    ];

    return (
        <div className='py-10 bg-gradient-to-b from-blue-200 to-white'>
            <div className='text-center text-2xl font-bold py-5'>
                <h2>Key Features</h2>
            </div>
            <div className='grid mx-[20%] md:mx-[15%] sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    features.map((feature, index) =>
                        <div key={index} className={`p-2 bg-white rounded-md ${index % 2 !== 0 ? '' : 'md:mt-[15%]'}`}>
                            <div className='flex justify-center items-center py-2'>
                                <div className="w-[20%] h-[20%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor"
                                        className="w-full h-full text-blue-500">
                                        {feature.icon}
                                    </svg>
                                </div>
                            </div>
                            <div className='text-center'>
                            <div className='font-bold p-2 rounded-sm text-center py-2 border-0 bg-white inline-block'>
                                <h4 className='text-blue-500'>{feature.title}</h4>
                            </div>
                            </div>
                            <div className='text-center py-2'>
                                {feature.description}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default KeyFeatures
