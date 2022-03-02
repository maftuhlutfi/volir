import Spinner from "../Spinner";

const Button = ({ className, label, icon, type, size, full, loading, ...otherProps }) => {
    const typeStyle = {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary',
        accent: 'bg-white text-gray-800 border border-gray-400 shadow',
        danger: 'bg-red-500 text-white',
        blue: 'bg-blue-500 text-white'
    }

    const sizeStyle = {
        base: 'py-4 px-8 rounded-[8px]',
        sm: 'py-3 px-5 text-sm rounded-[6px]',
        xs: 'p-2 text-xs rounded-[4px]'
    }

    const iconStyle = {
        base: 'text-2xl',
        sm: 'text-xl',
        xs: 'text-xs'
    }

    return (
        <button className={`relative flex items-center min-h-[56px] justify-center font-bold ${typeStyle[type]} ${size ? sizeStyle[size] : sizeStyle['base']} ${full ? 'w-full' : ''} ${className ? className : ''}`} {...otherProps}>
            {icon && <i className={`${icon} ${size ? iconStyle[size] : iconStyle['base']} ${label ? 'mr-2' : ''}`} />}
            {loading ?
                <>
                    <Spinner />
                </>
                :
                label
            }
        </button>
    );
}

export default Button;