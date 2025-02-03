import React from 'react';

interface ProductProps {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, description, price, imageUrl }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-56 object-cover" src={imageUrl} alt={name} />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
                <h3 className="text-lg font-bold text-gray-900 mt-2">{price}</h3>
            </div>
        </div>
    );
}

export default ProductCard;
