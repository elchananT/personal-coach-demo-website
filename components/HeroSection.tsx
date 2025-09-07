'use client'

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Star, ArrowRight, Play, Award, Clock } from 'lucide-react';
import Image from "next/image";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const trustIndicators = [
        { icon: Users, text: "300+ clients" },
        { icon: Star, text: "4.9★ average" },
        { icon: Award, text: "NASM, CSCS" }
    ];

    const stats = [
        { value: "12", label: "weeks to measurable results" },
        { value: "85%", label: "client retention rate" },
        { value: "100%", label: "personalized programs" }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent transform -skew-y-12 translate-y-32"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col-reverse md:grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-screen items-center py-20 lg:py-0">

                    {/* Left Column - Text Content (55%) */}
                    <motion.div
                        className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* H1 */}
                        <motion.h1
                            className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                lineHeight: '1.02'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Transform Your Body.{" "}
                            <span className="relative text-primary">
                                Transform Your Life.
                                <motion.div
                                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: isVisible ? '100%' : 0 }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                />
                            </span>
                        </motion.h1>

                        {/* Lead Paragraph */}
                        <motion.p
                            className="text-lg lg:text-xl text-gray-600 mb-16 mt-8 md:mt-4 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                            style={{
                                fontFamily: 'Inter, sans-serif'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Personalized training plans, nutrition guidance, and one-on-one coaching designed to help you achieve real results.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <motion.button
                                className="bg-primary hover:bg-teal-700 text-white flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-colors duration-200"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 20px 40px rgba(20, 184, 166, 0.2)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Book Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </motion.button>

                            <motion.button
                                className="border-2 border-primary text-primary hover:bg-teal-50 flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-colors duration-200"
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Play className="mr-2 w-5 h-5" />
                                View Programs
                            </motion.button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                        >
                            {trustIndicators.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <item.icon className="w-4 h-4 mr-2 text-primary" />
                                    <span className="font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Hero Image with Stats (45%) */}
                    <motion.div
                        className="lg:col-span-5 relative order-1 lg:order-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        {/* Main Hero Image */}
                        <motion.div
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                            style={{ y }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <div className={`relative ${isMobile ? "w-[90vw] max-w-[400px] mx-auto" : "w-[35vw] min-w-[400px]"} h-[70vh] md:h-[80vh]`}>
                                <Image src="/hero.png" alt="coach" fill objectFit="cover"/>
                            </div>

                            {/* Stats Overlay Card */}
                            <motion.div
                                className="absolute bottom-20 md:bottom-6 right-[-0.7rem] md:right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-xl border border-white/20"
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, scale: isVisible ? 1 : 0.9 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-center">
                                    <div className="flex items-center mb-2">
                                        <Clock className="w-4 h-4 mr-2 text-primary" />
                                        <span className="text-sm font-medium text-gray-700">Avg Progress</span>
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold mb-1 text-primary">
                                        12 weeks
                                    </div>
                                    <div className="text-xs text-gray-600">to measurable results</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating Stats Cards - Hidden on Mobile */}
                        <div className="hidden lg:block">
                            {stats.slice(1).map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute bg-white rounded-xl p-3 shadow-lg border border-gray-100 ${
                                        index === 0 ? 'top-12 -left-12' : 'bottom-32 -left-16'
                                    }`}
                                    initial={{ opacity: 0, scale: 0.8, x: -30 }}
                                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, x: isVisible ? 0 : -30 }}
                                    transition={{ delay: 1.6 + index * 0.2, duration: 0.8 }}
                                    whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 2 : -2 }}
                                >
                                    <div className="text-center">
                                        <div className="text-xl font-bold text-blue-600">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-gray-600 max-w-20">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <motion.div
                        className="w-1 h-3 rounded-full mt-2"
                        style={{ backgroundColor: 'var(--color-primary)'}}
                        animate={{ scaleY: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;