'use client'

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import {
    User, Smartphone, Target, Calendar, Video, CheckCircle,
    ArrowRight, TrendingUp, MessageCircle, Activity, Utensils
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import {useMediaQuery} from "@/hooks/useMediaQuery";
import React from "react";

interface ServiceBullet {
    icon: LucideIcon;
    text: string;
}

interface Service {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    bullets: ServiceBullet[];
    highlight: string;
    gradient: string;
    bgColor: string;
    iconBg: string;
}

const ServicesSection: React.FC = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [500, 1700], [0, 200]);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const services: Service[] = [
        {
            id: '1-on-1',
            title: '1:1 Coaching',
            icon: User,
            description: 'Personal programs, session booking, movement checks.',
            bullets: [
                { icon: Calendar, text: 'Personal training sessions' },
                { icon: CheckCircle, text: 'Custom workout programs' },
                { icon: Activity, text: 'Movement assessments' }
            ],
            highlight: 'Most Popular',
            gradient: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
            iconBg: 'bg-blue-500'
        },
        {
            id: 'online',
            title: 'Online Coaching',
            icon: Smartphone,
            description: 'Mobile app programming, weekly check-ins, progress videos.',
            bullets: [
                { icon: Smartphone, text: 'Mobile app access' },
                { icon: MessageCircle, text: 'Weekly check-ins' },
                { icon: Video, text: 'Progress video reviews' }
            ],
            highlight: 'Flexible',
            gradient: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50',
            iconBg: 'bg-green-500'
        },
        {
            id: 'transform',
            title: '12-week Transform',
            icon: Target,
            description: 'Goal-driven package with nutrition plan & habit coaching.',
            bullets: [
                { icon: Target, text: 'Goal-driven methodology' },
                { icon: Utensils, text: 'Nutrition planning' },
                { icon: TrendingUp, text: 'Habit coaching system' }
            ],
            highlight: 'Complete Package',
            gradient: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50',
            iconBg: 'bg-purple-500'
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            id="services-section"
            className="relative py-16 md:py-20 overflow-hidden w-full bg-gray-100"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full mb-4 bg-teal-600 text-white"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Target className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Our Services</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                        Choose Your <span style={{ color: 'var(--color-primary)' }}>Path to Success</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                        Whether you prefer in-person training, online flexibility, or a complete transformation program,
                        we have the perfect solution for your fitness journey.
                    </p>
                </motion.div>

                {/* Cards Container - תוקן לתצוגה נכונה במובייל */}
                <div className="relative">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
                        style={isMobile ? {} : { y }}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {services.map((service, index) => {
                            const IconComponent = service.icon;

                            return (
                                <motion.div
                                    key={service.id}
                                    className="group relative"
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -6,
                                        transition: {
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }
                                    }}
                                >
                                    {/* Highlight */}
                                    {service.highlight && (
                                        <motion.div
                                            className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold text-white z-10 bg-gradient-to-r from-blue-500 to-teal-600"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.5 + index * 0.1,
                                                duration: 0.6
                                            }}
                                        >
                                            {service.highlight}
                                        </motion.div>
                                    )}

                                    {/* Card */}
                                    <div className={`h-full bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-xl ${service.bgColor} group-hover:bg-white relative overflow-hidden min-h-[400px]`}>
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />

                                        {/* Icon */}
                                        <motion.div
                                            className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                                            whileHover={{ rotate: 5 }}
                                        >
                                            <IconComponent className="w-8 h-8" />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-900 transition-colors relative z-10 text-gray-900">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                                            {service.description}
                                        </p>

                                        {/* Bullets */}
                                        <ul className="space-y-3 mb-8 relative z-10">
                                            {service.bullets.map((bullet, bulletIndex) => {
                                                const BulletIcon = bullet.icon;

                                                return (
                                                    <motion.li
                                                        key={bulletIndex}
                                                        className="flex items-start group/item"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            delay: 0.6 + index * 0.1 + bulletIndex * 0.05,
                                                            duration: 0.5
                                                        }}
                                                    >
                                                        <div
                                                            style={{ backgroundColor: 'var(--color-primary)' }}
                                                            className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 transition-colors duration-200"
                                                        >
                                                            <BulletIcon className="w-3 h-3 text-white" />
                                                        </div>
                                                        <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">
                                                            {bullet.text}
                                                        </span>
                                                    </motion.li>
                                                );
                                            })}
                                        </ul>

                                        {/* CTA Button */}
                                        <motion.button
                                            className="w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group/cta relative z-10 border-2 hover:bg-teal-600 hover:text-white"
                                            style={{
                                                color: 'var(--color-primary)',
                                                borderColor: 'var(--color-primary)'
                                            }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span>Learn More</span>
                                            <motion.div
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </motion.div>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;