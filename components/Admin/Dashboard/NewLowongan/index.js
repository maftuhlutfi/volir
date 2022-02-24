import LowonganCard from "../../../Lowongan/LowonganCard";

const NewLowongan = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <LowonganCard
                name='Masjid Al Iman Klebengan'
                type='Takmir Masjid'
                status='Masih Buka'
                image='/masjid.jfif'
                location='Sleman - Yogyakarta'
                date='2 hari yang lalu'
            />
            <LowonganCard
                name='Tanya Jawab Pemuda Tersesat'
                type='Panitia'
                status='Ditutup'
                image='/kegiatan.jpg'
                location='Sleman - Yogyakarta'
                date='3 hari yang lalu'
            />
        </div>
    );
}

export default NewLowongan;