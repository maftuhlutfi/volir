import Image from "next/image";

const LoginWithButton = ({ type, className, href }) => {
    return (
        <a
            href={href}
            className={`flex items-center py-4 px-8 rounded-[8px] cursor-pointer ${type == 'google' ? 'bg-white text-gray-800 border border-gray-400 shadow' : 'bg-blue-600 text-white'} ${className}`}>
            <Image src={type == 'google' ? '/icons/login/icon-google.svg' : '/icons/login/icon-facebook.svg'} width={20} height={20} />
            <div className="ml-4 text-inherit">Lanjutkan dengan <span className="capitalize text-inherit">{type}</span></div>
        </a>
    );
}

export default LoginWithButton;