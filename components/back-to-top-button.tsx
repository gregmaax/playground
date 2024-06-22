"use client"

import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {ArrowUp} from "lucide-react";


export default function BackToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div>
            {showButton && (
                <Button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 p-2 bg-black text-white"
                >
                    <ArrowUp/>
                </Button>
            )}
        </div>
    )
}