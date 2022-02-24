import AddMasjidBtn from "../../components/Admin/KelolaMasjid/AddMasjidBtn";
import MasjidTable from "../../components/Admin/KelolaMasjid/MasjidTable";
import CustomHead from "../../components/shared/CustomHead";
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle";
import AdminLayout from "../../layout/AdminLayout";

const KelolaMasjidPage = () => {
    return (
        <>
            <CustomHead
                title='Dashboard Admin'
                description='Admin dashboard aplikasi volir'
            />
            <AdminLayout>
                <DashboardTitle title='Kelola Masjid' button={<AddMasjidBtn />} />
                <MasjidTable />
            </AdminLayout>
        </>
    );
}

export default KelolaMasjidPage;