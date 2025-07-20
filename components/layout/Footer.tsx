import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-6 mt-8">
            <div className="container mx-auto text-center text-sm">
                <p>&copy; 2025 LuxStay. All rights reserved.</p>
                <div className="mt-2">
                    <a href="#" className="hover:underline mx-2">
                        Privacy Policy
                    </a>
                    |
                    <a href="#" className="hover:underline mx-2">
                        Terms of Service
                    </a>
                    |
                    <a href="#" className="hover:underline mx-2">
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;