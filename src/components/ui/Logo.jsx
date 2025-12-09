import React from 'react';

const Logo = ({ className = "w-10 h-10", light = false }) => {
    const primaryColor = "#dc2626"; // brand-600
    const secondaryColor = light ? "#ffffff" : "#18181b"; // white or zinc-900

    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="MZ Cooling Tower Logo"
        >
            {/* Minimalist Cooling Tower Shape / Monogram M */}
            <path
                d="M20 80L30 20H45L50 50L55 20H70L80 80H20Z"
                stroke={secondaryColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Cooling Elements (Horizontal slats) */}
            <path
                d="M35 35H65M32 50H68M28 65H72"
                stroke={secondaryColor}
                strokeWidth="4"
                strokeLinecap="round"
                strokeOpacity="0.3"
            />

            {/* Stylized 'Z' integreted or water drop? Let's go for a subtle element */}
            {/* A Red Water Drop / Snowflake center accent */}
            <path
                d="M50 55C50 55 42 62 42 68C42 72.4183 45.5817 76 50 76C54.4183 76 58 72.4183 58 68C58 62 50 55 50 55Z"
                fill={primaryColor}
            />
        </svg>
    );
};

export default Logo;
