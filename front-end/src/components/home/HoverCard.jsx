import React, { useState, useRef, useEffect } from 'react';

const HoverCard = ({ setShowType }) => {
    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState({});
    const hoverRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleHover = () => {
            if (hoverRef.current && cardRef.current) {
                const hoverRect = hoverRef.current.getBoundingClientRect();
                const cardRect = cardRef.current.getBoundingClientRect();
                const isOverflowingRight = hoverRect.left + cardRect.width > window.innerWidth;
                const isOverflowingLeft = hoverRect.left < 0;

                if (isOverflowingRight) {
                    setPosition({ right: 0, left: 'auto' });
                } else if (isOverflowingLeft) {
                    setPosition({ left: 0, right: 'auto' });
                } else {
                    setPosition({ left: 0, right: 'auto' });
                }
            }
        };

        handleHover();
        window.addEventListener('resize', handleHover);
        return () => window.removeEventListener('resize', handleHover);
    }, [hovered]);

    return (
        <div className='relative' ref={hoverRef}>
            <div
                className='underline cursor-pointer'
                onMouseEnter={() => setHovered(true)}
            >
                View
            </div>
            {hovered && (
                <div
                    ref={cardRef}
                    className='absolute top-full mt-2 p-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10'
                    style={position}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <button
                        className='bg-[#D4BDAC] hover:bg-[#FFB4C2] text-[#FFF1DB] font-mono px-4 py-1 rounded-md mb-2 w-full'
                        onClick={() => setShowType('table')}
                    >
                        Table
                    </button>
                    <button
                        className='bg-[#D4BDAC] hover:bg-[#FFB4C2] text-[#FFF1DB] font-mono px-4 py-1 rounded-md w-full'
                        onClick={() => setShowType('card')}
                    >
                        Card
                    </button>
                </div>
            )}
        </div>
    );
};

export default HoverCard;
