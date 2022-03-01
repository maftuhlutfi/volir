const DateRangeInput = ({ label, id, className, name, onChange, value, ...otherProps }) => {
    const handleChange = e => {
        onChange({
            ...e,
            target: {
                name,
                value: {
                    ...value,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    return (
        <div className={`flex flex-col ${className}`}>
            <label htmlFor={id} className='mb-2 font-semibold'>{label}</label>
            <div className="flex items-center">
                <input id={`${id}-start`} {...otherProps} type='date' name='start' onChange={handleChange} className="p-4 border w-1/2 flex-shrink border-gray-300 rounded-lg outline-none focus:ring-1 ring-emerald-400" />
                <div className="mx-4">-</div>
                <input id={`${id}-end`} {...otherProps} type='date' name='end' onChange={handleChange} className="p-4 border w-1/2 flex-shrink border-gray-300 rounded-lg outline-none focus:ring-1 ring-emerald-400" />
            </div>
        </div >
    );
}

export default DateRangeInput;