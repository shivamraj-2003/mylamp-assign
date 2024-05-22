import React from 'react';

const Code = () => {
    const items = [
        { title: 'Coding Problems', startNow: true },
        { title: '100 Days DSA Sprint', startNow: true },
        { title: 'Coding Assessments', startNow: true },
        { title: 'Coding Trivia', startNow: true },
    ];

    return (
        <div className="flex mt-4 bg-gray-100">
            <div className="bg-white rounded-lg w-full shadow-md p-6">
                { items.map((item, index) => (
                    <div key={ index } className="flex items-center mb-4">
                        <div className="bg-purple-100 text-purple-800  w-72 px-4 py-2 rounded-2xl">
                            { item.title }
                        </div>
                        { item.startNow && (
                            <button className="bg-white border-purple-400 border-2 text-green-700 text-lg font-bold ml-24 w-44 px-4 py-2 rounded-3xl hover:bg-purple-600">
                                Start Now
                            </button>
                        ) }
                    </div>
                )) }
            </div>
        </div>
    );
};

export default Code;