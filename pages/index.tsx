import React from "react";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE } from "@/constants/index";
import { PropertyProps } from "@/interfaces/index";
import Pill from "@/components/Pill";

const filters = [
    "Top Villa",
    "Self Checkin",
    "Beachfront",
    "Luxury",
    "Pet Friendly",
];

const HomePage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
                }}
            >
                <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Find your favorite place here!
                    </h1>
                    <p className="text-lg text-gray-200">
                        The best prices for over 2 million properties worldwide.
                    </p>
                </div>
            </section>
            {/* Filter Section */}
            <section className="container mx-auto py-6 px-4">
                <div className="flex flex-wrap gap-2">
                    {filters.map((filter, index) => (
                        <Pill key={index} label={filter} onClick={() => { }} />
                    ))}
                </div>
            </section>
            {/* Listing Section */}
            <section className="container mx-auto py-6 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index) => (
                        <div
                            key={index}
                            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <div className="w-full h-48 relative">
                                <Image
                                    src={property.image}
                                    alt={property.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                    priority={index < 3}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
                                <p className="text-gray-600 mb-2">${property.price} / night</p>
                                <p className="text-yellow-500">⭐ {property.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;