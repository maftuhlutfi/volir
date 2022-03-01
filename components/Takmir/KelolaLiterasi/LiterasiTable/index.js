import Image from "next/image";
import Button from "../../../shared/Button";

const LiterasiTable = () => {
    return (
        <table className="text-sm table-fixed table-new-user">
            <thead>
                <tr>
                    <th>Gambar</th>
                    <th>Judul</th>
                    <th>Penulis</th>
                    <th>Tipe</th>
                    <th>Tanggal</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='w-20 text-center'>
                        <Image src={'/kegiatan.jpg'} width={80} height={80} className='object-cover object-center rounded-lg' />
                    </td>
                    <td className='w-[25%]'>
                        <div className='line-clamp-2'>
                            Menangkal Radikalisme dengan Pancasila
                        </div>
                    </td>
                    <td className="text-center w-[160px]">
                        Fadhil Akbar Hussaeni
                    </td>
                    <td className='text-center w-[108px]'>Artikel</td>
                    <td className='text-center w-[140px]'>
                        <div className='line-clamp-2'>
                            2 Maret 2022
                        </div>
                    </td>
                    <td className='w-[108px]'>
                        <div className='grid grid-cols-2 gap-4'>
                            <Button type='secondary' size='sm' icon='icon-edit' full />
                            <Button type='danger' size='sm' icon='icon-trash' full />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default LiterasiTable;