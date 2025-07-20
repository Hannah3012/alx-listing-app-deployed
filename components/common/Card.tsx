import { CardProps } from '@/interfaces';
import Image from 'next/image';
import React from 'react';

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="p-4 border rounded shadow-md">
            <Image src={imageUrl} alt={title} width={20} height={20} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;


