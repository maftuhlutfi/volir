import Image from "next/image";

const ImageInput = ({ label, id, className, image, ...otherProps }) => {
    return (
        <div className={`flex flex-col w-min ${className}`}>
            <label htmlFor={id} className='cursor-pointer'>
                <div className='mb-2 font-semibold'>{label}</div>
                <div className="w-[120px] h-[120px] flex items-center justify-center bg-dark-green rounded-2xl overflow-hidden relative">
                    {image ?
                        <Image src={URL.createObjectURL(image)} layout='fill' className="object-contain object-center" />
                        :
                        <i className="w-10 h-10 text-white icon-image text-[40px]" />
                    }
                </div>
            </label>
            <input id={id} type='file' accept="image/*" className="hidden" {...otherProps} />
        </div >
    );
}

export default ImageInput;