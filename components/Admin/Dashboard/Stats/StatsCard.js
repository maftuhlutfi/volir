const StatsCard = ({ icon, title, value }) => {
    return (
        <div className="w-full p-4 text-white bg-primary rounded-[20px]">
            <i className={`${icon} text-[32px]`} />
            <h5 className="mt-3 mb-1 text-2xl font-bold">{value}</h5>
            <p>{title}</p>
        </div>
    );
}

export default StatsCard;