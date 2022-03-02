const Spinner = ({ className }) => {
    return (
        <div className='flex items-center justify-center absolute'>
            <span className={`h-6 w-6 border-4 animate-spin border-white border-opacity-50 rounded-full ${className}`} style={{ borderTopColor: 'white' }} />
        </div>
    );
}

export default Spinner;