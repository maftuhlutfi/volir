import StatsCard from "./StatsCard";

const statsList = [
    {
        icon: 'icon-users',
        value: 4,
        title: 'Total Pengguna'
    },
    {
        icon: 'icon-mosque',
        value: 4,
        title: 'Total Masjid'
    },
    {
        icon: 'icon-calendar',
        value: 5,
        title: 'Total Kegiatan'
    },
    {
        icon: 'icon-briefcase',
        value: 2,
        title: 'Total Lowongan'
    }
]

const Stats = () => {
    return (
        <div className="grid grid-cols-4 gap-8 max-w-[720px]">
            {statsList.map((stat, i) =>
                <StatsCard key={i} {...stat} />
            )}
        </div>
    );
}

export default Stats;