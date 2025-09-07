'use client'

import {useState} from 'react';
import { Menu, X } from 'lucide-react';
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 200], [1, 0.94])
    const y = useTransform(scrollY, [0, 200], [0, 5])
    const backgroundColor = useTransform(scrollY, [0, 200], ['transparent', 'rgb(248,248,248, 0.87)'])
    const right = useTransform(scrollY, [0, 200], [0, 200])
    const rightMobile = useTransform(scrollY, [0, 200], [0, 30])
    const left = useTransform(scrollY, [0, 200], [0, 200])
    const leftMobile = useTransform(scrollY, [0, 200], [0, 30])
    const borderRadius = useTransform(scrollY, [0, 200], [0, 12])

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#programs', label: 'Progx  rams' },
        { href: '#transformations', label: 'Transformations' },
        { href: '#about', label: 'About' },
        { href: '#contact', label: 'Contact' }
    ];

    const handleLinkClick = (href: string) => {
        setIsMenuOpen(false);
        const id = href.startsWith('#') ? href : `#${href}`;
        const element = document.querySelector<HTMLElement>(id);

        if (!element) return;
    };

    return (
        <>
            <motion.header
                className="fixed top-0 z-50 transition-all duration-300 backdrop-blur-xs h-[72px]"
                style={ isMobile ? {
                    left: leftMobile,
                    right: rightMobile, scale,
                    y,
                    backgroundColor,
                    borderRadius } : {
                    left,
                    right,
                    scale,
                    y,
                    backgroundColor,
                    borderRadius
                }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <nav className="flex items-center justify-between h-18" style={{ height: '72px' }}>
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link
                                href="/public"
                                className="flex items-center space-x-2 text-xl font-bold cursor-pointer font-poppins text-color-dark"
                            >
                                <Image src="atlasfit-logo.svg" alt="logo" width={60} height={60}/>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(link.href);
                                    }}
                                    className="relative text-base font-medium transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-1 py-1"
                                    style={{ fontFamily: 'Inter, sans-serif', color: 'var(--color-text-primary)' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* CTA & Mobile Menu */}
                        <div className="flex items-center space-x-4">
                            <Link href="/booking">
                                <motion.button
                                    className="btn-primary hidden sm:inline-flex items-center font-semibold transition-all duration-200"
                                    style={{
                                        backgroundColor: 'var(--color-primary)',
                                        color: 'white',
                                        borderRadius: '10px',
                                        padding: '0.75rem 1.25rem',
                                        fontSize: '0.9rem'
                                    }}
                                    whileHover={{ backgroundColor: 'var(--color-cta-hover)' }}
                                >
                                    Book Free Consult
                                </motion.button>
                            </Link>

                            <button
                                className="lg:hidden p-2 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle mobile menu"
                                style={{
                                    color: 'var(--color-text-primary)',
                                    backgroundColor: isMenuOpen ? 'var(--color-light)' : 'transparent'
                                }}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        <motion.div
                            className="absolute top-18 left-0 right-0 p-6"
                            style={{
                                top: '80px',
                                borderTop: '1px solid #e5e7eb',
                                left: leftMobile,
                                right: rightMobile,
                                backgroundColor: 'rgb(248,248,248, 0.6)',
                                borderRadius
                            }}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="space-y-4">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(link.href);
                                        }}
                                        className="block py-3 px-4 text-lg font-medium rounded-lg transition-colors duration-200"
                                        style={{ fontFamily: 'Inter, sans-serif', color: 'black', backgroundColor: 'rgb(248,248,248, 0.3)' }}
                                        initial={{ x: -30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;