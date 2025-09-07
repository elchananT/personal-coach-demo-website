'use client'

import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Mail, Clock, CheckCircle, User, MessageCircle, Target, Timer } from 'lucide-react';
import { useScroll, useTransform, motion } from "framer-motion";

interface FormData {
    name: string;
    email: string;
    goal: string;
    timeframe: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    goal?: string;
    timeframe?: string;
}

interface DateInfo {
    date: string;
    day: string;
    available: boolean;
}

const ContactBooking: React.FC = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [12000, 13000], [0, 200]);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        goal: '',
        timeframe: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.goal.trim()) {
            newErrors.goal = 'Please tell us your main goal';
        }

        if (!formData.timeframe.trim()) {
            newErrors.timeframe = 'Please select your timeframe';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    const handleReset = (): void => {
        setIsSubmitted(false);
        setFormData({
            name: '',
            email: '',
            goal: '',
            timeframe: '',
            message: ''
        });
        setErrors({});
    };

    const timeSlots: string[] = [
        '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ];

    const availableDates: DateInfo[] = [
        { date: 'Dec 15', day: 'Fri', available: true },
        { date: 'Dec 18', day: 'Mon', available: true },
        { date: 'Dec 19', day: 'Tue', available: false },
        { date: 'Dec 20', day: 'Wed', available: true },
        { date: 'Dec 21', day: 'Thu', available: true },
        { date: 'Dec 22', day: 'Fri', available: true }
    ];

    if (isSubmitted) {
        return (
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="contact">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Thanks! We&#39;ll be in touch soon.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            We&#39;ll email you within 24 hours to schedule your free consultation.
                            In the meantime, check your inbox for some helpful resources.
                        </p>
                        <button
                            onClick={handleReset}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:scale-105 transform transition-all duration-200"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Send Another Message
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="contact">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ready to Start Your Transformation?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Book your free consultation or send us a message. We&#39;ll create a personalized plan
                        that fits your schedule and goals.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
                            <p className="text-gray-600">Tell us about your goals and we&#39;ll create a custom plan for you.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                            errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                            errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="your@email.com"
                                    />
                                </div>
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Main Goal *
                                </label>
                                <div className="relative">
                                    <Target className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <select
                                        name="goal"
                                        value={formData.goal}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none ${
                                            errors.goal ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select your main goal</option>
                                        <option value="weight-loss">Weight Loss</option>
                                        <option value="muscle-gain">Build Muscle</option>
                                        <option value="strength">Get Stronger</option>
                                        <option value="general-fitness">General Fitness</option>
                                        <option value="sports-performance">Sports Performance</option>
                                        <option value="rehabilitation">Injury Recovery</option>
                                    </select>
                                </div>
                                {errors.goal && <p className="mt-1 text-sm text-red-600">{errors.goal}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    When do you want to start? *
                                </label>
                                <div className="relative">
                                    <Timer className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <select
                                        name="timeframe"
                                        value={formData.timeframe}
                                        onChange={handleInputChange}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none ${
                                            errors.timeframe ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select timeframe</option>
                                        <option value="immediately">Immediately</option>
                                        <option value="this-week">This Week</option>
                                        <option value="next-week">Next Week</option>
                                        <option value="this-month">This Month</option>
                                        <option value="next-month">Next Month</option>
                                    </select>
                                </div>
                                {errors.timeframe && <p className="mt-1 text-sm text-red-600">{errors.timeframe}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Additional Information (Optional)
                                </label>
                                <div className="relative">
                                    <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                        placeholder="Tell us about any injuries, experience level, or specific questions..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 px-6 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform transition-all duration-200"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    'Book Free Consultation'
                                )}
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-600 text-center">
                                📞 <strong>Prefer to call?</strong> We&#39;ll respond within 24 hours via your preferred method.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Booking Calendar & Info */}
                    <div className="space-y-8">
                        {/* Quick Booking Calendar */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="w-6 h-6 text-teal-600" />
                                <h3 className="text-2xl font-bold text-gray-900">Quick Book</h3>
                            </div>

                            <p className="text-gray-600 mb-6">
                                See an open time that works? Click to book instantly.
                            </p>

                            {/* Available Dates */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {availableDates.map((dateInfo, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        disabled={!dateInfo.available}
                                        className={`p-3 rounded-lg border text-center transition-all ${
                                            dateInfo.available
                                                ? 'border-teal-200 hover:border-teal-400 hover:bg-teal-50 cursor-pointer'
                                                : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                                        }`}
                                    >
                                        <div className="font-medium">{dateInfo.date}</div>
                                        <div className="text-sm text-gray-500">{dateInfo.day}</div>
                                    </button>
                                ))}
                            </div>

                            {/* Time Slots */}
                            <div>
                                <h4 className="font-medium text-gray-900 mb-3">Available Times</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {timeSlots.map((time, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className="px-3 py-2 text-sm border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-blue-900">Free 30-Minute Consultation</p>
                                        <p className="text-sm text-blue-700">
                                            We&#39;ll discuss your goals, assess your current fitness level, and create a personalized plan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Phone</p>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Email</p>
                                        <p className="text-gray-600">hello@atlasfit.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Studio Location</p>
                                        <p className="text-gray-600">
                                            123 Fitness Street<br />
                                            Downtown District<br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Hours</p>
                                        <p className="text-gray-600">
                                            Mon-Fri: 6am - 8pm<br />
                                            Sat-Sun: 8am - 6pm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                                        <p className="text-gray-600 font-medium">Interactive Map</p>
                                        <p className="text-sm text-gray-500">123 Fitness Street, NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Elements */}
                <motion.div
                    style={{ y }}
                    className="mt-16 text-center"
                >
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Response within 24 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>No pressure, no commitment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Your privacy is protected</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactBooking;