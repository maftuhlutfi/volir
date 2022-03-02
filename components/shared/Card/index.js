import React from "react";

const Card = React.forwardRef(({ children, className, ...otherProps }, ref) => {
    return (
        <div ref={ref ? ref : null} className={`rounded-[20px] bg-white shadow-md border border-gray-300 ${className && className.includes('p-') ? className : 'p-8'} ${className}`} {...otherProps}>
            {children}
        </div>
    );
})

export default Card;