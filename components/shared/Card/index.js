const Card = ({ children, className }) => {
    return (
        <div className={`rounded-[20px] bg-white shadow-md border border-gray-300 ${className.includes('p-') ? className : 'p-8'}`}>
            {children}
        </div>
    );
}

export default Card;