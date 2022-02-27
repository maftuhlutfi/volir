import { useEffect, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import Card from "../Card";

const Modal = ({ children, show, onClose, className }) => {
    const ref = useRef()

    useOnClickOutside(ref, onClose)

    useEffect(() => {
        document.body.style.overflowY = show ? 'hidden' : 'auto'
    }, [show])

    return (
        <div className={`overflow-y-auto fixed py-20 inset-0 bg-gray-800 flex justify-center z-50 items-start transition-all duration-200 ${show ? 'visible bg-opacity-75 ' : 'invisible bg-opacity-0'}`}>
            <Card ref={ref} className={`max-w-[90%] w-[560px] transition-all duration-200 ${show ? 'scale-100' : 'scale-0'} ${className}`}>
                <div className="flex justify-end">
                    <i onClick={onClose} className="relative ml-auto text-3xl cursor-pointer icon-close" />
                </div>
                {children}
            </Card>
        </div>
    );
}

export default Modal;