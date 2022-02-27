const TextArea = ({ label, id, className, ...otherProps }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <label htmlFor={id} className='mb-2 font-semibold'>{label}</label>
            <textarea id={id} className="p-4 border border-gray-300 rounded-lg outline-none focus:ring-1 ring-emerald-400 h-28" {...otherProps} />
        </div>
    );
}

export default TextArea;