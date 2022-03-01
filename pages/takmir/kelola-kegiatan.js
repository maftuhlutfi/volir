import { useState } from "react"
import CustomHead from "../../components/shared/CustomHead"
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle"
import AddEditKegiatanModal from "../../components/Takmir/KelolaKegiatan/AddEditKegiatanModal"
import AddKegiatanBtn from "../../components/Takmir/KelolaKegiatan/AddKegiatanBtn"
import KegiatanTable from "../../components/Takmir/KelolaKegiatan/KegiatanTable"
import TakmirLayout from "../../layout/TakmirLayout"

const KelolaKegiatanPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [masjidData, setMasjidData] = useState(null)

    return (
        <>
            <CustomHead
                title='Takmir - Kegiatan'
                description='Kegiatan takmir masjid'
            />
            <TakmirLayout>
                <DashboardTitle title='Kelola Kegiatan' button={<AddKegiatanBtn onClick={() => setShowModal(true)} />} />
                <KegiatanTable />
                <AddEditKegiatanModal show={showModal} onClose={() => setShowModal(false)} />
            </TakmirLayout>
        </>
    )
}

export default KelolaKegiatanPage