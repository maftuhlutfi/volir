const DashboardTitle = ({ title, button, description }) => {
    return (
        <div>
            <div className={`mb-6 ${button ? 'flex items-center justify-between' : ''}`}>
                <div>
                    <h5 className="text-xl font-semibold">{title}</h5>
                    {description && <p className="text-sm text-gray-600 mt-1.5">{description}</p>}
                </div>
                {button}
            </div>
            <div className="h-[1px] w-full bg-gray-200" />
        </div>
    );
}

export default DashboardTitle;