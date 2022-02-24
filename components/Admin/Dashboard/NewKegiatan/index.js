import KegiatanCard from "../../../Kegiatan/KegiatanCard";

const NewKegiatan = () => {
    return (
        <div className="grid grid-cols-3 gap-8">
            <KegiatanCard
                price={0}
                date='27 FEB 2022'
                penceramah="Habib Ja'far"
                title='Tanya Jawab Pemuda Tersesat'
                masjid={{
                    name: 'Masjid Al Iman Klebengan',
                    location: 'Sleman - Yogyakarta'
                }}
            />
        </div>
    );
}

export default NewKegiatan;