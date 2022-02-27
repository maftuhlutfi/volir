const TextField = ({ label, id, className, ...otherProps }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <label htmlFor={id} className='mb-2 font-semibold'>{label}</label>
            <input id={id} className="p-4 border border-gray-300 rounded-lg outline-none focus:ring-1 ring-emerald-400" {...otherProps} />
        </div >
    );
}

export default TextField;