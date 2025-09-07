import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBooking from "@/components/ContactBooking";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Session | Leo Coach",
    description: "Schedule your 1-on-1 fitness coaching session with Leo. Choose a time that works for you.",
    openGraph: {
        title: "Book a Session | Leo Coach",
        description: "Secure your spot and start your transformation journey today.",
        url: "https://yourdomain.com/booking",
        siteName: "Leo Coach",
        images: [
            {
                url: "/booking-og.jpg",
                width: 1200,
                height: 630,
                alt: "Booking with Leo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Book a Session | Leo Coach",
        description: "Schedule your fitness coaching session with Leo today.",
        images: ["/booking-og.jpg"],
    },
};

export default function BookingPage() {
    return (
        <div>
            <Navbar />
            <ContactBooking />
            <Footer />
        </div>
    );
}
