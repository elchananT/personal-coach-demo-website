'use client'

import { useState, useEffect } from 'react';
import {motion, AnimatePresence, useScroll, useTransform} from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    Star,
    TrendingUp,
    Target,
    Award,
    Users,
    Quote,
    Play,
    Pause

} from 'lucide-react';
import {useMediaQuery} from "@/hooks/useMediaQuery";

interface Metric {
    value: number;
    unit: string;
    label: string;
}

interface Metrics {
    weight?: Metric;
    strength?: Metric;
    sleep?: Metric;
    energy?: Metric;
    pullups?: Metric;
    squat?: Metric;
    bodyfat?: Metric;
    consistency?: Metric;
    confidence?: Metric;
    habits?: Metric;
    mood?: Metric;
}

interface Transformation {
    id: number;
    name: string;
    age: number;
    quote: string;
    program: string;
    beforePhoto: string;
    afterPhoto: string;
    metrics: Metrics;
    highlights: string[];
    rating: number;
}

const TransformationsSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [3200, 3800], [0, 200]);
    const [isVisible, setIsVisible] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const element = document.getElementById('transformations-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const transformations: Transformation[] = [
        {
            id: 1,
            name: 'Sarah M.',
            age: 34,
            quote: "I finally quit cycling through plans — Leo kept it practical and I stuck with it.",
            program: '12-week Transform',
            beforePhoto: 'before-sarah',
            afterPhoto: 'after-sarah',
            metrics: {
                weight: { value: -10, unit: 'kg', label: 'Weight Loss' },
                strength: { value: 18, unit: '%', label: 'Deadlift Strength' },
                sleep: { value: 85, unit: '%', label: 'Sleep Quality' },
                energy: { value: 40, unit: '%', label: 'Energy Levels' }
            },
            highlights: ['Lost 10kg', 'Deadlift PR: 85kg', 'Better sleep habits'],
            rating: 5
        },
        {
            id: 2,
            name: 'Jason R.',
            age: 41,
            quote: "I am stronger and less tired at the end of the day — the small habit changes changed everything.",
            program: '12-week Strength',
            beforePhoto: 'before-jason',
            afterPhoto: 'after-jason',
            metrics: {
                squat: { value: 25, unit: '%', label: 'Squat 1RM' },
                bodyfat: { value: -6, unit: '%', label: 'Body Fat' },
                consistency: { value: 92, unit: '%', label: 'Workout Consistency' },
                confidence: { value: 60, unit: '%', label: 'Gym Confidence' }
            },
            highlights: ['Squat PR: 140kg', '6% body fat reduction', '92% consistency rate'],
            rating: 5
        },
        {
            id: 3,
            name: 'Maria L.',
            age: 28,
            quote: "Leo made training doable — actual progress without the drama.",
            program: 'Online Coaching',
            beforePhoto: 'before-maria',
            afterPhoto: 'after-maria',
            metrics: {
                weight: { value: -8, unit: 'kg', label: 'Weight Loss' },
                pullups: { value: 300, unit: '%', label: 'Pull-up Progress' },
                habits: { value: 7, unit: '/7', label: 'Weekly Habits' },
                mood: { value: 45, unit: '%', label: 'Mood Improvement' }
            },
            highlights: ['First pull-up achieved', 'Lost 8kg sustainably', '7/7 habit consistency'],
            rating: 5
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % transformations.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [isAutoPlaying, transformations.length]);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % transformations.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
        setIsAutoPlaying(false);
    };

    const MetricBar = ({ metric, delay = 0 }: { metric: Metric; delay?: number }) => (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-300">{metric.label}</span>
                <span
                    className="text-lg font-bold text-teal-300"
                >
                    {metric.value > 0 ? '+' : ''}{metric.value}{metric.unit}
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600"
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${Math.min(Math.abs(metric.value), 100)}%` : 0 }}
                    transition={{ delay: delay + 0.5, duration: 1, ease: "easeOut" }}
                />
            </div>
        </div>
    );

    return (
        <section
            id="transformations-section"
            className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
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
                        className="inline-flex items-center px-4 py-2 rounded-full mb-4 bg-blue-500 text-white"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Award className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Real Transformations</span>
                    </motion.div>

                    <h2
                        style={{ color: 'white' }}
                        className="text-4xl lg:text-5xl font-bold mb-6 font-sans"
                    >
                        Success{" "}
                        <span className="text-blue-500">Stories</span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Real people, real results. See how our clients transformed their lives in just 12 weeks.
                    </p>

                    <div className="mt-4 text-sm text-gray-400">
                        <span className="bg-gray-800 px-3 py-1 rounded-full">
                            ⚡ Sample transformations for demonstration
                        </span>
                    </div>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSlide}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            {/* Left Side - Before/After Photos */}
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Before Photo */}
                                    <motion.div
                                        className="relative group"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="aspect-[3/4] bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl overflow-hidden shadow-2xl">
                                            <div className="w-full h-full flex items-center justify-center text-gray-600">
                                                <div className="text-center">
                                                    <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                                    <p className="text-sm font-medium">Before</p>
                                                    <p className="text-xs opacity-75">Client Photo</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-red-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            BEFORE
                                        </div>
                                    </motion.div>

                                    {/* After Photo */}
                                    <motion.div
                                        className="relative group"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="aspect-[3/4] bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden shadow-2xl">
                                            <div className="w-full h-full flex items-center justify-center text-gray-600">
                                                <div className="text-center">
                                                    <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                                    <p className="text-sm font-medium">After</p>
                                                    <p className="text-xs opacity-75">Client Photo</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-green-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            AFTER
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Arrow Indicator */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <TrendingUp className="w-8 h-8 text-teal-600" />
                                </motion.div>
                            </div>

                            {/* Right Side - Details & Metrics */}
                            <div className="text-white">
                                {/* Client Info */}
                                <motion.div
                                    className="mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="flex">
                                            {[...Array(transformations[activeSlide].rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 ml-1 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <span className="ml-3 text-gray-300 text-sm">
                                            {transformations[activeSlide].program}
                                        </span>
                                    </div>

                                    <h3
                                        style={{ color: 'white' }}
                                        className="text-3xl font-bold mb-2"
                                    >
                                        {transformations[activeSlide].name}
                                        <span className="text-gray-400 text-xl ml-2">
                                            ({transformations[activeSlide].age})
                                        </span>
                                    </h3>

                                    <div className="flex items-start">
                                        <Quote className="w-6 h-6 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                        <p className="text-lg text-gray-200 italic leading-relaxed">
                                            &#34;{transformations[activeSlide].quote}&#34;
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Metrics Grid */}
                                <motion.div
                                    className="grid grid-cols-2 gap-6 mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    {Object.entries(transformations[activeSlide].metrics).map(([key, metric], index) => (
                                        <motion.div
                                            key={key}
                                            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                        >
                                            <MetricBar metric={metric} delay={index * 0.1} />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Highlights */}
                                <motion.div
                                    className="mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                >
                                    <h4
                                        style={{ color: '#d1d5dc' }}
                                        className="text-lg font-semibold mb-4"
                                    >
                                        Key Achievements:
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {transformations[activeSlide].highlights.map((highlight, index) => (
                                            <motion.span
                                                key={index}
                                                className="px-3 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white text-sm font-medium rounded-full"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {highlight}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center mt-12 space-x-6">
                        <motion.button
                            onClick={prevSlide}
                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="flex space-x-3">
                            {transformations.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setActiveSlide(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                        index === activeSlide
                                            ? 'bg-white scale-125'
                                            : 'bg-white/40 hover:bg-white/60'
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextSlide}
                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>

                    {/* Autoplay indicator */}
                    <div className="flex justify-center mt-4">
                        <motion.button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className={`text-sm px-3 py-1 rounded-full transition-all duration-200 ${
                                isAutoPlaying
                                    ? 'bg-green-400/20 text-green-400'
                                    : 'bg-gray-500/20 text-gray-400'
                            }`}
                            whileHover={{ scale: 1.05 }}
                        >
                            {isAutoPlaying ?
                                <span className="flex items-center gap-1">
                                    <Pause className="w-4 h-4" />
                                    Auto-playing
                                </span>
                                :
                                <span className="flex items-center gap-1">
                                    <Play className="w-4 h-4" />
                                    Click to auto-play
                                </span>
                            }
                        </motion.button>
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    style={isMobile ? {} : { y }}
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <p className="text-lg text-gray-300 mb-6">
                        Ready to write your own success story?
                    </p>

                    <motion.button
                        className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 text-white hover:bg-teal-700"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 20px 40px rgba(0, 194, 168, 0.3)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Target className="mr-3 w-5 h-5" />
                        Start Your Transformation
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default TransformationsSection;