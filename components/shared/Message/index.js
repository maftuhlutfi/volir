const Message = ({ type, message, className }) => {
    if (!type) {
        return ''
    }

    return (
        <div className={`${type == 'error' ? 'bg-red-500' : 'bg-green-500'} text-white fixed ${message ? 'top-0' : '-top-full'} transition-all duration-100 text-center w-full left-0 px-20 py-1 font-medium z-50 capitalize ${className}`}>
            {message}
        </div>
    );
}

export default Message;