'use client'

import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, ArrowUp, Heart, Shield, FileText } from 'lucide-react';
import Image from "next/image";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Programs', href: '#programs' },
        { name: 'About', href: '#about' },
        { name: 'Transformations', href: '#transformations' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' }
    ];

    const programs = [
        { name: '1:1 Personal Training', href: '#programs' },
        { name: 'Online Coaching', href: '#programs' },
        { name: '12-Week Transform', href: '#programs' },
        { name: 'Nutrition Plans', href: '#programs' },
        { name: 'Group Sessions', href: '#programs' }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'Refund Policy', href: '#refund' }
    ];

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Left Column - Logo & Description */}
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            {/* Logo */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                              <Image src="atlasfit-logo-dark.svg" alt="logo" width={100} height={100}/>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed">
                                Empowering busy professionals to build sustainable fitness habits through
                                evidence-based coaching and personalized programming.
                            </p>
                        </div>

                        {/* Certifications & Trust Badges */}
                        <div>
                            <p className="text-sm font-medium text-gray-400 mb-3">Certified & Trusted</p>
                            <div className="flex flex-wrap gap-3">
                                <div className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium border border-gray-700">
                                    NASM Certified
                                </div>
                                <div className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium border border-gray-700">
                                    CSCS
                                </div>
                                <div className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium border border-gray-700">
                                    PN L2
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <p className="text-sm font-medium text-gray-400 mb-3">Follow Us</p>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" style={{ color: '#ffffff' }}/>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" style={{ color: '#ffffff' }} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" style={{ color: '#ffffff' }}/>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-5 h-5" style={{ color: '#ffffff' }}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        style={{ color: '#9f9c9c' }}
                                        className="hover:text-teal-400 transition-colors duration-200 hover:underline"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs & Services */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Programs</h3>
                        <ul className="space-y-3">
                            {programs.map((program, index) => (
                                <li key={index}>
                                    <a
                                        href={program.href}
                                        style={{ color: '#9f9c9c' }}
                                        className="hover:text-teal-400 transition-colors duration-200 hover:underline"
                                    >
                                        {program.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Contact Info</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <div style={{ color: '#d3cccc'}}>
                                    <p className="font-medium">Studio Location</p>
                                    <p className="text-sm">123 Fitness Street</p>
                                    <p className="text-sm">Downtown District</p>
                                    <p className="text-sm">New York, NY 10001</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <div className="text-gray-300">
                                    <p className="font-medium">Phone</p>
                                    <p className="text-sm">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <div className="text-gray-300">
                                    <p className="font-medium">Email</p>
                                    <p className="text-sm">hello@atlasfit.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <div className="text-gray-300">
                                    <p className="font-medium">Hours</p>
                                    <p className="text-sm">Mon-Fri: 6am - 8pm</p>
                                    <p className="text-sm">Sat-Sun: 8am - 6pm</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <a
                                href="#contact"
                                style={{ color: '#fff' }}
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                            >
                                <Phone className="w-4 h-4" />
                                Book Free Consultation
                            </a>
                        </div>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-16 pt-8 border-t border-gray-800 px-2 md:px-30">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3
                            style={{ color: 'white' }}
                            className="text-2xl font-bold mb-4"
                        >
                            You should know that !
                        </h3>
                        </div>
                        <p className="text-sm text-gray-400 text-center text-wrap mt-3">
                            This website is a portfolio project created for demonstration purposes only.
                            The company and services presented here are fictional and intended solely to showcase web design and development skills.
                        </p>
                    </div>

                {/* Bottom Row - Copyright & Legal */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

                        {/* Left - Copyright */}
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>© {currentYear} AtlasFit Coaching. Made with</span>
                            <Heart className="w-4 h-4 text-red-500" />
                            <span>for fitness transformation.</span>
                        </div>

                        {/* Center - Legal Links */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            {legalLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    style={{ color: '#fff' }}
                                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 flex items-center gap-1"
                                >
                                    {link.name === 'Privacy Policy' && <Shield className="w-3 h-3" />}
                                    {link.name === 'Terms of Service' && <FileText className="w-3 h-3" />}
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Right - Scroll to Top */}
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-200 group"
                            aria-label="Scroll to top"
                        >
                            <span className="text-sm">Back to top</span>
                            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-200">
                                <ArrowUp className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Structured Data / LocalBusiness Schema (Hidden) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "AtlasFit Coaching",
                            "image": "https://atlasfit.com/logo.jpg",
                            "url": "https://atlasfit.com",
                            "telephone": "+1-555-123-4567",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "123 Fitness Street",
                                "addressLocality": "New York",
                                "addressRegion": "NY",
                                "postalCode": "10001",
                                "addressCountry": "US"
                            },
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                    "opens": "06:00",
                                    "closes": "20:00"
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Saturday", "Sunday"],
                                    "opens": "08:00",
                                    "closes": "18:00"
                                }
                            ]
                        })
                    }}
                />
            </div>
        </footer>
    );
};

export default Footer;