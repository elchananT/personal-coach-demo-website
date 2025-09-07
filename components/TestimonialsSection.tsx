'use client'

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import {useScroll, useTransform, motion} from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Testimonials {
    id: number,
    name: string,
    age: number,
    rating: number,
    text: string,
    program: string,
    results: string,
}

const TestimonialsSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [4200, 4800], [0, 200]);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const testimonials: Testimonials[] = [
        {
            id: 1,
            name: "Sarah M.",
            age: 34,
            rating: 5,
            text: "Within 12 weeks I went from zero confidence in the gym to lifting 160 pounds and deadlifts, and finally sleeping better. Leo made everything practical.",
            program: "12-Week Transform",
            results: "10kg less • +18% strength • improved sleep"
        },
        {
            id: 2,
            name: "Jason R.",
            age: 41,
            rating: 5,
            text: "Leo made workouts possible - real progress without drama or stories. I felt stronger after just 3 weeks.",
            program: "12-Week Strength",
            results: "+25% squat strength • -6% body fat"
        },
        {
            id: 3,
            name: "Maria L.",
            age: 28,
            rating: 5,
            text: "Finally stopped switching between programs - Leo kept it practical and I stuck with it. Small habit changes changed everything.",
            program: "Online Coaching",
            results: "8kg lost • returned to regular routine"
        },
        {
            id: 4,
            name: "David K.",
            age: 45,
            rating: 5,
            text: "I feel stronger and less tired at the end of the day - small habit changes made all the difference. I didn't think it could be this simple.",
            program: "1:1 Coaching",
            results: "Significant strength • more energy"
        },
        {
            id: 5,
            name: "Rachel T.",
            age: 36,
            rating: 5,
            text: "Leo taught me not just how to train but how to live healthy. The program fit perfectly with my busy life as a working mom.",
            program: "12-Week Transform",
            results: "12kg lost • more energy • stable habits"
        },
        {
            id: 6,
            name: "Michael S.",
            age: 52,
            rating: 5,
            text: "At 52 I thought I was done with fitness. Leo proved you can start over and be in the best shape of your life.",
            program: "Senior Fitness",
            results: "Full activity restored • 0 injuries"
        }
    ];

    const duplicatedTestimonials: Testimonials[] = [...testimonials, ...testimonials];

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, i: number) => (
            <Star
                key={i}
                className={`w-5 h-5 ${
                    i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
            />
        ));
    };

    const stats: { number: string, label: string }[] = [
        { number: "300+", label: "Happy Clients" },
        { number: "4.9★", label: "Average Rating" },
        { number: "95%", label: "Goal Achieved" }
    ];

    const handleTestimonialClick: (index: number) => void = (index: number) => {
        setCurrentTestimonial(index % testimonials.length);
    };

    return (
        <section className="py-16 px-6 bg-light relative overflow-hidden" id="testimonials">
            {/* Background decor */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-dark rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent2 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
                        <Star className="w-4 h-4 fill-current" />
                        What Our Clients Say
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Stories that Warm
                        <br />
                        <span className="text-accent">the Heart</span>
                    </h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                        Every story is a world of change, perseverance, and success. These are the people who turned dreams into reality.
                    </p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
                            <div className="text-2xl md:text-4xl font-bold text-dark mb-2">{stat.number}</div>
                            <div className="text-secondary text-center md:text-left font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* קרוסלה עם בקרות */}
                <div className="mb-8">
                    {/* Carousel Container */}
                    <div className="relative">
                        <motion.div
                            className="flex gap-6"
                            animate={isMobile ? { x: [0, -(testimonials.length * 100)] } : { x: [0, -(testimonials.length * 350)] }
                        }
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: testimonials.length * 4,
                                    ease: "linear"
                                }
                            }}

                        >
                            {duplicatedTestimonials.map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${Math.floor(index / testimonials.length)}`}
                                    className={`bg-white/80 min-w-[320px] max-w-[320px] 
                                               backdrop-blur-sm p-6 rounded-2xl border flex-shrink-0
                                               transition-all duration-300 cursor-pointer 
                                         ${
                                        currentTestimonial === (index % testimonials.length)
                                            ? 'shadow-lg border-primary/30'
                                            : 'border-white/60 hover:border-primary/30'
                                    }`}
                                    onClick={() => handleTestimonialClick(index)}
                                >
                                    <div className="flex items-center gap-1 mb-3">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                    <p className="text-dark mb-4 leading-relaxed text-sm">
                                        &quot;{testimonial.text.length > 120 ? testimonial.text.substring(0, 120) + "..." : testimonial.text}&quot;
                                    </p>
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <div className="font-semibold text-dark">{testimonial.name}</div>
                                                <div className="text-xs text-secondary">{testimonial.program}</div>
                                            </div>
                                            <div className="text-xs text-right text-secondary">
                                                Age {testimonial.age}
                                            </div>
                                        </div>
                                        <div className="text-xs text-primary font-medium">
                                            Results: {testimonial.results}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentTestimonial === index
                                        ? 'bg-primary scale-125'
                                        : 'bg-gray-300 hover:bg-primary/50'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA at the end */}
                <motion.div
                    style={isMobile ? {} : { y }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to be our next success story?
                        </h3>
                        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                            Join a community of 300+ people who have already transformed their lives
                        </p>
                        <button className="btn-primary text-lg px-8 py-4 hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
                            Book Free Consultation Now
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;