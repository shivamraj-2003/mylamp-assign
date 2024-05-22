import React from 'react';

const Calenderview = () => {
    const colors = ['bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600'];

    return (
        <div className="flex flex-col items-center">
            <div className="grid mt-2 grid-cols-5 gap-1">
                { Array.from({ length: 30 }, (_, i) => (
                    <div key={ i } className={ `w-6 h-8 rounded-lg ${colors[i % colors.length]}` }></div>
                )) }
            </div>

        </div>
    );
};

export default Calenderview;