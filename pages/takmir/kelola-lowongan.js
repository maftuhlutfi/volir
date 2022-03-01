import { useState } from "react"
import CustomHead from "../../components/shared/CustomHead"
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle"
import ConfirmModal from "../../components/shared/Modal/ConfirmModal"
import AddEditLowonganModal from "../../components/Takmir/KelolaLowongan/AddEditLowonganModal"
import AddLowonganBtn from "../../components/Takmir/KelolaLowongan/AddLowonganBtn"
import LowonganTable from "../../components/Takmir/KelolaLowongan/LowonganTable"
import TakmirLayout from "../../layout/TakmirLayout"

const TakmirPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [masjidData, setMasjidData] = useState(null)

    return (
        <>
            <CustomHead
                title='Takmir - Lowongan'
                description='Lowongan masjid'
            />
            <TakmirLayout>
                <DashboardTitle title='Kelola Lowongan' button={<AddLowonganBtn onClick={() => setShowModal(true)} />} />
                <LowonganTable />
            </TakmirLayout>
            <AddEditLowonganModal show={showModal} onClose={() => setShowModal(false)} />
            <ConfirmModal show={0} text='Hapus Lowongan' />
        </>
    )
}

export default TakmirPage