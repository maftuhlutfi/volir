const DashboardTitle = ({ title }) => {
    return (
        <div>
            <h5 className="mb-6 text-xl font-semibold">{title}</h5>
            <div className="h-[1px] w-full bg-gray-200" />
        </div>
    );
}

export default DashboardTitle;