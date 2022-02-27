import CustomHead from "../../components/shared/CustomHead"
import DashboardTitle from "../../components/shared/Dashboard/DashboardTitle"
import AddEditKegiatanModal from "../../components/Takmir/KelolaKegiatan/AddEditKegiatanModal"
import AddKegiatanBtn from "../../components/Takmir/KelolaKegiatan/AddKegiatanBtn"
import KegiatanTable from "../../components/Takmir/KelolaKegiatan/KegiatanTable"
import TakmirLayout from "../../layout/TakmirLayout"

const TakmirPage = () => {
    return (
        <>
            <CustomHead
                title='Takmir - Dashboard'
                description='Dashboard takmir masjid'
            />
            <TakmirLayout>
                <DashboardTitle title='Kelola Kegiatan' button={<AddKegiatanBtn />} />
                <KegiatanTable />
                <AddEditKegiatanModal show={true} />
            </TakmirLayout>
        </>
    )
}

export default TakmirPage