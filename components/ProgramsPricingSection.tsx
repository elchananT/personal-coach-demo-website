'use client'

import React, {JSX, useState} from 'react';
import { Check, Star, Zap, Target, Users, Video, MessageCircle, Calendar, TrendingUp } from 'lucide-react';
import {useScroll, useTransform, motion} from "framer-motion";
import Link from "next/link";
import {useMediaQuery} from "@/hooks/useMediaQuery";

interface  Program {
    id: string,
    name: string,
    tagline: string,
    icon: JSX.Element,
    monthlyPrice: number,
    annualPrice: number,
    popular: boolean,
    features: string[],
    benefits: string[],
    idealFor: string,
    results: string,
}

const ProgramsPricingSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [7000, 7500], [0, 200]);
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const programs: Program[] = [
        {
            id: 'starter',
            name: 'Starter',
            tagline: 'Perfect for beginners',
            icon: <Target className="w-8 h-8" />,
            monthlyPrice: 97,
            annualPrice: 77, // per month when billed annually
            popular: false,
            features: [
                'Custom workout program',
                'Mobile app access',
                'Basic nutrition guide',
                'Email support',
                'Progress tracking',
                'Exercise video library'
            ],
            benefits: [
                'Get started with confidence',
                'Build consistent habits',
                'Learn proper form'
            ],
            idealFor: 'New to fitness or getting back into routine',
            results: 'See initial results in 4-6 weeks'
        },
        {
            id: 'performance',
            name: 'Performance',
            tagline: 'Most popular choice',
            icon: <Zap className="w-8 h-8" />,
            monthlyPrice: 197,
            annualPrice: 157, // per month when billed annually
            popular: true,
            features: [
                'Everything in Starter',
                'Weekly 1:1 check-ins',
                'Custom meal planning',
                'Form review videos',
                'Priority support',
                'Habit coaching',
                'Supplement guidance',
                'Monthly body composition'
            ],
            benefits: [
                'Accelerated progress',
                'Personalized attention',
                'Sustainable lifestyle changes'
            ],
            idealFor: 'Serious about transformation and consistent results',
            results: 'Measurable progress in 2-3 weeks'
        },
        {
            id: 'transform',
            name: 'Transform',
            tagline: 'Complete transformation',
            icon: <Users className="w-8 h-8" />,
            monthlyPrice: 297,
            annualPrice: 237, // per month when billed annually
            popular: false,
            features: [
                'Everything in Performance',
                'Bi-weekly 1:1 video calls',
                'Custom recovery protocols',
                'Advanced tracking metrics',
                '24/7 chat support',
                'Lifestyle optimization',
                'Stress management coaching',
                'VIP community access',
                'Quarterly goal sessions'
            ],
            benefits: [
                'Complete lifestyle overhaul',
                'Maximum accountability',
                'Premium support experience'
            ],
            idealFor: 'Ready for complete life transformation',
            results: 'Life-changing results in 8-12 weeks'
        }
    ];

    // Additional features showcase
    const bonusFeatures = [
        {
            icon: <Video className="w-6 h-6" />,
            title: 'Exercise Library',
            description: '500+ HD exercise videos'
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: 'Expert Support',
            description: 'Direct access to certified trainers'
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: 'Flexible Scheduling',
            description: 'Book sessions that fit your life'
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Progress Tracking',
            description: 'Advanced metrics and analytics'
        }
    ];

    const getCurrentPrice = (program: Program) => {
        return billingCycle === 'monthly' ? program.monthlyPrice : program.annualPrice;
    };

    const getSavings = (program: Program) => {
        const monthlyCost = program.monthlyPrice * 12;
        const annualCost = program.annualPrice * 12;
        return monthlyCost - annualCost;
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-light to-white relative overflow-hidden" id="programs">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-32 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-32 right-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
                        <Star className="w-4 h-4 fill-current" />
                        Choose Your Journey
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Programs That
                        <br />
                        <span className="text-primary">Get Results</span>
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                        Every program includes proven methods, personalized approach, and the support you need to succeed.
                        Choose the level of coaching that fits your goals and lifestyle.
                    </p>
                </div>

                {/* Billing toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-white/30 shadow-lg">
                        <div className="flex items-center gap-4">
              <span className={`px-4 py-2 text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-secondary' : 'text-dark'}`}>
                Monthly
              </span>

                            <button
                                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                                className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                                    billingCycle === 'annual' ? 'bg-primary' : 'bg-gray-300'
                                }`}
                                aria-label="Toggle billing cycle"
                            >
                                <div
                                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                                        billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                                    }`}
                                />
                            </button>

                            <div className="flex items-center gap-2">
                <span className={`px-4 py-2 text-sm font-medium transition-colors ${billingCycle === 'annual' ? 'text-dark' : 'text-secondary'}`}>
                  Annual
                </span>
                                {billingCycle === 'annual' && (
                                    <span className="hidden md:visible bg-accent2 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                        Save 20%
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Program cards */}
                <div className="grid lg:grid-cols-3 gap-12 md:gap-8 mb-16">
                    {programs.map((program, index) => (
                        <div
                            key={program.id}
                            className={`relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                                program.popular
                                    ? 'border-primary shadow-xl scale-105 lg:scale-110'
                                    : hoveredCard === index
                                        ? 'border-primary/50 shadow-xl -translate-y-2'
                                        : 'border-white/30 shadow-lg hover:-translate-y-1'
                            }`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Popular badge */}
                            {program.popular && (
                                <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-b-2xl font-semibold text-sm shadow-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="p-8">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 text-primary">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                                    <p className="text-secondary font-medium">{program.tagline}</p>
                                </div>

                                {/* Pricing */}
                                <div className="text-center mb-8">
                                    <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-dark">
                      ${getCurrentPrice(program)}
                    </span>
                                        <span className="text-secondary">/month</span>
                                    </div>

                                    {billingCycle === 'annual' && (
                                        <div className="text-sm text-accent2 font-semibold">
                                            Save ${getSavings(program)}/year
                                        </div>
                                    )}

                                    <div className="text-sm text-secondary mt-2">
                                        {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-8">
                                    <h4 className="font-semibold mb-4 text-dark">What&#39;s included:</h4>
                                    <ul className="space-y-3">
                                        {program.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-secondary">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Program details */}
                                <div className="bg-gray-50/80 p-6 rounded-2xl mb-8">
                                    <div className="mb-4">
                                        <h5 className="font-semibold text-dark mb-2">Ideal for:</h5>
                                        <p className="text-sm text-secondary">{program.idealFor}</p>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-dark mb-2">Expected results:</h5>
                                        <p className="text-sm text-accent2 font-medium">{program.results}</p>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button
                                    className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-200 ${
                                        program.popular
                                            ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:-translate-y-1'
                                            : 'bg-primary text-white hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg'
                                    }`}
                                >
                                    Start Free Consultation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bonus features */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 shadow-xl mb-16">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Every Program Includes
                        </h3>
                        <p className="text-secondary text-lg">
                            Premium features and tools to support your transformation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bonusFeatures.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-4 text-accent">
                                    {feature.icon}
                                </div>
                                <h4 className="font-semibold mb-2">{feature.title}</h4>
                                <p className="text-secondary text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Money-back guarantee */}
                <div className="text-center bg-gradient-to-r from-accent/5 to-primary/5 p-8 rounded-3xl border border-primary/20">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <Star className="w-8 h-8 text-primary fill-current" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        Not seeing results in your first month? Get a full refund, no questions asked.
                        We&#39;re confident in our methods and committed to your success.
                    </p>
                </div>

                {/* Final CTA */}
                <motion.div
                    style={isMobile ? {} : { y }}
                    className="text-center mt-16"
                >
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Start Your Transformation?
                        </h3>
                        <p className="text-xl text-secondary mb-8 leading-relaxed">
                            Book a free 30-minute consultation to discuss your goals and find the perfect program for you.
                        </p>
                        <Link href="/booking">
                            <button className="btn-primary text-xl px-10 py-5 hover:-translate-y-1 transition-all duration-200 shadow-xl hover:shadow-2xl">
                                Book Free Consultation
                            </button>
                        </Link>
                        <p className="text-sm text-secondary mt-4">
                            No commitment required • Free consultation includes goal assessment and program recommendation
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramsPricingSection;