import { useState } from "react";
import AddEditMasjidModal from "../../components/Admin/KelolaMasjid/AddEditMasjidModal";
import AddMasjidBtn from "../../components/Admin/KelolaMasjid/AddMasjidBtn";
import MasjidTable from "../../components/Admin/KelolaMasjid/MasjidTable";
import CustomHead from "../../components/shared/CustomHead";
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle";
import ConfirmModal from "../../components/shared/Modal/ConfirmModal";
import AdminLayout from "../../layout/AdminLayout";

const KelolaMasjidPage = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <CustomHead
                title='Dashboard Admin'
                description='Admin dashboard aplikasi volir'
            />
            <AdminLayout>
                <DashboardTitle title='Kelola Masjid' button={<AddMasjidBtn />} />
                <MasjidTable />
                <p onClick={() => setShowModal(true)}>Click</p>
            </AdminLayout>
            <AddEditMasjidModal show={showModal} onClose={() => setShowModal(false)} />
            <ConfirmModal show={true} text='Hapus Masjid Blabla' />
        </>
    );
}

export default KelolaMasjidPage;