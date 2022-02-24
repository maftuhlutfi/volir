const DashboardTitle = ({ title }) => {
    return (
        <div className="mb-8">
            <h5 className="text-xl font-semibold mb-6">{title}</h5>
            <div className="h-[1px] w-full bg-gray-300" />
        </div>
    );
}

export default DashboardTitle;