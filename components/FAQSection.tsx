'use client'

import React, {JSX, useState} from 'react';
import { ChevronDown, HelpCircle, Clock, Utensils, Dumbbell, CreditCard, Users, MessageCircle } from 'lucide-react';
import {useScroll, useTransform, motion} from "framer-motion";
import Link from "next/link";
import {useMediaQuery} from "@/hooks/useMediaQuery";

interface FaqData {
    id: number,
    category: string,
    icon: JSX.Element,
    question: string,
    answer:string
}

const FAQSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [9000, 11000], [0, 250]);
    const [openItem, setOpenItem] = useState(null);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const faqData: FaqData[] = [
        {
            id: 1,
            category: 'Getting Started',
            icon: <HelpCircle className="w-5 h-5" />,
            question: 'How do online sessions work?',
            answer: 'Online sessions are conducted via video call using Zoom or similar platforms. You\'ll receive a custom workout program delivered through our mobile app, and we\'ll have scheduled check-ins to review your form, progress, and adjust your program as needed. All you need is basic equipment or a gym membership.'
        },
        {
            id: 2,
            category: 'Results & Timeline',
            icon: <Clock className="w-5 h-5" />,
            question: 'How quickly will I see results?',
            answer: 'Most clients notice improvements in energy and strength within 2-3 weeks. Visible physical changes typically appear around 4-6 weeks with consistent effort. Significant transformations usually occur within 8-12 weeks, depending on your starting point and program adherence.'
        },
        {
            id: 3,
            category: 'Nutrition',
            icon: <Utensils className="w-5 h-5" />,
            question: 'Do you write meal plans?',
            answer: 'Yes, but we focus on flexible nutrition coaching rather than rigid meal plans. We provide personalized macronutrient targets, food guidelines, and teach you how to make sustainable choices that fit your lifestyle. This approach helps you develop long-term healthy eating habits.'
        },
        {
            id: 4,
            category: 'Training',
            icon: <Dumbbell className="w-5 h-5" />,
            question: 'What if I\'m a complete beginner?',
            answer: 'Perfect! We specialize in helping beginners build confidence and proper movement patterns. Your program will start with fundamental exercises and progressively advance as you get stronger. We provide detailed video demonstrations and form coaching to ensure you\'re exercising safely and effectively.'
        },
        {
            id: 5,
            category: 'Equipment',
            icon: <Dumbbell className="w-5 h-5" />,
            question: 'What equipment do I need?',
            answer: 'This depends on your program and goals. For home workouts, basic equipment like resistance bands, dumbbells, and a yoga mat can be sufficient. For gym-based programs, a standard gym membership works perfectly. We\'ll customize your program based on what equipment you have access to.'
        },
        {
            id: 6,
            category: 'Pricing',
            icon: <CreditCard className="w-5 h-5" />,
            question: 'Are there any hidden fees or contracts?',
            answer: 'No hidden fees or long-term contracts. You pay month-to-month and can cancel anytime with 30 days notice. The price you see includes everything: custom programming, app access, check-ins, and support. The only additional cost might be optional supplements we recommend.'
        },
        {
            id: 7,
            category: 'Support',
            icon: <MessageCircle className="w-5 h-5" />,
            question: 'How much support will I receive?',
            answer: 'Support level depends on your program tier. All clients get email support and app access. Performance tier includes weekly check-ins, while Transform tier includes bi-weekly video calls plus 24/7 chat support. We\'re committed to being available when you need guidance.'
        },
        {
            id: 8,
            category: 'Program Changes',
            icon: <Users className="w-5 h-5" />,
            question: 'Can I switch programs later?',
            answer: 'Absolutely! As your goals and needs evolve, we can adjust your program or move you to a different tier. We regularly assess your progress and will recommend changes to keep you moving toward your goals effectively.'
        },
        {
            id: 9,
            category: 'Injuries & Limitations',
            icon: <HelpCircle className="w-5 h-5" />,
            question: 'What if I have injuries or physical limitations?',
            answer: "We work with clients with various physical limitations and past injuries. During your consultation, we'll discuss your history and any restrictions. Programs are modified accordingly, and we often coordinate with your healthcare providers when necessary to ensure safe, effective training."
        },
        {
            id: 10,
            category: 'Guarantee',
            icon: <HelpCircle className="w-5 h-5" />,
            question: 'What if I\'m not satisfied with the program?',
            answer: `We offer a 30-day money-back guarantee. If you're not completely satisfied within your first month, we'll refund your payment in full. We're confident in our methods and want to ensure every client has a positive experience.`
        }
    ];

    const toggleItem = (itemId: number) => {
        setOpenItem(openItem === itemId ? null : itemId);
    };

    // Group FAQs by category
    const categories = [...new Set(faqData.map(item => item.category))];
    const groupedFaqs = categories.map(category => ({
        category,
        items: faqData.filter(item => item.category === category)
    }));

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-white to-light relative overflow-hidden" id="faq">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-40 left-32 w-48 h-48 bg-accent2 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 right-32 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent2/10 rounded-full text-accent2 font-semibold text-sm mb-4">
                        <HelpCircle className="w-4 h-4" />
                        Got Questions?
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Frequently Asked
                        <br />
                        <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about our programs, process, and what to expect.
                        Can&#39;t find your answer? We&#39;re here to help.
                    </p>
                </div>

                {/* FAQ Categories Quick Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const element = document.getElementById(`category-${category.replace(/\s+/g, '-').toLowerCase()}`);
                                element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            className="px-4 py-2 bg-white/80 hover:bg-primary/10 border border-white/30 hover:border-primary/30 rounded-full text-sm font-medium text-secondary hover:text-primary transition-all duration-200"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-8">
                    {groupedFaqs.map((group, groupIndex) => (
                        <div key={groupIndex} id={`category-${group.category.replace(/\s+/g, '-').toLowerCase()}`}>
                            {/* Category header */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-dark flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                        {group.items[0].icon}
                                    </div>
                                    {group.category}
                                </h3>
                            </div>

                            {/* FAQ items in this category */}
                            <div className="space-y-4">
                                {group.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-sm hover:shadow-md transition-all duration-200"
                                    >
                                        <button
                                            onClick={() => toggleItem(item.id)}
                                            className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
                                            aria-expanded={openItem === item.id}
                                            aria-controls={`faq-answer-${item.id}`}
                                        >
                      <span className="font-semibold text-dark text-lg pr-4">
                        {item.question}
                      </span>
                                            <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                                                openItem === item.id ? 'rotate-180' : ''
                                            }`}>
                                                <ChevronDown className="w-5 h-5 text-primary" />
                                            </div>
                                        </button>

                                        <div
                                            id={`faq-answer-${item.id}`}
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="px-6 pb-6">
                                                <div className="pt-2 border-t border-gray-100">
                                                    <p className="text-secondary leading-relaxed text-base">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions CTA */}
                <motion.div
                    style={isMobile ? {} : { y }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 md:p-12 rounded-3xl border border-primary/20">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                            <MessageCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-secondary text-lg mb-6 max-w-2xl mx-auto">
                            Our team is here to help! Book a free consultation to get personalized answers
                            and see if our programs are right for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/booking">
                                <button className="btn-primary px-8 py-4 text-lg hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
                                    Book Free Consultation
                                </button>
                            </Link>
                            <button className="btn-secondary px-8 py-4 text-lg hover:-translate-y-1 transition-all duration-200">
                                Send us a Message
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;