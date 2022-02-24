import MainLayout from "..";
import Card from "../../../components/shared/Card";
import DashboardMenu from "../../../components/shared/Dashboard/DashboardMenu";
import ProfileCard from "../../../components/shared/ProfileCard";

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
        icon: 'icon-user',
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
            <div className="flex w-full items-start">
                <div className="w-[305px] flex-shrink-0 mr-8">
                    <ProfileCard />
                    <DashboardMenu menuList={menuList} />
                </div>
                <Card className='p-5 w-full'>
                    {children}
                </Card>
            </div>
        </MainLayout>
    );
}

export default AdminLayout;