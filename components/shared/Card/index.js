const Card = ({ children, className, ...otherProps }) => {
    return (
        <div className={`rounded-[20px] bg-white shadow-md border border-gray-300 ${className.includes('p-') ? className : 'p-8'} ${className}`} {...otherProps}>
            {children}
        </div>
    );
}

export default Card;