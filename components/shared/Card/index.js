const Card = ({ children, className }) => {
    return (
        <div className={`p-8 rounded-[20px] bg-white shadow-md border border-gray-300 ${className}`}>
            {children}
        </div>
    );
}

export default Card;