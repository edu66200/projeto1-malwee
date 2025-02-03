import React from 'react';

interface CategoryProps {
    name: string;
    imageUrl: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ name, imageUrl }) => {
    return (
        <div className="text-center bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-56 object-cover" src={imageUrl} alt={name} />
            <h2 className="text-lg font-semibold text-gray-800 p-4">{name}</h2>
        </div>
    );
}

export default CategoryCard;
