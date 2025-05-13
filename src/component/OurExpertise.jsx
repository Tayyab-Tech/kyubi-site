import React from 'react';
import { Film, Users, BookOpen, HeartPulse, DollarSign, Utensils, Plane, CreditCard } from 'lucide-react';

const expertiseData = [
    {
        icon: <Film className="w-8 h-8 text-indigo-500" />,
        title: 'Entertainment',
        description:
            'Whether it’s a streaming platform or an interactive mobile application, your user journey should be as entertaining as your content.',
    },
    {
        icon: <Users className="w-8 h-8 text-pink-500" />,
        title: 'Lifestyle & Social',
        description:
            'We love services that connect people with people. Maybe it’s a life partner or a language learning partner. We champion new ways to connect.',
    },
    {
        icon: <BookOpen className="w-8 h-8 text-orange-500" />,
        title: 'Education',
        description:
            'From large school districts to companies just starting out, We know that technology can change the world of education for the better.',
    },
    {
        icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
        title: 'Health & Fitness',
        description:
            'A health ring that reads your mood? Count us in! Even health-related products aren’t immune to clunky interfaces. We want to help you change the face of healthcare.',
    },
    {
        icon: <DollarSign className="w-8 h-8 text-blue-500" />,
        title: 'Business',
        description:
            'Is your software as organized as you are? Whether it’s an office calendar or a workflow management platform, we believe we can help you bring it to market.',
    },
    {
        icon: <Utensils className="w-8 h-8 text-green-500" />,
        title: 'Food & Drink',
        description:
            'Ready to tackle one of the largest consumer markets in the world? Say no more. We know how to make those seconds searching for lunch a piece of cake!',
    },
    {
        icon: <Plane className="w-8 h-8 text-yellow-500" />,
        title: 'Travel',
        description:
            'Conquering the world of technology, one room, flight or ticket at a time? We can help to make that experience sublime right from the beginning.',
    },
    {
        icon: <CreditCard className="w-8 h-8 text-cyan-500" />,
        title: 'Finance',
        description:
            'Need someone who knows how to walk the line between friendly and secure? It’s all about perception. We are confident we can diagnose your software UX flaws.',
    },
];

function OurExpertise() {
    return (
        <div className="w-full bg-white text-black py-12 px-1 md:px-[60px] ">
            <div className="min-w-full">
                <h2 className="text-4xl font-bold mb-4">Our <span className="text-black">expertise</span></h2>
                <p className="text-gray-700 mb-10 max-w-2xl">
                    We have extensive experience <span className="inline md:block">across a broad spectrum of</span> industries. Here are some of our <span className="inline md:block">favorites:</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {expertiseData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <div>{item.icon}</div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurExpertise;
