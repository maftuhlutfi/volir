import { useState } from "react"
import CustomHead from "../../components/shared/CustomHead"
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle"
import ConfirmModal from "../../components/shared/Modal/ConfirmModal"
import AddEditLiterasiModal from "../../components/Takmir/KelolaLiterasi/AddEditLiterasiModal"
import AddLiterasiBtn from "../../components/Takmir/KelolaLiterasi/AddLiterasiBtn"
import LiterasiTable from "../../components/Takmir/KelolaLiterasi/LiterasiTable"
import AddEditLowonganModal from "../../components/Takmir/KelolaLowongan/AddEditLowonganModal"
import AddLowonganBtn from "../../components/Takmir/KelolaLowongan/AddLowonganBtn"
import LowonganTable from "../../components/Takmir/KelolaLowongan/LowonganTable"
import TakmirLayout from "../../layout/TakmirLayout"

const KelolaLiterasiPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [masjidData, setMasjidData] = useState(null)

    return (
        <>
            <CustomHead
                title='Takmir - Literasi'
                description='Literasi masjid'
            />
            <TakmirLayout>
                <DashboardTitle title='Kelola Lowongan' button={<AddLiterasiBtn onClick={() => setShowModal(true)} />} />
                <LiterasiTable />
            </TakmirLayout>
            <AddEditLiterasiModal show={showModal} onClose={() => setShowModal(false)} />
            <ConfirmModal show={0} text='Hapus Lowongan' />
        </>
    )
}

export default KelolaLiterasiPage