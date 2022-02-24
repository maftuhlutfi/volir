import React from "react";
import MainLayout from "../MainLayout";
import Card from "../../components/shared/Card";
import DashboardMenu from "../../components/shared/Dashboard/DashboardMenu";
import ProfileCard from "../../components/shared/ProfileCard";

const menuList = [
    {
        title: 'Dashboard',
        icon: 'icon-dashboard',
        href: '/admin'
    },
    {
        title: 'Kelola Masjid',
        icon: 'icon-mosque',
        href: '/admin/kelola-masjid'
    },
    {
        title: 'Kelola Pengguna',
        icon: 'icon-users',
        href: '/admin/kelola-pengguna'
    },
    {
        title: 'Dashboard',
        icon: 'icon-logout',
        href: '/logout'
    }
]

const AdminLayout = ({ children }) => {
    return (
        <MainLayout>
            <div className="flex items-start w-full">
                <div className="w-[305px] flex-shrink-0 mr-8">
                    <ProfileCard />
                    <DashboardMenu menuList={menuList} />
                </div>
                <Card className='grid w-full gap-8 p-5'>
                    {children}
                </Card>
            </div>
        </MainLayout>
    );
}

export default AdminLayout;