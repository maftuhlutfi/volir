import DeleteModal from "../../components/Admin/KelolaPengguna/DeleteModal";
import UserTable from "../../components/Admin/KelolaPengguna/UserTable";
import VerifModal from "../../components/Admin/KelolaPengguna/VerifModal";
import CustomHead from "../../components/shared/CustomHead";
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle";
import AdminLayout from "../../layout/AdminLayout";

const KelolaPenggunaPage = () => {
    return (
        <>
            <CustomHead
                title='Admin - Kelola Pengguna'
                description='Admin kelola pengguna'
            />
            <AdminLayout>
                <DashboardTitle title='Kelola Pengguna' />
                <UserTable />
            </AdminLayout>
            <VerifModal show={0} />
            <DeleteModal show={0} />
        </>
    );
}

export default KelolaPenggunaPage;