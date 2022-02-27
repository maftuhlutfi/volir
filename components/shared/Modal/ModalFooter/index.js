const ModalFooter = ({ children }) => {
    return (
        <div className="mt-8">
            <div className="h-[1px] w-full bg-gray-200 mb-6" />
            {children}
        </div>
    );
}

export default ModalFooter;