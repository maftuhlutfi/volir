import { useState } from "react"
import CustomHead from "../../components/shared/CustomHead"
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle"
import TakmirList from "../../components/Takmir/DaftarTakmir/TakmirList"
import AddEditKegiatanModal from "../../components/Takmir/KelolaKegiatan/AddEditKegiatanModal"
import AddKegiatanBtn from "../../components/Takmir/KelolaKegiatan/AddKegiatanBtn"
import KegiatanTable from "../../components/Takmir/KelolaKegiatan/KegiatanTable"
import TakmirLayout from "../../layout/TakmirLayout"

const DaftarTakmirPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [masjidData, setMasjidData] = useState(null)

    return (
        <>
            <CustomHead
                title='Takmir - Kegiatan'
                description='Kegiatan takmir masjid'
            />
            <TakmirLayout>
                <DashboardTitle title='Daftar Takmir' description='Takmir akan otomatis bertambah atau berkurang setelah penerimaan lowongan dan periode takmir' />
                <TakmirList />
            </TakmirLayout>
        </>
    )
}

export default DaftarTakmirPage