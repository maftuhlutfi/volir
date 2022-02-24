import NewKegiatan from "../../components/Admin/Dashboard/NewKegiatan";
import NewLowongan from "../../components/Admin/Dashboard/NewLowongan";
import NewUserTable from "../../components/Admin/Dashboard/NewUserTable";
import Stats from "../../components/Admin/Dashboard/Stats";
import CustomHead from "../../components/shared/CustomHead";
import DashboardSubTitle from "../../components/shared/Dashboard/DashboardSubTitle";
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle";
import AdminLayout from "../../layout/AdminLayout";

const AdminPage = () => {
    return (
        <>
            <CustomHead
                title='Dashboard Admin'
                description='Admin dashboard aplikasi volir'
            />
            <AdminLayout>
                <DashboardTitle title='Halo, Admin' />
                <Stats />
                <DashboardSubTitle title='Pengguna Baru' />
                <NewUserTable />
                <DashboardSubTitle title='Kegiatan Terbaru' />
                <NewKegiatan />
                <DashboardSubTitle title='Lowongan Terbaru' />
                <NewLowongan />
            </AdminLayout>
        </>
    );
}

export default AdminPage;