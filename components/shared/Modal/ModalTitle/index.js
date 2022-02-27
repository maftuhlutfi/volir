const ModalTitle = ({ title }) => {
    return (
        <div className="mb-8">
            <h5 className="mb-6 text-xl font-semibold text-center">{title}</h5>
            <div className="h-[1px] w-full bg-gray-200" />
        </div>
    );
}

export default ModalTitle;