import CustomHead from "../../components/shared/CustomHead";
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle";
import MainLayout from "../../layout/MainLayout";
import AdminLayout from "../../layout/MainLayout/AdminLayout";

const AdminPage = () => {
    return (
        <>
            <CustomHead
                title='Dashboard Admin'
                description='Admin dashboard aplikasi volir'
            />
            <AdminLayout>
                <DashboardTitle title='Halo, Admin' />
            </AdminLayout>
        </>
    );
}

export default AdminPage;