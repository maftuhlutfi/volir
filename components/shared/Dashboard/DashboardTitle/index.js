const DashboardTitle = ({ title, button }) => {
    return (
        <div>
            <div className={`mb-6 ${button ? 'flex items-center justify-between' : ''}`}>
                <h5 className="text-xl font-semibold">{title}</h5>
                {button}
            </div>
            <div className="h-[1px] w-full bg-gray-200" />
        </div>
    );
}

export default DashboardTitle;