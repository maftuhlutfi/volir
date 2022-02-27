import React from "react";
import MainLayout from "../MainLayout";
import Card from "../../components/shared/Card";
import DashboardMenu from "../../components/shared/Dashboard/DashboardMenu";
import ProfileCard from "../../components/shared/ProfileCard";
import MasjidProfileCard from "../../components/Takmir/MasjidProfileCard";

const menuList = [
    {
        title: 'Kegiatan',
        icon: 'icon-calendar',
        href: '/takmir/kelola-kegiatan'
    },
    {
        title: 'Lowongan',
        icon: 'icon-briefcase',
        href: '/takmir/kelola-lowongan'
    },
    {
        title: 'Literasi',
        icon: 'icon-book',
        href: '/takmir/kelola-literasi'
    },
    {
        title: 'Takmir',
        icon: 'icon-users',
        href: '/takmir/daftar-takmir'
    }
]

const TakmirLayout = ({ children }) => {
    return (
        <MainLayout>
            <div className="flex items-start w-full">
                <div className="w-[305px] flex-shrink-0 mr-8">
                    <MasjidProfileCard />
                    <DashboardMenu menuList={menuList} />
                </div>
                <Card className='grid w-full gap-8 p-5'>
                    {children}
                </Card>
            </div>
        </MainLayout>
    );
}

export default TakmirLayout;