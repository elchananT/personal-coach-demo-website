'use client'

import {useState, useEffect, JSX} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {
    Phone,
    Calendar,
    TrendingUp,
    ArrowRight,
    CheckCircle,
    Clock,
    Target,
    Users
} from 'lucide-react';

interface Step {
    id: number,
    title: string,
    icon: JSX.Element,
    description: string,
    cta: string,
    iconBg: string,
    dotColor: string
}

const HowItWorksSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [2200, 2500], [0, 200]);
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('how-it-works-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const steps: Step[] = [
        {
            id: 1,
            title: 'Discovery Call',
            icon: Phone,
            description: 'We discuss your goals, assess your current fitness level, and create a personalized roadmap.',
            cta: 'Book Free Call',
            iconBg: 'from-blue-500 to-blue-600',
            dotColor: 'bg-blue-500'
        },
        {
            id: 2,
            title: 'Program & Check-in',
            icon: Calendar,
            description: 'Get your custom program and begin training with regular progress check-ins and adjustments.',
            cta: 'Start Program',
            iconBg: 'from-green-500 to-green-600',
            dotColor: 'bg-green-500'
        },
        {
            id: 3,
            title: 'Progress & Maintain',
            icon: TrendingUp,
            description: 'Track measurable results and build lasting habits that keep you strong for life.',
            cta: 'See Results',
            iconBg: 'from-purple-500 to-purple-600',
            dotColor: 'bg-purple-500'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12, // 120ms stagger as requested
                delayChildren: 0.2
            }
        }
    };

    const stepVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            id="how-it-works-section"
            className="py-20 bg-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                    <div className="w-full h-full bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 rounded-full blur-3xl"></div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full mb-4"
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white'
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Target className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Simple Process</span>
                    </motion.div>

                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            color: 'var(--color-dark)'
                        }}
                    >
                        How It{" "}
                        <span style={{ color: 'var(--color-primary)' }}>
              Works
            </span>
                    </h2>

                    <p
                        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Three simple steps to transform your fitness journey and build lasting healthy habits.
                    </p>
                </motion.div>

                {/* Steps Container */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {/* Desktop Layout - Horizontal */}
                    <div className="hidden lg:block">
                        <div className="flex items-center justify-between relative">
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: isVisible ? '100%' : 0 }}
                                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                                />
                            </div>

                            {steps.map((step) => (
                                <motion.div
                                    key={step.id}
                                    className="relative z-10 flex-1 max-w-sm mx-4"
                                    variants={stepVariants}
                                >
                                    <div className="text-center">
                                        {/* Icon Circle */}
                                        <motion.div
                                            className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.iconBg} flex items-center justify-center text-white shadow-lg mb-6 relative`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            <step.icon className="w-10 h-10" />

                                            {/* Step Number */}
                                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span
                            className="text-sm font-bold"
                            style={{ color: 'var(--color-dark)' }}
                        >
                          {step.id}
                        </span>
                                            </div>
                                        </motion.div>

                                        {/* Title */}
                                        <h3
                                            className="text-2xl font-bold mb-4"
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                color: 'var(--color-dark)'
                                            }}
                                        >
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-gray-600 mb-6 leading-relaxed"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            {step.description}
                                        </p>

                                        {/* Mini CTA */}
                                        <motion.button
                                            className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                                            style={{
                                                color: 'var(--color-primary)',
                                                backgroundColor: 'transparent',
                                                border: '1px solid var(--color-primary)'
                                            }}
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: 'var(--color-primary)',
                                                color: 'white'
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {step.cta}
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Layout*/}
                    <div className="lg:hidden space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="relative"
                                variants={stepVariants}
                            >
                                <div className="flex items-start">
                                    {/* Icon and Line */}
                                    <div className="flex flex-col items-center mr-6">
                                        <motion.div
                                            className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.iconBg} flex items-center justify-center text-white shadow-lg relative`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5
                                            }}
                                        >
                                            <step.icon className="w-8 h-8" />

                                            {/* Step Number */}
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                            <span
                                className="text-xs font-bold"
                                style={{ color: 'var(--color-dark)' }}
                            >
                              {step.id}
                            </span>
                                            </div>
                                        </motion.div>

                                        {/* Connecting Line */}
                                            {index < steps.length - 1 && (
                                                <div className="w-0.5 h-16 bg-gray-200 mt-4">
                                                    <motion.div
                                                        className={`w-full ${step.dotColor.replace('bg-', 'bg-gradient-to-b from-')} to-transparent`}
                                                        initial={{ height: 0 }}
                                                        animate={{ height: isVisible ? '100%' : 0 }}
                                                        transition={{ delay: 0.8 + index * 0.12, duration: 0.8 }}
                                                    />
                                                </div>
                                            )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-2">
                                        <h3
                                            className="text-xl font-bold mb-3"
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                color: 'var(--color-dark)'
                                            }}
                                        >
                                            {step.title}
                                        </h3>

                                        <p
                                            className="text-gray-600 mb-4 leading-relaxed"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            {step.description}
                                        </p>

                                        <motion.button
                                            className="inline-flex items-center text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-200"
                                            style={{
                                                color: 'var(--color-primary)',
                                                backgroundColor: 'transparent',
                                                border: '1px solid var(--color-primary)'
                                            }}
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: 'var(--color-primary)',
                                                color: 'white'
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {step.cta}
                                            <ArrowRight className="ml-2 w-3 h-3" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    style={isMobile ? {} : { y }}
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-2 md:space-x-4 text-sm text-gray-500 mb-6">
                        <div className="flex flex-col md:flex-row items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>15-min discovery call</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <div className="flex flex-col md:flex-row items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                            <span>No commitment required</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <div className="flex flex-col md:flex-row items-center">
                        <Users className="w-4 h-4 mr-2" />
                            <span>Personalized approach</span>
                        </div>
                    </div>

                    <motion.button
                        className="inline-flex items-center px-8 py-4 rounded-xl font-semibold md:text-lg shadow-lg transition-all duration-300"
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white'
                        }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: 'var(--color-cta-hover)',
                            boxShadow: '0 20px 40px rgba(0, 194, 168, 0.2)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Phone className="mr-3 w-5 h-5" />
                        Start Your Journey Today
                        <ArrowRight className="ml-3 w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;